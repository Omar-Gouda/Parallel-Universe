import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/Universe.png";
import Aurora from "../Props/Aurora";


const slides = [
  {
    id: 1,
    title: "Big Sale",
    subtitle: "Up to 50% off",
    color: { hueShift: 280, saturation: 0.6, glowIntensity: 0.3 }
  },
  {
    id: 2,
    title: "New Arrivals",
    subtitle: "Check our latest products",
    color: { hueShift: 0, saturation: 0.7, glowIntensity: 0.3 }
  },
  {
    id: 3,
    title: "Special Offers",
    subtitle: "Hurry up!",
    color: { hueShift: 280, saturation: 0.6, glowIntensity: 0.3 }
  }
];

// Category links
const categories = [
  { name: "All Products", path: "/Products", color: "text-purple-400" },
  { name: "New Arrivals", path: "/NewArrivals", color: "text-red-400 font-semibold" },
  { name: "Best Sellers", path: "/BestSellers", color: "text-red-400 font-semibold" },
  { name: "Electronics", path: "/Electronics", color: "text-purple-400" },
  { name: "Clothing", path: "/Clothing", color: "text-purple-400" },
  { name: "Home & Kitchen", path: "/Home", color: "text-purple-400" },
  { name: "Beauty & Personal Care", path: "/Beauty", color: "text-purple-400" },
  { name: "Toys & Games", path: "/Toys", color: "text-purple-400" },
  { name: "Sports & Outdoors", path: "/Sports", color: "text-purple-400" },
  { name: "Health & Household", path: "/Health", color: "text-purple-400" },
  { name: "Baby & Kids", path: "/Baby", color: "text-purple-400" },
  { name: "Gift Cards", path: "/GiftCards", color: "text-purple-400" }
];

function Header() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <>
      {/* Top bar */}
      <div className="flex justify-between items-center p-2 bg-purple-400">
        <p className="ml-6 font-semibold text-white">
          Free Shipping on Your first Order Over 200E£
        </p>
        <div className="flex items-center mr-6 gap-4">
          <a href="/Help" className="text-white">Help</a>
          <a href="/TrackOrder" className="text-white">Track Order</a>
        </div>
      </div>

      {/* Main header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <div className="flex items-center ml-6 gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold text-purple-400">Parallel Universe</h1>
        </div>
        <div className="flex items-center mr-6 gap-4">
          <input
            type="search"
            placeholder="Search Products"
            className="bg-gray-100 border border-purple-400 rounded-md w-180 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <div className="flex items-center mr-6 gap-8">
          <a href="/Login" className="text-purple-400 font-semibold">Login</a>
          <a href="/Register" className="text-purple-400 font-semibold">Register</a>
          <a href="/Cart" className="text-purple-400 font-semibold">
            <FaShoppingCart className="text-purple-400" />
          </a>
        </div>
      </div>

      {/* Categories */}
      <div className="flex items-center justify-center gap-6 border-b border-gray-200 py-4 flex-wrap">
        {categories.map((cat) => (
          <a
            key={cat.path}
            href={cat.path}
            className={`${cat.color} text-center hover:font-semibold hover:scale-105 transition-all duration-300 ease-in-out`}
          >
            {cat.name}
          </a>
        ))}
      </div>

      {/* Hero carousel */}
      <div className="h-[calc(100vh-170px)] w-full relative overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Aurora background */}
            <Aurora
                colorStops={["#e298ec", "#e89cd7", "#f2acfb"]}
                blend={0.3}
                amplitude={1.5}
                speed={1.0}
            />

            {/* Overlay for title/subtitle */}
            {(slide.title || slide.subtitle) && (
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white px-4 text-center">
                {slide.title && <h1 className="text-8xl font-bold">{slide.title}</h1>}
                {slide.subtitle && <p className="mt-12 text-2xl font-semibold">{slide.subtitle}</p>}
              </div>
            )}
          </div>
        ))}

        {/* Carousel arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-2 rounded"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-2 rounded"
        >
          ›
        </button>
      </div>
    </>
  );
}

export default Header;

