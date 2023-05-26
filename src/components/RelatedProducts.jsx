import '../styles/components/relatedproducts.sass'
import { Slider } from './Slider';

export function RelatedProducts({ showCategory, setShowModal, setProducts, products, setSelectedProduct }){

  return(
    <div id="related-products">
      <div className='title'>
        <h1>Produtos relacionados</h1>
      </div>

    {showCategory ? (
        <div className='related-categories'>
          <ul>
            <li>CELULAR</li>
            <li>ACESSÓRIOS</li>
            <li>TABLETS</li>
            <li>NOTEBOOKS</li>
            <li>TVS</li>
            <li>VER TODOS</li>
          </ul>
        </div>
      ) : (
        <p className='see-all'>Ver todos</p>
      )
    }

      <div className="products-container" >
        <Slider setShowModal={setShowModal} setProducts={setProducts} products={products} setSelectedProduct={setSelectedProduct} />
      </div>      
    </div>
  )
}