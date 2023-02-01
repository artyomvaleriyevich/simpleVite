import React from 'react';
import {SwiperSlide,Swiper} from "swiper/react";
import 'swiper/css'
import "swiper/css/pagination";
import './designSwiper.scss'


import { Pagination, Autoplay} from "swiper";

interface DesignSwiperProps {
    imgOne:string,
    imgTwo:string,
    imgThree:string,
    delay:number
}

const DesignSwiper = ({imgOne,imgTwo,imgThree,delay}:DesignSwiperProps) => {
    return (
        <>
         <Swiper
             pagination={true}
             modules={[Pagination,Autoplay]}
             className='mySwiper'
             autoplay={{
                 delay,
                 disableOnInteraction: false,
             }}
             speed={800}
         >
             <SwiperSlide className={'swiper-block'}>
                 <img src={imgOne} alt=""/>
             </SwiperSlide>

             <SwiperSlide className={'swiper-block'}>
                 <img src={imgTwo} alt=""/>
             </SwiperSlide>

             <SwiperSlide className={'swiper-block'}>
                 <img src={imgThree} alt=""/>
             </SwiperSlide>
         </Swiper>
        </>
    );
};

export default DesignSwiper;