import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaShoppingCart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="p-4 bg-purple-400 text-white pt-10">
      <div className="container mx-auto px-6 md:px-0 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-bold mb-2">Parallel Universe</h1>
          <p className="text-sm mb-4">
            Explore the cosmos of products. Free shipping on orders over 200E£.
          </p>
          <div className="flex gap-3 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/Products" className="hover:text-gray-200">All Products</a></li>
            <li><a href="/NewArrivals" className="hover:text-gray-200">New Arrivals</a></li>
            <li><a href="/BestSellers" className="hover:text-gray-200">Best Sellers</a></li>
            <li><a href="/Electronics" className="hover:text-gray-200">Electronics</a></li>
            <li><a href="/Home" className="hover:text-gray-200">Home & Kitchen</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Customer Service</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/Help" className="hover:text-gray-200">Help Center</a></li>
            <li><a href="/TrackOrder" className="hover:text-gray-200">Track Order</a></li>
            <li><a href="/Returns" className="hover:text-gray-200">Returns & Exchanges</a></li>
            <li><a href="/Shipping" className="hover:text-gray-200">Shipping Info</a></li>
            <li><a href="/Contact" className="hover:text-gray-200">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
          <p className="text-sm mb-4">Subscribe to get updates on new arrivals and special offers.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-md text-gray-800 w-full bg-gray-100 border border-gray-300sm:w-auto flex-1"
            />
            <button
              type="submit"
              className="bg-white text-purple-400 font-semibold px-4 py-2 rounded-md hover:bg-gray-200 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-purple-300 mt-8 py-4 text-center text-sm">
        &copy; 2024 Parallel Universe. All rights reserved. | 
        <a href="/PrivacyPolicy" className="hover:text-gray-200 mx-1">Privacy Policy</a> | 
        <a href="/Terms" className="hover:text-gray-200 mx-1">Terms of Service</a>
      </div>
    </footer>
  );
}

export default Footer;
