"use client"; // Ensure this is at the top

import React, { useState, ChangeEvent } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Checkout() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    country: 'Sri Lanka',
    address: '',
    city: '',
    province: 'Western Province',
    zip: '',
    phone: '',
    email: '',
    additionalInfo: '',
  });

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      <Head>
        <title>Cart</title>
        <meta name="description" content="Cart" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <img src="imge/logo.png" alt="logo" className="h-8 w-auto"/>
        </div>
        
        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 lg:space-x-20">
          <li>
            <Link href="/" className="text-gray-700 hover:text-amber-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="text-gray-700 hover:text-amber-500">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-gray-700 hover:text-amber-500">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-700 hover:text-amber-500">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/checkout" className="text-gray-700 hover:text-amber-500">
              Checkout
            </Link>
          </li>
          <li>
            <Link href="/product" className="text-gray-700 hover:text-amber-500">
             Product Comparison
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-700 hover:text-amber-500 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Icons */}
        <div className="flex space-x-6 items-center">
          <button className="text-gray-600 hover:text-gray-900">
        <Link href="/user">
            <img src="imge/user.png" alt="user" className="h-5 w-5"/>
            </Link>
          </button>

          <button className="text-gray-600 hover:text-gray-900">
        <Link href="/search">

            <img src="imge/search.png" alt="search" className="h-5 w-5"/>
            </Link>
          </button>
          
          <button className="text-gray-600 hover:text-gray-900">
        <Link href="/heart">

            <img src="imge/heart.png" alt="heart" className="h-5 w-5"/>
            </Link>
          </button>

          <button className="text-gray-600 hover:text-gray-900">
          <Link href="/cart">

            <img src="imge/cart.png" alt="cart" className="h-5 w-5"/>
            </Link>
          </button>

        </div>
      </div>
    </header>
      <div>
        <img src="imge/checkout.png" alt="hero" height={100} width={2000}/>
      </div>

    <div className="min-h-screen bg-white-800 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Billing details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
              Company Name (Optional)
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Country / Region
            </label>
            <select
              id="country"
              name="country"
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="Sri Lanka">Sri Lanka</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Street Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              Town / City
            </label>
            <input
              id="city"
              name="city"
              type="text"
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="province" className="block text-sm font-medium text-gray-700">
              Province
            </label>
            <select
              id="province"
              name="province"
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              value={formData.province}
              onChange={handleChange}
            >
              <option value="Western Province">Western Province</option>
            </select>
          </div>
          <div>
            <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
              ZIP Code
            </label>
            <input
              id="zip"
              name="zip"
              type="text"
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              value={formData.zip}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">
              Additional Information
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              rows={4}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              value={formData.additionalInfo}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="max-w-lg w-full p-6 ml-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Product</h2>
        <div className="mt-4 flex justify-between">
          <p>Asgaard sofa x 1</p>
          <p>Rs. 250,000.00</p>
        </div>
        <div className="mt-4 flex justify-between">
          <p>Subtotal</p>
          <p>Rs. 250,000.00</p>
        </div>
        <div className="mt-4 flex justify-between font-bold text-xl">
          <p>Total</p>
          <p className='text-yellow-600'>Rs. 250,000.00</p>
        </div>
        <div className="mt-6">
          <p className="text-lg font-semibold">Direct Bank Transfer</p>
          <p className='text-gray-300'>Make your payment directly into our bank account.Plases use you order ID as the payment regerence. Your order will not be shipped until the funds have cleared in our account</p>
          <div className="mt-4 space-y-4">
            <div className="flex items-center">
              <input
                id="directBank"
                name="paymentMethod"
                type="radio"
                required
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
              />
              <label htmlFor="directBank" className="ml-3 block text-sm font-medium text-gray-700">
                Direct Bank Transfer
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="cashOnDelivery"
                name="paymentMethod"
                type="radio"
                required
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
              />
              <label htmlFor="cashOnDelivery" className="ml-3 block text-sm font-medium text-gray-700">
                Cash On Delivery
              </label>
            </div>
            <p>Your personal data will be used to support your experience throughout this website, to manage access to your account and for other perposes described in our</p><h3 className='mt-4 flex justify-between font-bold'>Privacy Policy</h3>
            
          </div>
        </div>
        <div className="mt-6">
        <button className="mt-4 w-full bg-white text-black text-lg py-2 rounded-lg  border border-black rounded-md"> Place Order</button>
        </div>
        
      </div>
      
    </div>
    <div className="bg-[#fdf7f2] py-8 px-4 md:px-16">
  <div className="flex flex-wrap justify-between items-center gap-8 max-w-5xl mx-auto">
    {/* High Quality */}
    <div className="flex items-center gap-4">
      <img src="imge/trophy.png" alt="High Quality" className="w-10 h-10" />
      <div>
        <h3 className="font-bold text-lg text-black">High Quality</h3>
        <p className="text-sm text-gray-500">crafted from top materials</p>
      </div>
    </div>

    {/* Warranty Protection */}
    <div className="flex items-center gap-4">
      <img src="imge/guarantee.png" alt="Warranty Protection" className="w-10 h-10" />
      <div>
        <h3 className="font-bold text-lg text-black">Warranty Protection</h3>
        <p className="text-sm text-gray-500">Over 2 years</p>
      </div>
    </div>

    {/* Free Shipping */}
    <div className="flex items-center gap-4">
      <img src="imge/shipping.png" alt="Free Shipping" className="w-10 h-10" />
      <div>
        <h3 className="font-bold text-lg text-black">Free Shipping</h3>
        <p className="text-sm text-gray-500">Order over 150 $</p>
      </div>
    </div>

    {/* 24/7 Support */}
    <div className="flex items-center gap-4">
      <img src="imge/customer.png" alt="24/7 Support" className="w-10 h-10" />
      <div>
        <h3 className="font-bold text-lg text-black">24 / 7 Support</h3>
        <p className="text-sm text-gray-500">Dedicated support</p>
      </div>
    </div>
  </div>
</div>


<footer className="bg-Button h-auto flex flex-col justify-center items-center w-full px-4 sm:px-8 md:px-16 lg:px-[100px] py-7 md:py-5">
      <div className="w-full max-w-[1240px] h-auto flex flex-col gap-[48px]">
        <div className="w-full h-auto flex flex-col lg:flex-row justify-between gap-8 lg:gap-[48px]">
          <div className="flex flex-col gap-[20px] md:gap-[50px] w-full lg:w-[30%] md:text-left text-center">
            <h2 className="text-[24px] font-bold text-black">Funiro.</h2>
            <div>
              <h2 className="text-[16px] font-normal text-[#9F9F9F]">
                400 University Drive Suite 200 Coral <br /> Gables, <br />FL 33134 USA.
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-[50px] w-full lg:w-[30%]">
            <h2 className="text-[16px] font-medium text-[#9F9F9F]">Links</h2>
            <ul className="text-[16px] font-medium text-black flex flex-col justify-between h-full">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="flex flex-col gap-[50px] w-full lg:w-[30%] h-auto">
            <h2 className="text-[16px] font-medium text-[#9F9F9F]">Help</h2>
            <ul className="text-[16px] font-medium text-black h-full flex flex-col justify-between">
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>

          <div className="flex flex-col gap-[50px] w-full lg:w-[30%]">
            <h2 className="text-[16px] font-medium text-[#9F9F9F]">Newsletter</h2>
            <div className="flex gap-4 sm:gap-8 flex-col sm:flex-row">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Your Email Address"
                className="text-[14px] font-normal text-[#9F9F9F] border-0 border-b border-black w-fit"
              />

              <button className="text-[14px] font-medium text-black border-0 border-b border-black w-fit">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        <div className="pt-[16px] w-full border-t border-[#D9D9D9] text-left">
          <p className="text-black text-[16px]">
            2023 furino. All rights reserved
          </p>
        </div>
      </div>
    </footer>
      </div>
  );
}
