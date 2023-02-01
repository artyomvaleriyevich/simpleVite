import React, { useEffect, useState } from 'react';
import './product.scss'
import { HiOutlineShoppingBag } from "react-icons/hi";
import AddServices from "../../components/AddServices/AddServices";
import ItemCardSwiper from "../../components/ItemCardSwiper/ItemCardSwiper";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import { getProduct } from "../../redux/product";


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProduct } from "../../redux/basket";
import { ItemType } from 'type/item';


type ID = {
    id?: number
}

const Product = () => {
    
    const dispatch = useAppDispatch()
    const { id } = useParams() as ID
    const { product } = useSelector((s: RootState) => s.product)
    const { order } = useSelector((s: RootState) => s.basket)
    const [disabledBtn, setDisabledBtn] = useState(false)
    useEffect(() => {
        if (id) dispatch(getProduct(id))
    
    },[])
    useEffect(()=>{
        order.map((item:ItemType) => product.id === item.id ? setDisabledBtn(true) : setDisabledBtn(false))
    })
    
  

    return (
        <div className='itemCard'>
            <ItemCardSwiper product={product} />
            <div className="container">
                <div className="itemCard-info">
                    <div className="itemCard-info__description">
                        <h3 className="itemCard-info__category">{product.titleCategory}
                        </h3>
                        <h2 className="itemCard-info__title"> {product.title}</h2>
                        <p className="itemCard-info__text"> {product.info}</p>
                        <div>
                            <button style={{ background: disabledBtn ? '#BD704880' : '#BD7048' }} disabled={disabledBtn} onClick={() => {
                                dispatch(addProduct({ ...product }))
                                toast(`Товар был добавлен, Кол-во ${order.length + 1}`)
                            }} type={'button'} className="itemCard-info__btn itemCard-info__btn-block">
                                <HiOutlineShoppingBag />
                                В корзину
                            </button>
                        </div>
                        <p className="itemCard-info__price">Стоимость комнаты:  {product.price} тг</p>
                    </div>

                    <div className="itemCard-info__property">
                        <p className="itemCard-info__item">
                            <span>-Цветовая гамма:</span> прохладная палитра
                        </p>
                        <p className="itemCard-info__item">
                            <span>-Основные материалы:</span> краска, белая эмаль
                        </p>
                        <p className="itemCard-info__item">
                            <span>-Акцентные элементы:</span> лиловый цвет в отделке стен
                        </p>
                    </div>
                </div>
                <div className="itemCard-get">
                    <h2 className="itemCard-get__title">Что вы получаете</h2>
                    <ul className="itemCard-get__list">
                        <li className="itemCard-get__item">смета на мебель и освещение (названия и артикулы)</li>
                        <li className="itemCard-get__item">ведомость материалов</li>
                        <li className="itemCard-get__item">чертежи дизайна под вашу планировку (развертки стен)</li>
                    </ul>
                    <a className="itemCard-get__btn" href='https://www.w3schools.com/tags/att_a_download.asp'>
                        <span>
                            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M35.875 11.5312V35.875C35.875 37.2342 35.335 38.5378 34.3739 39.4989C33.4128 40.46 32.1092 41 30.75 41H28.1875V38.4375H30.75C31.4296 38.4375 32.0814 38.1675 32.562 37.687C33.0425 37.2064 33.3125 36.5546 33.3125 35.875V11.5312H28.1875C27.1681 11.5312 26.1904 11.1263 25.4696 10.4054C24.7487 9.6846 24.3438 8.70693 24.3438 7.6875V2.5625H10.25C9.57038 2.5625 8.9186 2.83248 8.43804 3.31304C7.95748 3.7936 7.6875 4.44538 7.6875 5.125V28.1875H5.125V5.125C5.125 3.76577 5.66495 2.4622 6.62608 1.50108C7.5872 0.539954 8.89077 0 10.25 0L24.3438 0L35.875 11.5312ZM4.1 30.3656H0V40.6131H2.02694V37.1742H4.08462C4.82006 37.1742 5.44531 37.0281 5.96037 36.7309C6.48056 36.4311 6.87775 36.0262 7.14681 35.5163C7.42609 34.9811 7.56787 34.385 7.55938 33.7814C7.55938 33.1408 7.42356 32.5617 7.1545 32.0466C6.88687 31.5346 6.47771 31.1103 5.97575 30.8243C5.46325 30.5168 4.84056 30.3656 4.1 30.3656ZM5.49656 33.7814C5.5058 34.1191 5.43095 34.4537 5.27875 34.7552C5.1422 35.0177 4.92966 35.2329 4.66888 35.3727C4.37057 35.5203 4.04061 35.5925 3.70794 35.5829H2.01925V31.98H3.7105C4.26912 31.98 4.70731 32.1338 5.0225 32.4438C5.33769 32.7564 5.49656 33.2023 5.49656 33.7814ZM8.61512 30.3656V40.6131H12.3564C13.3839 40.6131 14.2373 40.4081 14.9138 40.0058C15.5983 39.5962 16.1329 38.9771 16.4384 38.2402C16.7716 37.4714 16.9407 36.5438 16.9407 35.4624C16.9407 34.3862 16.7741 33.4688 16.4384 32.7077C16.1365 31.9793 15.6071 31.368 14.9291 30.9652C14.2526 30.5655 13.3942 30.3656 12.3538 30.3656H8.61512ZM10.6421 32.0184H12.0848C12.7203 32.0184 13.2379 32.1466 13.6453 32.4079C14.0682 32.6845 14.3873 33.0937 14.5524 33.5713C14.7549 34.0864 14.8548 34.7296 14.8548 35.5009C14.8628 36.012 14.8042 36.5219 14.6806 37.0179C14.5893 37.409 14.4183 37.7772 14.1783 38.0993C13.9554 38.3866 13.66 38.6095 13.3224 38.745C12.927 38.893 12.5069 38.9643 12.0848 38.9551H10.6421V32.0184ZM20.2335 36.5361V40.6131H18.2091V30.3656H24.7384V32.0389H20.2335V34.9012H24.3489V36.5361H20.2335Z" fill="#BD7048" /></svg>
                        </span>
                        <div className="block-profile__textBlock">
                            <h4 className="block-profile__text">Смотреть пример</h4>
                            <a href={''} className="block-profile__subtext">Pdf 2,5 Мб</a>
                        </div>
                    </a>
                </div>
                <AddServices />
                <div className="itemCard-job">
                    <h2 className="itemCard-job__title">Как это работает?</h2>
                    <div className="itemCard-job__row">
                        <div className="itemCard-job__card itemCard-job__card-one">
                            <h3 className="itemCard-job__card__title">Выбор состава проекта</h3>
                            <p className="itemCard-job__card__info">Выберите состав вашего проекта: только планировка или дизайн-проект</p>
                        </div>

                        <div className="itemCard-job__card itemCard-job__card-two">
                            <h3 className="itemCard-job__card__title">Настройка проекта</h3>
                            <p className="itemCard-job__card__info">Отметьте в корзине нужен ли вам профессиональный замер, подбор строительной бригады или точный просчет сметы</p>
                        </div>

                        <div className="itemCard-job__card itemCard-job__card-three">
                            <h3 className="itemCard-job__card__title">Создание чертежей</h3>
                            <p className="itemCard-job__card__info">Наши дизайнеры спроектируют интерьер, подготовят чертежи и сметы.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;