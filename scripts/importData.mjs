import { createClient } from '@sanity/client';
import { Buffer } from 'buffer'; // Import Buffer explicitly in ES modules

const client = createClient({
  projectId: 'gckufxqm', // Replace with your actual project ID
  dataset: 'production',
  apiVersion: '2023-01-01', // Use the correct API version
  token: 'sk2jL39wNlTSXV7n0WeTgLjTJG6JuZwgoZ3nvVpSAvBCTzK0dffqSktEAGkGRD59msKc4plPNDHWXBEhhtL413vxmSBfga07p8PoNPBaixYVoaOewKh6u2YkhLgPdI320v3EGp7GDEEmL544lThpJGgsUjWWL6x0knBe2WPe8Zrv9AleWGZp', // Replace with a valid token
  useCdn: false, // Disable CDN for write operations
});

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer); // Correct usage of Buffer

    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imageUrl);

    if (imageId) {
      const document = {
        _type: 'product',
        title: product.title,
        price: product.price,
        productImage: {
          _type: 'image',
          asset: {
            _ref: imageId,
          },
        },
        tags: product.tags,
        discountPercentage: product.discountPercentage, // Fixed typo
        description: product.description,
        isNew: product.isNew,
      };

      const createdProduct = await client.create(document);
      console.log(`Product "${product.title}" uploaded successfully:`, createdProduct);
    } else {
      console.log(`Product "${product.title}" skipped due to image upload failure.`);
    }
  } catch (error) {
    console.error('Error uploading product:', error);
  }
}

async function importProducts() {
  try {
    const response = await fetch('https://template6-six.vercel.app/api/products');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = await response.json();

    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

importProducts();
