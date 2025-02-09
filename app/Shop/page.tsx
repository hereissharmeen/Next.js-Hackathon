'use client'

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { allProducts } from "@/sanity/lib/queries";
import { Product } from "@/type/Product";
import React, { useEffect, useState } from "react";
import { urlFor } from "@/sanity/lib/image";

const ShoppingCart = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Product[] = await client.fetch(allProducts);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product._id} className="border p-4 rounded-lg shadow bg-white">
             {product.image ? (
  <Image
    src={urlFor(product.image.asset).url()}
    alt={product.title || "Product Image"}
    width={200}
    height={200}
    className="rounded object-cover mx-auto"
  />
) : (
  <div className="bg-gray-200 w-[200px] h-[200px] flex items-center justify-center mx-auto">
    <span>No Image</span>
  </div>
)}
            <h2 className="text-lg font-bold mt-4 text-center">{product.title}</h2>
              <p className="text-gray-700 font-semibold text-center">${product.price}</p>
      
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No products available.</p>
      )}
    </div>
  );
};

export default ShoppingCart;


// import Head from 'next/head';

// import Link from 'next/link';
// import Image from 'next/image';
// const products = [
//   {
   
//     id: 1,
//     name: 'Syltherine',
//     description: 'Stylish cafe chair',
//     price: 'Rp 2.500.000',
//     oldPrice: 'Rp 3.500.000',
//     discount: '-30%',
//     image: 'imge/img4.png'
//   },
//   {
//     id: 2,
//     image: 'imge/img5.png'
//   },
//   {
//     id: 3,
//     name: 'Lolito',
//     description: 'Luxury big sofa',
//     price: 'Rp 7.000.000',
//     oldPrice: 'Rp 14.000.000',
//     discount: '-50%',
//     image: 'imge/img6.png'
//   },
//   {
//     id: 4,
//     name: 'Respira',
//     description: 'Outdoor bar table and stool',
//     price: 'Rp 500.000',
//     newProduct: true,
//     image: 'imge/img7.png'
//   },
//   {
//     id: 5,
//     name: 'Syltherine',
//     description: 'Stylish cafe chair',
//     price: 'Rp 2.500.000',
//     oldPrice: 'Rp 3.500.000',
//     discount: '-30%',
//     image: 'imge/img4.png'
//   },
//   {
//     id: 6,
//     name: 'Leviosa',
//     description: 'Stylish cafe chair',
//     price: 'Rp 2500.000',
//     newProduct: true,
//     image: 'imge/img17.png'
//   },
//   {
//     id: 7,
//     name: 'Lolito',
//     description: 'Luxury big sofa',
//     price: 'Rp 7.000.000',
//     oldPrice: 'Rp 14.000.000',
//     discount: '-50%',
//     image: 'imge/img6.png'
//   },
//   {
//     id: 8,
//     name: 'Respira',
//     description: 'Outdoor bar table and stool',
//     price: 'Rp 500.000',
//     newProduct: true,
//     image: 'imge/img7.png'
//   },
//   {
   
//     id: 9,
//     name: 'Syltherine',
//     description: 'Stylish cafe chair',
//     price: 'Rp 2.500.000',
//     oldPrice: 'Rp 3.500.000',
//     discount: '-30%',
//     image: 'imge/img4.png'
//   },
//   {
//     id: 10,
//     name: 'Leviosa',
//     description: 'Stylish cafe chair',
//     price: 'Rp 2500.000',
//     newProduct: true,
//     image: 'imge/img17.png'
//   },
//   {
//     id: 11,
//     name: 'Lolito',
//     description: 'Luxury big sofa',
//     price: 'Rp 7.000.000',
//     oldPrice: 'Rp 14.000.000',
//     discount: '-50%',
//     image: 'imge/img6.png'
//   },
//   {
//     id: 12,
//     name: 'Respira',
//     description: 'Outdoor bar table and stool',
//     price: 'Rp 500.000',
//     newProduct: true,
//     image: 'imge/img7.png'
//   },
//   {
//     id: 13,
//     name: 'Syltherine',
//     description: 'Stylish cafe chair',
//     price: 'Rp 2.500.000',
//     oldPrice: 'Rp 3.500.000',
//     discount: '-30%',
//     image: 'imge/img4.png'
//   },
//   {
//     id: 14,
//     name: 'Leviosa',
//     description: 'Stylish cafe chair',
//     price: 'Rp 2500.000',
//     newProduct: true,
//     image: 'imge/img17.png'
//   },
//   {
//     id: 15,
//     name: 'Lolito',
//     description: 'Luxury big sofa',
//     price: 'Rp 7.000.000',
//     oldPrice: 'Rp 14.000.000',
//     discount: '-50%',
//     image: 'imge/img6.png'
//   },
//   {
//     id: 16,
//     name: 'Respira',
//     description: 'Outdoor bar table and stool',
//     price: 'Rp 500.000',
//     newProduct: true,
//     image: 'imge/img7.png'
//   }
// ];

// const Shop = () => {
//   return (
//     <div>
//       <Head>
//         <title>Shop</title>
//         <meta name="description" content="Shop Page" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <header className="bg-white shadow-md">
//       <div className="container mx-auto flex justify-between items-center py-4 px-6">
//         {/* Logo */}
//         <div className="text-2xl font-bold text-gray-800">
//           <img src="imge/logo.png" alt="logo" className="h-8 w-auto"/>
//         </div>
        
//         {/* Navigation Links */}
//         <ul className="hidden md:flex space-x-8 lg:space-x-20">
//           <li>
//             <Link href="/" className="text-gray-700 hover:text-amber-500">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link href="/Shop" className="text-gray-700 hover:text-amber-500">
//               Shop
//             </Link>
//           </li>
//           <li>
//             <Link href="/Blog" className="text-gray-700 hover:text-amber-500">
//               Blog
//             </Link>
//           </li>
//           <li>
//             <Link href="/Contact" className="text-gray-700 hover:text-amber-500">
//               Contact
//             </Link>
//           </li>
//           <li>
//             <Link href="/Checkout" className="text-gray-700 hover:text-amber-500">
//               Checkout
//             </Link>
//           </li>
//           <li>
//             <Link href="/Product" className="text-gray-700 hover:text-amber-500">
//              Product Comparison
//             </Link>
//           </li>
//         </ul>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center">
//           <button className="text-gray-700 hover:text-amber-500 focus:outline-none">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//             </svg>
//           </button>
//         </div>

//         {/* Icons */}
//         <div className="flex space-x-6 items-center">
//           <button className="text-gray-600 hover:text-gray-900">
//         <Link href="/user">
//             <img src="imge/user.png" alt="user" className="h-5 w-5"/>
//             </Link>
//           </button>

//           <button className="text-gray-600 hover:text-gray-900">
//         <Link href="/search">

//             <img src="imge/search.png" alt="search" className="h-5 w-5"/>
//             </Link>
//           </button>
          
//           <button className="text-gray-600 hover:text-gray-900">
//         <Link href="/heart">

//             <img src="imge/heart.png" alt="heart" className="h-5 w-5"/>
//             </Link>
//           </button>

//           <button className="text-gray-600 hover:text-gray-900">
//           <Link href="/Cart">

//             <img src="imge/cart.png" alt="cart" className="h-5 w-5"/>
//             </Link>
//           </button>

//         </div>
//       </div>
//     </header>
//       <div>
//         <img src="imge/img16.png" alt="hero" height={100} width={2000}/>
//       </div>

//       <div className="container mx-auto py-8">
//       {/* Filter and Results */}
//       <div className="flex justify-between items-center bg-[#F9F1E7] p-4">
//         <div className="flex items-center space-x-4">
//           <button className="flex items-center space-x-2">
//             <Image src="/imge/Filter.png" width={80} height={50} alt="Filter" />
//           </button>
//           <p>| Showing 1–16 of 32 results</p>
//         </div>
//         <div className="flex space-x-4">
//           <div>
//             <label>Show</label>
//             <select className="ml-2 p-1 border border-gray-300">
//               <option>16</option>
//               <option>32</option>
//               <option>48</option>
//             </select>
//           </div>
//           <div>
//             <label>Sort by</label>
//             <select className="ml-2 p-1 border border-gray-300">
//               <option>Default</option>
//               <option>Price: Low to High</option>
//               <option>Price: High to Low</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {products.map(product => (
//               <div key={product.id} className="bg-gray-100 p-4 relative">
//                 <img src={product.image} alt={product.name} className="w-full h-100 object-cover mb-4" />
//                 {product.discount && (
//                   <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">{product.discount}</span>
//                 )}
//                 {product.newProduct && (
//                   <span className="absolute top-2 right-2 bg-green-500 text-white text-sm px-2 py-1 rounded">New</span>
//                 )}
//                 <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
//                 <p className="text-gray-600 mb-2">{product.description}</p>
//                 <p className="text-gray-900 font-semibold mb-2">{product.price}</p>
//                 {product.oldPrice && (
//                   <p className="text-gray-500 line-through">{product.oldPrice}</p>
//                 )}
//               </div>
//             ))}
//           </div>

//       {/* Pagination */}
//       <div className="flex justify-center mt-8">
//         <button className="px-4 py-2 mx-1 bg-yellow-500 rounded-lg">1</button>
//         <button className="px-4 py-2 mx-1 bg-[#F9F1E7] rounded-lg">2</button>
//         <button className="px-4 py-2 mx-1 bg-[#F9F1E7] rounded-lg">3</button>
//         <button className="px-4 py-2 mx-1 bg-[#F9F1E7] rounded-lg">Next</button>
//       </div>
//     </div>

//     <div className="bg-[#fdf7f2] py-8 px-4 md:px-16">
//   <div className="flex flex-wrap justify-between items-center gap-8 max-w-5xl mx-auto">
//     {/* High Quality */}
//     <div className="flex items-center gap-4">
//       <img src="imge/trophy.png" alt="High Quality" className="w-10 h-10" />
//       <div>
//         <h3 className="font-bold text-lg text-black">High Quality</h3>
//         <p className="text-sm text-gray-500">crafted from top materials</p>
//       </div>
//     </div>

//     {/* Warranty Protection */}
//     <div className="flex items-center gap-4">
//       <img src="imge/guarantee.png" alt="Warranty Protection" className="w-10 h-10" />
//       <div>
//         <h3 className="font-bold text-lg text-black">Warranty Protection</h3>
//         <p className="text-sm text-gray-500">Over 2 years</p>
//       </div>
//     </div>

//     {/* Free Shipping */}
//     <div className="flex items-center gap-4">
//       <img src="imge/shipping.png" alt="Free Shipping" className="w-10 h-10" />
//       <div>
//         <h3 className="font-bold text-lg text-black">Free Shipping</h3>
//         <p className="text-sm text-gray-500">Order over 150 $</p>
//       </div>
//     </div>

//     {/* 24/7 Support */}
//     <div className="flex items-center gap-4">
//       <img src="imge/customer.png" alt="24/7 Support" className="w-10 h-10" />
//       <div>
//         <h3 className="font-bold text-lg text-black">24 / 7 Support</h3>
//         <p className="text-sm text-gray-500">Dedicated support</p>
//       </div>
//     </div>
//   </div>
// </div>


// <footer className="bg-Button h-auto flex flex-col justify-center items-center w-full px-4 sm:px-8 md:px-16 lg:px-[100px] py-7 md:py-5">
//       <div className="w-full max-w-[1240px] h-auto flex flex-col gap-[48px]">
//         <div className="w-full h-auto flex flex-col lg:flex-row justify-between gap-8 lg:gap-[48px]">
//           <div className="flex flex-col gap-[20px] md:gap-[50px] w-full lg:w-[30%] md:text-left text-center">
//             <h2 className="text-[24px] font-bold text-black">Funiro.</h2>
//             <div>
//               <h2 className="text-[16px] font-normal text-[#9F9F9F]">
//                 400 University Drive Suite 200 Coral <br /> Gables, <br />FL 33134 USA.
//               </h2>
//             </div>
//           </div>

//           <div className="flex flex-col gap-[50px] w-full lg:w-[30%]">
//             <h2 className="text-[16px] font-medium text-[#9F9F9F]">Links</h2>
//             <ul className="text-[16px] font-medium text-black flex flex-col justify-between h-full">
//               <li>Home</li>
//               <li>Shop</li>
//               <li>About</li>
//               <li>Contact</li>
//             </ul>
//           </div>

//           <div className="flex flex-col gap-[50px] w-full lg:w-[30%] h-auto">
//             <h2 className="text-[16px] font-medium text-[#9F9F9F]">Help</h2>
//             <ul className="text-[16px] font-medium text-black h-full flex flex-col justify-between">
//               <li>Payment Options</li>
//               <li>Returns</li>
//               <li>Privacy Policies</li>
//             </ul>
//           </div>

//           <div className="flex flex-col gap-[50px] w-full lg:w-[30%]">
//             <h2 className="text-[16px] font-medium text-[#9F9F9F]">Newsletter</h2>
//             <div className="flex gap-4 sm:gap-8 flex-col sm:flex-row">
//               <input
//                 type="text"
//                 name=""
//                 id=""
//                 placeholder="Enter Your Email Address"
//                 className="text-[14px] font-normal text-[#9F9F9F] border-0 border-b border-black w-fit"
//               />

//               <button className="text-[14px] font-medium text-black border-0 border-b border-black w-fit">
//                 SUBSCRIBE
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="pt-[16px] w-full border-t border-[#D9D9D9] text-left">
//           <p className="text-black text-[16px]">
//             2023 furino. All rights reserved
//           </p>
//         </div>
//       </div>
//     </footer>
//       </div>
//   );
// };

// export default Shop;