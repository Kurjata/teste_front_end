import '../styles/components/minibanner.sass'

export function MiniBanner({ title }){

  return(
    <div id={title === "partners" ? "partners" : "products"}>
      <h1>{title === "partners" ? "Parceiros" : "Produtos"}</h1>
      <p>{
          title === "partners" ? "Conheça nossos outros parceiros "
          : "Confira nossos outros produtos"
      }</p>
      <button>CONFIRA</button>
    </div>
  )
}