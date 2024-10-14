import NavBar from "./components/NavBar.jsx";
import Product from "./components/Product.jsx";
import DUMMY_PRODUCTS from "./data/products.js";
import './index.css'

const App = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Product {...DUMMY_PRODUCTS[0]} />
      </main>
    </>
  )
}

export default App
