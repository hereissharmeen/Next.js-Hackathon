import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaUser, FaCalendarAlt, FaTags } from "react-icons/fa";

const blogPosts = [
  {
    title: "Going all-in with millennial design",
    date: "14 Oct 2022",
    category: "Wood",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    imageUrl: "/imge/img18.png",
    link: "#",
  },
  {
    title: "Exploring new ways of decorating",
    date: "14 Oct 2022",
    category: "Handmade",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    imageUrl: "/imge/img19.png",
    link: "#",
  },
  {
    title: "Handmade pieces that took time to make",
    date: "14 Oct 2022",
    category: "Wood",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    imageUrl: "/imge/img20.png",
    link: "#"
 },
];

const categories = [
  { name: "Crafts", count: 2 },
  { name: "Design", count: 8 },
  { name: "Handmade", count: 7 },
  { name: "Interior", count: 1 },
  { name: "Wood", count: 6 },
];

const recentPosts = [
  {
    title: "Going all-in with millennial design",
    date: "03 Aug 2022",
    imageUrl: "/imge/img21.png",
  },
  {
    title: "Exploring new ways of decorating",
    date: "03 Aug 2022",
    imageUrl: "/imge/img22.png",
  },
  {
    title: "Handmade pieces that took time to make",
    date: "03 Aug 2022",
    imageUrl: "/imge/img23.png",
  },
  {
    title: "Modern home in milon",
    date: "03 Aug 2022",
    imageUrl: "/imge/img24.png",
  },
  {
    title: "Colourful ",
    date: "03 Aug 2022",
    imageUrl: "/imge/img25.png",
  },
];

export default function Blog() {
  return (
    
       <div>
       <Head>
         <title>Blog</title>
         <meta name="description" content="Blog Page" />
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
         <img src="imge/blog.png" alt="hero" height={100} width={2000}/>
       </div>
           
        {/* Blog Content */}    
        <div className="container mx-auto flex py-10"> 
         {/* Main Blog Section */}
         <div className="w-3/4 space-y-8">
           {blogPosts.map((post, index) => (
             <div key={index} className="bg-white rounded-lg overflow-hidden">
               <Image
                src={post.imageUrl}
                alt={post.title}
                width={1200}
                 height={600}
                className="w-100 h-80 object-cover"
              />
              <div className="p-6">
                 <p className="text-gray-500 text-sm">
                 Admin • {post.date} • {post.category}
                 </p>
                 <h2 className="text-2xl font-bold mt-2">{post.title}</h2>
                 <p className="text-gray-700 mt-4">{post.description}</p>
                 <Link href={post.link} className="text-black-500 underline mt-4 block">
                  Read more
                 </Link>
               </div>
             </div>
           ))}
            {/* Pagination */}
      <div className="flex justify-center mt-8">
        <button className="px-4 py-2 mx-1 bg-yellow-500 rounded-lg">1</button>
        <button className="px-4 py-2 mx-1 bg-[#F9F1E7] rounded-lg">2</button>
        <button className="px-4 py-2 mx-1 bg-[#F9F1E7] rounded-lg">3</button>
        <button className="px-4 py-2 mx-1 bg-[#F9F1E7] rounded-lg">Next</button>
      </div>
        </div>
        
        {/* Sidebar Section */}
        <div className="w-1/5">
          {/* Search Bar */}
          <div className="bg-white p-4 rounded-lg mb-6">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          {/* Categories */}
          <div className="bg-white p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index} className="flex justify-between text-gray-700">
                  <span>{category.name}</span>
                  <span>({category.count})</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
            <ul className="space-y-4">
              {recentPosts.map((post, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-sm font-medium">{post.title}</p>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
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

<footer className="bg-Button h-auto w-full flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 lg:px-[100px] py-7 md:py-5 ">
      <div className="w-full max-w-[1240px] h-auto flex flex-col gap-[48px] ">
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
