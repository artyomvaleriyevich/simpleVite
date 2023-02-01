import React from 'react';
import './itemCardSwiper.scss'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Navigation} from "swiper";

interface IProduct {
    product: {
        category?: string
        id?: number
        imgOne?: string
        imgThree?: string
        imgTwo?: string
        info?: string
        price?: string
        title?: string
        titleCategory?: string
    }
}
const ItemCardSwiper = ({product}:IProduct) => {
    return (
       <>
           <Swiper
               slidesPerView={"auto"}
               centeredSlides={true}
               spaceBetween={30}
               pagination={{
                   clickable: true,
               }}
               loop={true}
               navigation={true}
               modules={[Navigation]}
               className="mySwiper itemCard-swiper"
           >
               <SwiperSlide className='itemCard-slide'>
                   <img src={`../${product.imgOne}`} alt=""/>
               </SwiperSlide>
               <SwiperSlide className='itemCard-slide'>
                   <img src={`../${product.imgTwo}`} alt=""/>
               </SwiperSlide>
               <SwiperSlide className='itemCard-slide'>
                   <img src={`../${product.imgThree}`} alt=""/>
               </SwiperSlide>
               <SwiperSlide className='itemCard-slide'>
                   <img src={`../${product.imgOne}`} alt=""/>
               </SwiperSlide>
           </Swiper>
       </>
    );
};

export default ItemCardSwiper;