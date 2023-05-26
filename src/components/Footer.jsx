import '../styles/components/footer.sass'

import Facebook from '../assets/Facebook.svg'
import Instagram from '../assets/Instagram.svg'
import YouTube from '../assets/YouTube.svg'
import visa from '../assets/visa.svg'
import elo from '../assets/elo.svg'
import alelo from '../assets/alelo.svg'
import dinners from '../assets/dinners.svg'
import ifood from '../assets/ifood.svg'
import mastercard from '../assets/mastercard.svg'
import pix from '../assets/pix.svg'
import amex from '../assets/amex.svg'
import ticket from '../assets/ticket.svg'
import sodexo from '../assets/sodexo.svg'
import Econverse from '../assets/Econverse.svg'
import VTEX from '../assets/VTEX.svg'

export function Footer(){

  return(
    <footer id="footer">
      <div className='footer-main'>
        <div className='information'>
          <section className='about'>
            <h3>
              Sobre nós
            </h3>
            <ul>
              <li>CONHEÇA</li>
              <li>COMO COMPRAR</li>
              <li>INDICAÇÃO E DESCONTO</li>
            </ul>

            <div>
              <span>
                <img src={Facebook} alt="Facebook" />
              </span>
              <span>
                <img src={Instagram} alt="Instagram" />
              </span>
              <span>
                <img src={YouTube} alt="YouTube" />
              </span>
            </div>
          </section>

          <section className='useful-information'>
            <h3>INFORMAÇÕES ÚTEIS</h3>
            <ul>
              <li>FALE CONOSCO</li>
              <li>DÚVIDAS</li>
              <li>PRAZOS DE ENTREGA</li>
              <li>FORMA DE PAGAMENTO</li>
              <li>POLÍTICA DE PRIVACIDADE</li>
              <li>TROCAS E DEVOLUÇÕES</li>
            </ul>
          </section>

          <section className='payment-methods'>
            <h3>FORMAS DE PAGAMENTO</h3>

            <div>
              <span>
                <img src={visa} alt="Visa" />
              </span>
              <span>
                <img src={elo} alt="Cielo" />
              </span>
              <span>
                <img src={alelo} alt="Alelo" />
              </span>
              <span>
                <img src={dinners} alt="Dieners Club" />
              </span>
              <span>
                <img src={ifood} alt="Ifood" />
              </span>
              <span>
                <img src={mastercard} alt="Mastercard" />
              </span>
              <span>
                <img src={pix} alt="Pix" />
              </span>
              <span>
                <img src={amex} alt="Amex" />
              </span>
              <span>
                <img src={ticket} alt="Ticket" />
              </span>
              <span>
                <img src={sodexo} alt="Sodexo" />
              </span>
            </div>
      
          </section>
        </div>

        <section className='register-email'>
          <h3>CADASTRE-SE E RECEBA NOSSAS <b>NOVIDADES E PROMOÇÕES</b></h3>
          <p>Se cadastre para não perder nenhuma promoção e sempre economizar</p>
          
          <div>
            <input type="text" placeholder='SEU E-MAIL' />
            <button>OK</button>
          </div>

        </section>
      </div>

      <div className='footer-bottom'>
        <div>
          <p>Copyright © 2019. Todos os direitos reservados. Todas as     marcas e suas imagens são de propriedade de seus respectivos donos.
          </p>
          <p>É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
        </div>

        <div>
          <span>
            <img src={Econverse} alt="Econverse" />
          </span>
          <span>
            <img src={VTEX} alt="VTEX" />
          </span>
        </div>

      </div>
    </footer>
  )
}