import { useState } from "react"

import { Header } from "./components/Header"
import { RelatedProducts } from "./components/RelatedProducts"
import { MiniBanner } from "./components/MiniBanner"
import { Footer } from "./components/Footer"
import { Modal } from "./components/Modal"

import './styles/app.sass'

import Technology from './assets/Technology.svg' 
import Supermarket from './assets/Supermarket.svg' 
import Drink from './assets/Drink.svg' 
import Tool from './assets/Tool.svg' 
import Health from './assets/Health.svg' 
import Sport from './assets/Sport.svg' 
import Fashion from './assets/Fashion.svg' 
import LogoMain from './assets/LogoMain.svg'

const categories = [
  {id: "Tecnologia", name: "Tecnologia", icon: Technology},
  {id: "Supermercado", name: "Supermercado", icon: Supermarket},
  {id: "Bebidas", name: "Bebidas", icon: Drink},
  {id: "Ferramentas", name: "Ferramentas", icon: Tool},
  {id: "Saúde", name: "Saúde", icon: Health},
  {id: "Esportes e Fitness", name: "Esportes e Fitness", icon: Sport},
  {id: "Moda", name: "Moda", icon: Fashion},
]

function App() {

  const [ showModal, setShowModal ] = useState(false)
  const [ products, setProducts ] = useState([])
  const [ selectedProduct,  setSelectedProduct={setSelectedProduct} ] = useState({})


  return (
    <div className="App">
      <Header />
      
      <main id="main">
        <div className="banner">
          <p>Venha conhecer nossas promoções</p>
          <p>50% Off nos produtos </p>
          <button>Ver produto</button>
        </div>

        <div className="categories">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <img src={category.icon} alt={category.name} />
              <p>{category.name}</p>
            </div>
          ))}
        </div>

        <RelatedProducts showCategory={true} setShowModal={setShowModal} setProducts={setProducts} products={products} setSelectedProduct={setSelectedProduct} />

        <div className="announcement">
            <MiniBanner title='partners' />
            <MiniBanner title='partners' />
        </div>

        <RelatedProducts showCategory={false} setShowModal={setShowModal} setProducts={setProducts} products={products} setSelectedProduct={setSelectedProduct}  />

        <div className="announcement">
            <MiniBanner title='products' />
            <MiniBanner title='products' />
        </div>

        <div className="brand">
          <h2>Navegue por marcas</h2>

          <div className="container-brands">
            <div>
              <img src={LogoMain} alt="logomarca" />
            </div>
            <div>
              <img src={LogoMain} alt="logomarca" />
            </div>
            <div>
              <img src={LogoMain} alt="logomarca" />
            </div>
            <div>
              <img src={LogoMain} alt="logomarca" />
            </div>
            <div>
              <img src={LogoMain} alt="logomarca" />
            </div>
          </div>
        </div>
          
        <RelatedProducts showCategory={false} setShowModal={setShowModal} setProducts={setProducts} products={products} setSelectedProduct={setSelectedProduct}  />
      </main>
      
      <Footer />

      {showModal && <Modal selectedProduct={selectedProduct} setShowModal={setShowModal} />}
    </div>
  )
}

export default App
