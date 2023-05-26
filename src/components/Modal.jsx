import '../styles/components/modal.sass'

import Close from '../assets/Close.svg'

export function Modal({ selectedProduct, setShowModal }){

  return(
    <div className="modal-overlay">
      <div className="modal">
        <img src={selectedProduct.photo} alt={selectedProduct.name} />

        <div className='info'>
          <h1>{selectedProduct.name}</h1>
          <span>{selectedProduct.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
          <p>Os iPhones são smartphones projetados, desenvolvidos e comercializados pela Apple Inc.</p>
          <a href="https://www.apple.com/br/iphone-14/" target="_blank">Veja mais detalhes do produto &gt;</a>
        </div>
        
        <span className='close' onClick={() => setShowModal(false)}>
          <img src={Close} alt="fechar modal" />
        </span>
      </div>
    </div>
  )
}