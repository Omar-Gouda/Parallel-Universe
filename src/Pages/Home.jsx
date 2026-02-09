import Footer from '../Components/Footer'
import Header from '../Components/Header'
import ProductsGrid from '../Components/ProductsGrid'

function Home() {
  return (
    <>
      <Header />
      <div className="text-center my-8">
        <h2 className="text-3xl font-bold text-gray-500">Welcome to Parallel Universe</h2>
        <p className="text-gray-400 mt-2">Discover a world of unique products and exclusive deals</p>
      </div>
      <div className="text-center mr-12">
        <div>
        <h3 className="text-2xl font-semibold text-purple-600 mb-4">Featured Products</h3>
        </div>
      <ProductsGrid />
      </div>
      <Footer />
    </>
  )
}

export default Home