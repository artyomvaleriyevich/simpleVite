import React, {useEffect} from 'react';
import './catalog.scss';
import sls from './catalog.module.scss'
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Navigation} from "swiper";
import CatalogCard from "./CatalogCard";
import {RootState, useAppDispatch} from "../../store";
import {getAllProduct} from "../../redux/allProduct";
import {useSelector} from "react-redux";
import { ItemType } from 'type/item';



const Catalog = () => {

    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(getAllProduct())
    },[])

    const {product} = useSelector((s:RootState) => s.allProduct)

    return (
        <div className='catalog'>
            <div className="container">
                <h2 className="catalog__title">Дизайн комнат</h2>
                <p className="catalog__subtitle">Выбирая дизайн комнаты, вы получаете смету со списком всех предметов в интерьере, <br/>
                    названиями, артикулами, цветом стен и так далее.</p>
            </div>

            <div className="catalog-block">
              <div className="container">
                 <div className="catalog-block__titles">
                     <h2 className="catalog-block__title">Гостиные</h2>
                     <span className='catalog-block__line'></span>
                 </div>
              </div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={40}

                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        navigation={true}
                        modules={[Navigation]}
                        className={`mySwiper ${sls.swiper}`}
                    >
                       {
                        product.map((item:ItemType) => item.category === 'livingRoom' ?  <CatalogCard item={item}/>  : '')
                       }
                    </Swiper>

            </div>

            <div className="catalog-block">
                <div className="container">
                    <div className="catalog-block__titles">
                        <h2 className="catalog-block__title">Детские</h2>
                        <span className='catalog-block__line'></span>
                    </div>
                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={40}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    navigation={true}
                    modules={[Navigation]}
                    className={`mySwiper ${sls.swiper}`}
                >
{
                        product.map((item:ItemType) => item.category === 'baby' ?  <CatalogCard item={item}/>  : '')
                       }
                </Swiper>

            </div>

            <div className="catalog-block">
                <div className="container">
                    <div className="catalog-block__titles">
                        <h2 className="catalog-block__title">Коридоры - прихожие</h2>
                        <span className='catalog-block__line'></span>
                    </div>
                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={40}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    navigation={true}
                    modules={[Navigation]}
                    className={`mySwiper ${sls.swiper}`}
                >
{
                        product.map((item:ItemType) => item.category === 'hallway' ?  <CatalogCard item={item}/>  : '')
                       }
                </Swiper>

            </div>
        </div>
    );
};

export default Catalog;