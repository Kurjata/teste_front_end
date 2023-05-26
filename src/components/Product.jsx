import '../styles/components/Product.sass'

export function Product({name, photo, price, setShowModal, setSelectedProduct }){

  function openModal(){
    setShowModal(true)
  }

  function getInfoOfProductSelected(name, photo, price){
    setSelectedProduct({name, photo, price})
  }

  function handleModal(name, photo, price){
    getInfoOfProductSelected(name, photo, price)
    openModal()
  }

  
  return(
    <div id='product' onClick={() => handleModal(name, photo, price)}>
      <img src={photo} alt={name} />
 
      <p className='name'>{name}</p>
      <span className='discount'>{`R$ ${(price+price/10)}`}</span>
      <span className='price'>{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
      <p className='installments'>{`ou 2x de R$ ${price/2} sem juros`}</p>
      <span className='freight'>Frete grátis</span>
      <button>COMPRAR</button>
    </div>
  )
}