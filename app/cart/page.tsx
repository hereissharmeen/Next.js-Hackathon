import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const Cart = () => {
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
        <img src="imge/cartimg.png" alt="hero" height={100} width={2000}/>
      </div>


      <div className="container mx-auto p-6">
      <div className="flex flex-col lg:flex-row bg-white p-6">
        {/* Cart Items */}
        <div className="w-full lg:w-2/3">
          <div className="bg-[#f9f2e6] p-4">
            <div className="grid grid-cols-4 gap-4 font-semibold text-center">
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Subtotal</span>
            </div>
          </div>
          <div className="flex items-center justify-between border-b py-4">
            <div className="flex items-center">
              <Image src="/imge/cartimg2.png" alt="Product" width={96} height={96} className="mr-4" />
              <span className="text-gray-600">Asgaard sofa</span>
            </div>
            <span className="text-gray-600 text-center w-1/4">Rs. 250,000.00</span>
            <input type="number" min="1" value="1" className="w-12 h-10 border border-gray-300 text-center" />
            <span className="text-gray-600 text-center w-1/4">Rs. 250,000.00</span>
            <button className="text-gold">
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>

        {/* Cart Totals */}
        <div className="w-full lg:w-1/3 bg-[#f9f2e6] p-5 mt-5 lg:mt-0 lg:ml-4">
          <h2 className="font-bold text-lg">Cart Totals</h2>
          <div className="flex justify-between mt-4">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-gray-600">Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between mt-4">
            <span className="font-bold">Total</span>
            <span className="font-bold gold">Rs. 250,000.00</span>
          </div>
          <button className="mt-4 w-full bg-black text-white text-lg py-2 rounded-lg">Check Out</button>
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
};

export default Cart;