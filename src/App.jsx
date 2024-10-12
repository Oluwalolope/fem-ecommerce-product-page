import NavBar from "./components/NavBar.jsx";
import Product from "./components/Product.jsx";
import DUMMY_PRODUCTS from "./data/products.js";
import './index.css'

const App = () => {
  const [ product ] = DUMMY_PRODUCTS;
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Product {...product} />
      </main>
    </>
  )
}

export default App
