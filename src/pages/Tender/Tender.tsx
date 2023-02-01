import './tender.scss'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import AddServices from '../../components/AddServices/AddServices';
import React from "react";



const Tender = () => {
    return (
        <>
            <section className="tenderBg">
                <div className="container">
                    <h2 className="tenderBg__title">Тендер строительных бригад</h2>
                </div>
            </section>
            <section className="tender">
                <div className="container">
                    <p className="tender__info">Мы отправим ваш проект проверенным строительным бригадам, которые сделают расчёт. Если у вас на примете есть строители, наш специалист по техническому надзору проедет на их стройки и проверит качество работы, а после даст вам своё заключение.</p>
                    <div className="tender__row">
                        <div className="tender__block">
                            <button className="tender__brown">
                                <HiOutlineShoppingBag />
                                В корзину
                            </button>
                            <button className="tender__btn">Купить</button>
                        </div>
                        <div className="tender__block">
                            <p className="tender__text">Стоимость услуги:</p>
                            <p className="tender__price">49 000 тг</p>
                        </div>
                    </div>



                    <AddServices/>

                </div>
            </section>
        </>
    );
};

export default Tender;