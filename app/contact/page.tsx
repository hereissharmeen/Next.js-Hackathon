"use client";
import { TiLocation } from "react-icons/ti";
import { FaPhone } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";
import Link from "next/link";
import Head from "next/head";
export default function Contact() {
  return (
    
    <div>
    <Head>
      <title>Shop</title>
      <meta name="description" content="Shop Page" />
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
            <Link href="/Shop" className="text-gray-700 hover:text-amber-500">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/Blog" className="text-gray-700 hover:text-amber-500">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/Contact" className="text-gray-700 hover:text-amber-500">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/Checkout" className="text-gray-700 hover:text-amber-500">
              Checkout
            </Link>
          </li>
          <li>
            <Link href="/Product" className="text-gray-700 hover:text-amber-500">
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
          <Link href="/Cart">

            <img src="imge/cart.png" alt="cart" className="h-5 w-5"/>
            </Link>
          </button>

        </div>
      </div>
    </header>
    <div>
      <img src="imge/contact.png" alt="hero" height={100} width={2000}/>
    </div>

    <main>
      <div className="h-[30vh] w-full bg-cover bg-center" style={{ backgroundImage: "url('/cool.jpg')" }}></div>

      {/* Contact Header */}
      <div className="max-w-screen-2xl px-4 py-16 text-center">
        <h1 className="text-4xl font-semibold text-black font-poppins">Get In Touch With Us</h1>
        <p className="text-lg text-gray-500 font-normal mt-4">
          For more information about our products & services, please feel free to drop us an email. 
          Our staff will always be there to help you. Don’t hesitate!
        </p>
      </div>
  {/* Contact Info & Form Section */}
  <div className="flex flex-col md:flex-row justify-center max-w-screen-2xl mx-auto px-4">
        {/* Contact Info */}
        <div className="flex-1 space-y-8">
          {/* Address */}
          <div className="flex items-start space-x-4 text-3xl text-gray-700">
            <TiLocation/>
            <div>
              <h2 className="font-bold text-gray-900 text-2xl">Address</h2>
              <p className="text-black mt-1">236 5th Avenue, New York NY 10000, United States</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-4 text-3xl text-gray-700">
            <FaPhone/>
            <div>
              <h2 className="font-bold text-gray-900 text-2xl">Phone</h2>
              <p className="text-black mt-1">Mobile: +(84) 546-6789</p>
              <p className="text-black mt-1">Hotline: +(84) 456-6789</p>
            </div>
          </div>

          {/* Working Time */}
          <div className="flex items-start space-x-4 text-3xl text-gray-700">
            <IoTimeSharp/>
            <div>
            <h2 className="font-bold text-gray-900 text-2xl">Working Time</h2>
              <p className="text-black mt-1">Monday-Friday: 9:00-22:00</p>
              <p className="text-black mt-1">Saturday-Sunday: 9:00-21:00</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 w-full md:w-[600px] bg-white p-8  mt-8 md:mt-0">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 font-medium text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full p-3 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter subject"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full p-3 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your message"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
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