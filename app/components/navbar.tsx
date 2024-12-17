  import Link from "next/link";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;