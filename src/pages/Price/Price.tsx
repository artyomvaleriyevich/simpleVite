import React from 'react';
import './Price.scss'
import Accordion from "../../components/Accordion/Accordion";
import AddServices from "../../components/AddServices/AddServices";
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {Link, NavLink} from "react-router-dom";

const Price = () => {
    return (
        <>
            <section className="price">
               <div className="container">
                   <div className="price__content">
                       <div className="price-layout">
                               <h3 className="price-layout__titleTop">Планировка</h3>
                           <p className="price-layout__info">
                               Мы разработаем для вас уникальное планировочное решение квартиры, которое будет соответствовать как нормам эргономики, так и вашим личным пожеланиям, а также подготовим чертеж для согласования планировки.
                           </p>
                           <p className="price-layout__title">Вам подойдет, если:</p>
                           <ul className="price-layout__list">
                               <li className="price-layout__item">Вы купили квартиру без отделки и планируете начать ремонт;</li>
                               <li className="price-layout__item">Вы приобрели квартиру с ремонтом, и не понимаете, как правильно зонировать ее и расставить мебель;</li>
                               <li className="price-layout__item">Вы хотите изменить интерьер квартиры, в которой уже проживаете.</li>
                           </ul>
                           <p className="price-layout__title">Вы хотите изменить интерьер квартиры, в которой уже проживаете.</p>
                           <p className="price-layout__item">5 рабочих дней после получения замера</p>
                           <p className="price-layout__title">Вы получите:</p>
                           <ul className="price-layout__list">
                               <li className="price-layout__item">2 варианта планировки + финальный</li>
                               <li className="price-layout__item">план демонтажа стен</li>
                               <li className="price-layout__item">план монтажа перегородок</li>
                           </ul>
                           <div className="price-layout__priceBlock">
                               <h3 className="price-layout__title">Цена услуги:</h3>
                               <p className="price-layout__priceBlock-number">99 000 тг</p>
                           </div>
                           <div className="price-layout__row">
                               <Link to={'/basket'} className="price-layout__brown">
                                   <HiOutlineShoppingBag/>
                                   В корзину
                               </Link>
                               <button className="price-layout__btn">
                                   Посмотреть пример
                               </button>
                           </div>
                       </div>

                       <div className="price-design">
                               <h3 className="price-design__titleTop">Дизайн-проект</h3>
                          <div className="price-design__block">
                              <p className="price-design__info">
                                  Мы разработаем для вас уникальное планировочное решение квартиры, которое будет соответствовать как нормам эргономики, так и вашим личным пожеланиям, а также подготовим чертеж для согласования планировки.
                                  <br/>
                                  <br/>
                                  Затем мы подготовим альбом, состоящий из 12 чертежей, необходимых строителям для ремонта.
                                  <br/>
                                  <br/>
                                  <span>* также, вы можете дополнительно выбрать любой дизайн из нашего <NavLink to={'/catalog'}>каталога</NavLink>, и мы добавим его в ваш проект.</span>
                              </p>
                              <p className="price-layout__title">Вам подойдет, если:</p>
                              <ul className="price-layout__list">
                                  <li className="price-layout__item">Вы купили квартиру без отделки и планируете начать ремонт;</li>
                                  <li className="price-layout__item">Вы приобрели квартиру с ремонтом, и не понимаете, как правильно зонировать ее и расставить мебель;</li>
                                  <li className="price-layout__item">Вы хотите изменить интерьер квартиры, в которой уже проживаете.</li>
                              </ul>

                              <p className="price-layout__title">Вам подойдет, если:</p>
                              <p className="price-layout__item">5 рабочих дней после получения замера - составление планировки</p>
                              <p className="price-layout__item">7 рабочих дней после согласования планировочного решения - подготовка комплекта чертежей</p>

                              <p className="price-layout__title">Вы получите:</p>
                              <ul className="price-layout__list">
                                  <li className="price-layout__item">2 варианта планировки + финальный</li>
                                  <li className="price-layout__item">планы демонтажа и монтажа стен</li>
                                  <li className="price-layout__item">розетки, выключатели, освещение</li>
                                  <li className="price-layout__item">сантехника</li>
                                  <li className="price-layout__item">план потолка</li>
                                  <li className="price-layout__item">план пола и плинтусов</li>
                                  <li className="price-layout__item">план дверей</li>
                              </ul>
                              <div className="price-layout__priceBlock">
                                  <h3 className="price-layout__title">Цена услуги:</h3>
                                  <p className="price-layout__priceBlock-number">199 000 тг</p>
                              </div>
                              <div className="price-layout__row">
                                  <Link to={'/basket'} className="price-layout__brown">
                                      <HiOutlineShoppingBag/>
                                      В корзину
                                  </Link>
                                  <button className="price-layout__btn">
                                      Посмотреть пример
                                  </button>
                              </div>
                          </div>
                       </div>
                   </div>
               </div>

            </section>

            <section className="priceAddServices">
                <AddServices/>
            </section>
            <section className="priceQuestion">
                <div className="container">
                    <h2 className="priceQuestion__title">Часто задаваемые вопросы</h2>
                    <Accordion/>
                </div>
            </section>
        </>
    );
};

export default Price;