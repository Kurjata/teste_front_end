import { useState } from 'react';

import '../styles/components/header.sass'

import ShieldCheck from '../assets/ShieldCheck.svg'
import Truck from '../assets/Truck.svg'
import CreditCard from '../assets/CreditCard.svg'
import LogoMain from '../assets/LogoMain.svg'
import MagnifyingGlass from '../assets/MagnifyingGlass.svg'
import Group from '../assets/Group.png'
import Heart from '../assets/Heart.svg'
import UserCircle from '../assets/UserCircle.svg'
import ShoppingCart from '../assets/ShoppingCart.svg'
import CrownSimple from '../assets/CrownSimple.svg'
import Close from '../assets/Close.svg'

export function Header(){

  const [ showMenu, setShowMenu ] = useState()

  return(
    <header id='header'>
      <div className='header-top'>
        <div>
          <img src={ShieldCheck} alt=" " />
          <p>Compra <b>100% segura </b></p>
        </div>

        <div>
          <img src={Truck} alt=" " />
          <p><b>Frete grátis</b> acima de R$ 200</p>
        </div>

        <div>
          <img src={CreditCard} alt=" " />
          <p><b>Parcele</b> suas compras</p>
        </div>
      </div>

      <div className='header-bottom'>
        <div className='logo'>
          <img src={LogoMain} alt="Vtex" />
        </div>

        <div className='search-area'>
          <input type="text" placeholder='O que você está buscando?'/>
          <span>
            <img src={MagnifyingGlass} alt="pesquisar produto" />
          </span>
        </div>

        <div className='group-icons-area'>
          <span>
            <img src={Group} alt=" " />
          </span>
          <span>
            <img src={Heart} alt="produtos favoritos" />
          </span>
          <span>
            <img src={UserCircle} alt="Usuário" />
          </span>
          <span>
            <img src={ShoppingCart} alt="Carrinho de compras" />
          </span>
        </div>

        <nav className={showMenu ? "navbar-open" : "navbar"} onClick={()=>setShowMenu(!showMenu)}>
          <span className='close-menu' >
            <img src={Close} alt="fechar menu" />
          </span>

          <ul>
            <li>TODAS CATEGORIAS</li>
            <li>SUPERMERCADO</li>
            <li>LIVROS</li>
            <li>MODA</li>
            <li>LANÇAMENTOS</li>
            <li>OFERTAS DO DIA</li>
            <li>
              <img src={CrownSimple} alt="coroa" />
              ASSINATURA
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}