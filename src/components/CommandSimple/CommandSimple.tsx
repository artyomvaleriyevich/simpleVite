// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import imgSwiper from '../../images/AboutImg/commandSimple/swiper.png'
import sls from './commandSimple.module.scss'
import './commandSipmleSwiper.scss'
// import required modules
import { Navigation } from "swiper";

export default function CommandSimple() {
    return (
        <>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className={`mySwiper ${sls.swiper}`}
                spaceBetween={40}
                speed={800}
            >
                <SwiperSlide>
                    <img src={imgSwiper} alt=""/>
                </SwiperSlide>
                <SwiperSlide >
                    <img src={imgSwiper} alt=""/>
                </SwiperSlide>
                <SwiperSlide >
                    <img src={imgSwiper} alt=""/>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
