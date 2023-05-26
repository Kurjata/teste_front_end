import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import { Product } from './Product';

import '../styles/components/Slider.sass'

import 'swiper/css'
import 'swiper/css/navigation'


let settingsSwiper = {
  navigation: true,
  loop: true,
  //responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1440: {
      slidesPerView: 4,
    }
  }
}


export function Slider({ setShowModal, setProducts, products, setSelectedProduct }){

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json");
      const data = await res.json();
  
      setProducts(data.products);
    }
    fetchData();
  }, []);
  

  return(
        <Swiper modules={[Navigation, A11y]} {...settingsSwiper} style={{zIndex:"0"}} >
          {products && products.map((product) => (
            <SwiperSlide key={product.productName}>
              <Product name={product.productName} photo={product.photo} price={product.price} setShowModal={setShowModal} setSelectedProduct={setSelectedProduct} />
            </SwiperSlide>
          ))}
        </Swiper>
  )
}