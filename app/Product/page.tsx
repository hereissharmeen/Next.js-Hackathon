import React from 'react'
import Head from 'next/head'
import Link from 'next/link'


function product() {
  return (
    <div>
      <Head>
        <title>Product</title>
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
        <img src="imge/product.png" alt="hero" height={100} width={2000}/>
      </div>
      
            <div className="bg-white p-6">
  <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-6">
    {/* Left Section */}
    <div className="flex flex-col">
      <h2 className="text-xl font-bold text-center lg:text-left">
        Go to Product page for more Products
      </h2>
      <a href="#" className="underline mt-2 text-center lg:text-left">
        View More
      </a>
    </div>

    {/* Middle Section (Grid for Products) */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {/* Product 1 */}
      <div className="p-4 flex flex-col items-center">
        <img
          src="/imge/sofa1.png"
          alt="Asgaard Sofa"
          className="w-48 h-32 object-cover rounded-lg"
        />
        <h3 className="text-lg font-semibold mt-4">Asgaard Sofa</h3>
        <p className="text-gray-500 mt-2">Rs. 250,000.00</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">⭐⭐⭐⭐☆</span>
          <p className="text-gray-500 ml-2">4.7</p>
          <p className="text-gray-500 ml-1">(204 Review)</p>
        </div>
      </div>

      {/* Product 2 */}
      <div className="p-4 flex flex-col items-center">
        <img
          src="/imge/sofa2.png"
          alt="Outdoor Sofa Set"
          className="w-48 h-32 object-cover rounded-lg"
        />
        <h3 className="text-lg font-semibold mt-4">Outdoor Sofa Set</h3>
        <p className="text-gray-500 mt-2">Rs. 224,000.00</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">⭐⭐⭐⭐☆</span>
          <p className="text-gray-500 ml-2">4.2</p>
          <p className="text-gray-500 ml-1">(145 Review)</p>
        </div>
      </div>
    </div>

    {/* Right Section */}
    <div className="flex flex-col items-center lg:items-end">
      <h2 className="text-xl font-bold text-center lg:text-right">
        Add A Product
      </h2>
      <button className="bg-yellow-600 text-white py-2 px-4 mt-2 rounded-lg flex items-center">
        Choose a Product
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</div>


        <div className="bg-white py-8 px-4 md:px-16">
  <div className="max-w-6xl mx-auto">
    {/* General Section */}
    <div className="grid grid-cols-3 gap-8 border-b pb-6">
      <div>
        <h3 className="font-bold text-xl text-black">General</h3>
        <ul className="space-y-2">
          <li className="text-gray-600">Sales Package</li>
          <li className="text-gray-600">Model Number</li>
          <li className="text-gray-600">Secondary Material</li>
          <li className="text-gray-600">Configuration</li>
          <li className="text-gray-600">Upholstery Material</li>
          <li className="text-gray-600">Upholstery Color</li>
        </ul>
      </div>
      <div>
        <ul className="space-y-2">
          {/* <li className="text-gray-800">1 sectional sofa</li> */}
          <li className='text-gray-800'>1 sectional sofa</li>
          <li className="text-gray-800">TFCBLIGRBL6SRHS</li>
          <li className="text-gray-800">Solid Wood</li>
          <li className="text-gray-800">L-shaped</li>
          <li className="text-gray-800">Fabric + Cotton</li>
          <li className="text-gray-800">Bright Grey & Lion</li>
        </ul>
      </div>
      <div>
        <ul className="space-y-2">
          <li className="text-gray-800">1 Three Seater, 2 Single Seater</li>
          <li className="text-gray-800">DTUBLIGRBL568</li>
          <li className="text-gray-800">Solid Wood</li>
          <li className="text-gray-800">L-shaped</li>
          <li className="text-gray-800">Fabric + Cotton</li>
          <li className="text-gray-800">Bright Grey & Lion</li>
        </ul>
      </div>
    </div>

    {/* Product Section */}
    <div className="grid grid-cols-3 gap-8 pt-6">
      <div>
        <h3 className="font-bold text-xl text-black">Product</h3>
        <ul className="space-y-2">
          <li className="text-gray-600">Filling Material</li>
          <li className="text-gray-600">Finish Type</li>
          <li className="text-gray-600">Adjustable Headrest</li>
          <li className="text-gray-600">Maximum Load Capacity</li>
          <li className="text-gray-600">Origin of Manufacture</li>
        </ul>
      </div>
      <div>
        <ul className="space-y-2">
          <li className="text-gray-800">Foam</li>
          <li className="text-gray-800">Bright Grey & Lion</li>
          <li className="text-gray-800">No</li>
          <li className="text-gray-800">280 KG</li>
          <li className="text-gray-800">India</li>
        </ul>
      </div>
      <div>
        <ul className="space-y-2">
          <li className="text-gray-800">Matte</li>
          <li className="text-gray-800">Bright Grey & Lion</li>
          <li className="text-gray-800">Yes</li>
          <li className="text-gray-800">300 KG</li>
          <li className="text-gray-800">India</li>
        </ul>
      </div>
    </div>
  </div>
</div>



<div className="bg-white py-8 px-4 md:px-16">
  <div className="max-w-6xl mx-auto">
    {/* Dimensions Section */}
    <div className="grid grid-cols-3 gap-8 border-b pb-6">
      <div>
        <h3 className="font-bold text-xl text-black">Dimensions</h3>
        <ul className="space-y-2">
          <li className="text-gray-600">Width</li>
          <li className="text-gray-600">Height</li>
          <li className="text-gray-600">Depth</li>
          <li className="text-gray-600">Weight</li>
          <li className="text-gray-600">Seat Height</li>
          <li className="text-gray-600">Leg Height</li>
        </ul>
      </div>
      <div>
        <ul className="space-y-2">
          <li className="text-gray-800">265.32 cm</li>
          <li className="text-gray-800">76 cm</li>
          <li className="text-gray-800">167.76 cm</li>
          <li className="text-gray-800">45 KG</li>
          <li className="text-gray-800">41.52 cm</li>
          <li className="text-gray-800">5.46 cm</li>
        </ul>
      </div>
      <div>
        <ul className="space-y-2">
          <li className="text-gray-800">265.32 cm</li>
          <li className="text-gray-800">76 cm</li>
          <li className="text-gray-800">167.76 cm</li>
          <li className="text-gray-800">65 KG</li>
          <li className="text-gray-800">41.52 cm</li>
          <li className="text-gray-800">5.46 cm</li>
        </ul>
      </div>
    </div>

    {/* Warranty Section */}
    <div className="grid grid-cols-3 gap-8 pt-6">
      <div>
        <h3 className="font-bold text-xl text-black">Warranty</h3>
        <ul className="space-y-2">
          <li className="text-gray-600">Warranty Summary</li>
          <li className="text-gray-600">Warranty Service Type</li>
          <li className="text-gray-600">Covered in Warranty</li>
          <li className="text-gray-600">Not Covered in Warranty</li>
          <li className="text-gray-600">Domestic Warranty</li>
        </ul>
      </div>
      <div>
        <ul className="space-y-2">
          <li className="text-gray-800">1 Year Manufacturing Warranty</li>
          <li className="text-gray-800">For Warranty Claims or Any Product Related Issues Please Email at operations@trevfurniturere.com</li>
          <li className="text-gray-800">Warranty Against Manufacturing Defect</li>
          <li className="text-gray-800">The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</li>
          <li className="text-gray-800">1 Year</li>
          <button className="bg-yellow-600 text-white py-2 px-4">Add To Cart</button>
        </ul>
      </div>
      <div>
        <ul className="space-y-2">
          <li className="text-gray-800">1.2 Year Manufacturing Warranty</li>
          <li className="text-gray-800">For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</li>
          <li className="text-gray-800">Warranty of the product is limited to manufacturing defects only.</li>
          <li className="text-gray-800">The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</li>
          <li className="text-gray-800">3 Months</li>
          <button className="bg-yellow-600 text-white py-2 px-4">Add To Cart</button>
        </ul>
      </div>
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
  )
}

export default product