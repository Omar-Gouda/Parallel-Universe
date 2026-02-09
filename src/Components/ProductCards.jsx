function ProductCard({ product }) {
  return (
    <div className="group w-72 m-6 bg-white rounded-3xl border border-purple-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
  <img
    src={product?.image || "/placeholder.png"}
    alt={product?.name}
    className="absolute inset-0 w-full h-full object-cover"
  />

        {/* Price badge */}
        <span className="absolute top-3 right-3 bg-white/90 text-red-500 text-sm font-bold px-3 py-1 rounded-full shadow">
          {product?.price} E£
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-800 line-clamp-1">
            {product?.name}
          </h3>
          <p className="text-xs text-gray-400">
            Product ID: {product?.id}
          </p>
        </div>

        {/* Action */}
        <button className="mt-auto bg-linear-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg active:scale-95">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
