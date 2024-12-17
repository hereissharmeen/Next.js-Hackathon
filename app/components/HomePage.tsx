"use client";
import { Icon } from "@iconify/react";
import Image from 'next/image';
import React from 'react';

const products = [
  {
   
    id: 1,
    name: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    oldPrice: 'Rp 3.500.000',
    discount: '-30%',
    image: 'imge/img4.png'
  },
  {
    id: 2,
    image: 'imge/img5.png'
  },
  {
    id: 3,
    name: 'Lolito',
    description: 'Luxury big sofa',
    price: 'Rp 7.000.000',
    oldPrice: 'Rp 14.000.000',
    discount: '-50%',
    image: 'imge/img6.png'
  },
  {
    id: 4,
    name: 'Respira',
    description: 'Outdoor bar table and stool',
    price: 'Rp 500.000',
    newProduct: true,
    image: 'imge/img7.png'
  },
  {
    id: 5,
    name: 'Grifo',
    description: 'Night lamp',
    price: 'Rp 1.500.000',
    image: 'imge/img8.png'
  },
  {
    id: 6,
    name: 'Muggo',
    description: 'Small mug',
    price: 'Rp 150.000',
    newProduct: true,
    image: 'imge/img9.png'
  },
  {
    id: 7,
    name: 'Pingky',
    description: 'Cute bed set',
    price: 'Rp 7.000.000',
    oldPrice: 'Rp 14.000.000',
    discount: '-50%',
    image: 'imge/img10.png'
  },
  {
    id: 8,
    name: 'Potty',
    description: 'Minimalist flower pot',
    price: 'Rp 500.000',
    newProduct: true,
    image: 'imge/img11.png'
  }
];

const HomePage = () => {
  return (
    <div>
         
   <div className="relative">
  <img
    src="imge/hero.jpg"
    alt="Hero Image"
    className="w-full h-[350px] sm:h-[500px] md:h-[700px] object-cover"
  />
</div>

<section className="bg-white-100 py-12 md:py-20">
  <div className="container mx-auto px-4 text-center">
    <h1 className="text-3xl md:text-4xl font-bold mb-4">Browse The Range</h1>
    <p className="text-base md:text-lg mb-8">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>

    {/* Image Cards */}
    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
      <div className="text-center w-full sm:w-1/3 md:w-1/4">
        <img
          src="imge/img1.png"
          alt="Dining"
          className="w-full h-auto object-cover rounded-lg mb-2"
        />
        <h3 className="text-lg font-semibold">Dining</h3>
      </div>
      <div className="text-center w-full sm:w-1/3 md:w-1/4">
        <img
          src="imge/img2.png"
          alt="Living"
          className="w-full h-auto object-cover rounded-lg mb-2"
        />
        <h3 className="text-lg font-semibold">Living</h3>
      </div>
      <div className="text-center w-full sm:w-1/3 md:w-1/4">
        <img
          src="imge/img3.png"
          alt="Bedroom"
          className="w-full h-auto object-cover rounded-lg mb-2"
        />
        <h3 className="text-lg font-semibold">Bedroom</h3>
      </div>
    </div>

    {/* Product Grid */}
    <h2 className="text-3xl font-semibold text-center mt-8 mb-8">
      Our Products
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-gray-100 p-4 relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover mb-4"
          />
          {product.discount && (
            <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
              {product.discount}
            </span>
          )}
          {product.newProduct && (
            <span className="absolute top-2 right-2 bg-green-500 text-white text-sm px-2 py-1 rounded">
              New
            </span>
          )}
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <p className="text-gray-900 font-semibold mb-2">{product.price}</p>
          {product.oldPrice && (
            <p className="text-gray-500 line-through">{product.oldPrice}</p>
          )}
        </div>
      ))}
    </div>
  </div>
</section>





      <div className="bg-[#fdf7f1] py-12">
      <div className="flex items-center gap-8 ">
        {/* Left Content */}
        <div className="text-left pl-[100px] pr-[42px] flex flex-col gap-[25px]">
          <div className="flex flex-col gap-2">
            <h2 className="text-[40px] font-bold text-Gray1 leading-[42px]">
              50+ Beautiful rooms inspiration
            </h2>
            <p className="text-[16px] font-medium text-Gray2">
              Our designer already made a lot of beautiful prototype of rooms
              that inspire you.
            </p>
          </div>
           <button className="bg-[#b48736] text-white px-[36px] py-[12px] font-semibold text-[16px] w-fit">
            Explore More
          </button> 
        </div>

        {/* Right Content */}
        <div className="w-full md:flex hidden items-center justify-center gap-8 ">
          {/* Main Image */}
          <div className="relative w-[404px] h-[582px] overflow-hidden ">
            
            <Image src="/imge/img12.png"
              alt="Inner Peace"
              className="w-full h-full object-cover"
              width={900} height={100}
              ></Image>
            <div className="absolute bottom-6 left-6 bg-white bg-opacity-70 p-8 ">
              <p className="text-[16px] font-medium text-Gray2">
                01 —— Bed Room
              </p>
              <h3 className="text-[28px] font-semibold text-Gray1">
                Inner Peace
              </h3>
            </div>
            <div className="p-[12px] bg-primary w-[48px] h-[48px] absolute bottom-6 right-24">
              <Icon
                icon="solar:arrow-right-outline"
                className="text-white w-6 h-6"
              />
            </div>
          </div>

          {/* Smaller Images */}
          <div className="flex flex-col justify-between h-[582px]">
            <div className="flex h-[486px] gap-[24px] ">
              <div className="w-[372px]  overflow-hidden">
                
                <Image src="/imge/img13.png"
                  alt="Modern Vibes"
                  className="object-cover"
                  width={900} height={100}></Image>
              </div>
              <div className="w-fit h-[450px] overflow-hidden">
                
                <Image src="/imge/img15.png"
                  alt="Modern Vibes"
                  className="object-contain"
                  width={60} height={100}></Image>
              </div>
            </div>
            <div className="flex gap-[20px] items-center mb-[30px]">
              <span className="w-[27px] h-[27px] rounded-full border border-primary cursor-pointer bg-transparent flex justify-center items-center">
                <div className="bg-primary w-[11px] h-[11px] rounded-full"></div>
              </span>
              <span className="bg-Gray5 w-[11px] h-[11px] rounded-full"></span>
              <span className="bg-Gray5 w-[11px] h-[11px] rounded-full"></span>
              <span className="bg-Gray5 w-[11px] h-[11px] rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
      

<div className="w-full pt-[30px] md:pt-[67px] pb-[50px] bg-lightBG">
            <div className="text-center relative w-full md:top-5 top-0">
                <h3 className="text-[14px] md:text-[20px] font-semibold text-Gray2">Share your setup with</h3>
                <h2 className="text-[30px] md:text-[40px] font-bold text-Gray1">#FuniroFurniture</h2>
            </div>
            <div className="flex flex-col items-center w-full">
               {/* Image */}
               <div className="w-full">
           <Image 
               src="/imge/img14.png" 
               width={1590} 
               height={100} 
               alt="images" 
              className="block mx-auto" 
              />
       </div>
           <div className="w-full border-b border-[#D9D9D9] mt-8"></div>
       </div>

        </div>
    <footer className="bg-Button flex flex-wrap justify-between gap-8 p-6 md:p-10">
  <div className="w-full sm:w-1/2 lg:w-1/4 text-center md:text-left">
    <h2 className="text-xl font-bold">Funiro.</h2>
    <p className="text-gray-500">
      400 University Drive Suite 200 Coral <br /> Gables, FL 33134 USA.
    </p>
  </div>

  <div className="w-full sm:w-1/2 lg:w-1/4">
    <h2 className="text-lg font-semibold mb-2">Links</h2>
    <ul className="text-gray-600">
      <li>Home</li>
      <li>Shop</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </div>

  <div className="w-full sm:w-1/2 lg:w-1/4">
    <h2 className="text-lg font-semibold mb-2">Help</h2>
    <ul className="text-gray-600">
      <li>Payment Options</li>
      <li>Returns</li>
      <li>Privacy Policies</li>
    </ul>
  </div>

  <div className="w-full sm:w-1/2 lg:w-1/4">
    <h2 className="text-lg font-semibold mb-2">Newsletter</h2>
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Enter Your Email Address"
        className="border-b border-gray-600 w-full py-1"
      />
      <button className="text-gray-600 border-b border-gray-600">
        SUBSCRIBE
      </button>
    </div>
  </div>
</footer>

</div>

    
  );
};

export default HomePage;
