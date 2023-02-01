import {useEffect, useState} from 'react';
import { NavLink } from "react-router-dom";
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { VscFilePdf } from 'react-icons/vsc'
// @ts-ignore
import { animateScroll as scroll } from "react-scroll";
import Accordion from "../../components/Accordion/Accordion";
import './home.scss'
import imgBig from '../../images/homeImg/works/1.png'
import servicesImgBig from '../../images/homeImg/services/1.png'
import imgRepair from '../../images/homeImg/repair/img.png'
import { useSelector } from "react-redux";
import { getAllProduct } from "../../redux/allProduct";
import { RootState, useAppDispatch } from "../../store";
import CardProduct from "../../components/CardProduct/CardProduct";
import { ItemType } from "../../type/item";
import PopupBasket from "../../components/PopupBasket/PopupBasket";
import { openPopupBasket } from "../../redux/basket";
import PopupRequest from "../../components/PopupRequest/PopupRequest";
const Home = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getAllProduct())
    }, [])
    const { product } = useSelector((s: RootState) => s.allProduct)
    const { order } = useSelector((s: RootState) => s.basket)
    const [statusRequest,setStatusRequest] = useState(false)

    return (
        <>
            <section className='consultation'>
                <button onClick={() => dispatch(openPopupBasket())} type={'button'} className="consultation-basket">
                    <div>
                        <h4 className="consultation-basket__title">Моя Корзина</h4>
                        <p className="consultation-basket__info">{
                            order.length === 0 ? 'Корзина пуста' : `Кол-во товара: ${order.length}`
                        }</p>
                    </div>
                    <div className="consultation-basket__circle">
                        <HiOutlineShoppingBag />
                    </div>
                </button>
                <h2 className="consultation__title">Дизайн-проект для вашей квартиры <br /> за 2 недели и 199 000 ₸</h2>
                <button onClick={()=>setStatusRequest(true)} className="consultation__btn btn__brown">Консультация</button>

                <div className="container">
                    <div className="consultation-row">

                        <div className="consultation-card">
                            <span><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M40.6055 17.7031H29.6055C29.4164 17.7031 29.2617 17.8578 29.2617 18.0469V20.1094C29.2617 20.2984 29.4164 20.4531 29.6055 20.4531H40.6055C40.7945 20.4531 40.9492 20.2984 40.9492 20.1094V18.0469C40.9492 17.8578 40.7945 17.7031 40.6055 17.7031ZM34.8476 23.5469H29.6055C29.4164 23.5469 29.2617 23.7016 29.2617 23.8906V25.9531C29.2617 26.1422 29.4164 26.2969 29.6055 26.2969H34.8476C35.0367 26.2969 35.1914 26.1422 35.1914 25.9531V23.8906C35.1914 23.7016 35.0367 23.5469 34.8476 23.5469ZM20.509 13.8574H18.6484C18.382 13.8574 18.1672 14.0723 18.1672 14.3387V24.9949C18.1672 25.1496 18.2402 25.2914 18.3648 25.3816L24.7629 30.048C24.9777 30.2027 25.2785 30.1598 25.4332 29.9449L26.5375 28.4367V28.4324C26.6922 28.2176 26.6449 27.9168 26.4301 27.7621L20.9859 23.8262V14.3387C20.9902 14.0723 20.7711 13.8574 20.509 13.8574Z" fill="#BD7048" />
                                <path d="M34.5813 28.9566H32.0977C31.8571 28.9566 31.6293 29.0812 31.5004 29.2875C30.9547 30.1512 30.3188 30.9504 29.5883 31.6809C28.3293 32.9398 26.8641 33.9281 25.2356 34.6156C23.5469 35.3289 21.7551 35.6898 19.9074 35.6898C18.0555 35.6898 16.2637 35.3289 14.5793 34.6156C12.9508 33.9281 11.4856 32.9398 10.2266 31.6809C8.96761 30.4219 7.97933 28.9566 7.29183 27.3281C6.57854 25.6437 6.21761 23.8519 6.21761 22C6.21761 20.148 6.57854 18.3605 7.29183 16.6719C7.97933 15.0434 8.96761 13.5781 10.2266 12.3191C11.4856 11.0602 12.9508 10.0719 14.5793 9.38438C16.2637 8.6711 18.0598 8.31016 19.9074 8.31016C21.7594 8.31016 23.5512 8.6711 25.2356 9.38438C26.8641 10.0719 28.3293 11.0602 29.5883 12.3191C30.3188 13.0496 30.9547 13.8488 31.5004 14.7125C31.6293 14.9188 31.8571 15.0434 32.0977 15.0434H34.5813C34.8778 15.0434 35.0668 14.734 34.9336 14.4719C32.1321 8.89883 26.4516 5.27657 20.1094 5.20352C10.8239 5.0875 3.11097 12.6887 3.09378 21.9656C3.07659 31.2598 10.609 38.8008 19.9032 38.8008C26.327 38.8008 32.102 35.1656 34.9336 29.5281C35.0668 29.266 34.8735 28.9566 34.5813 28.9566Z" fill="#BD7048" />
                            </svg></span>
                            <div className="consultation-card__block">
                                <h3 className="consultation-card__title">2 недели</h3>
                                <p className="consultation-card__subtitle">срок выполнения заказа</p>
                            </div>
                        </div>

                        <div className="consultation-card">
                            <span><svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.495 25.0491C16.6071 25.2056 16.7549 25.3331 16.9261 25.421C17.0973 25.509 17.2871 25.5549 17.4795 25.5549C17.672 25.5549 17.8617 25.509 18.033 25.421C18.2042 25.3331 18.352 25.2056 18.4641 25.0491L26.485 13.928C26.6297 13.7262 26.485 13.4443 26.2374 13.4443H24.4512C24.0627 13.4443 23.6933 13.631 23.4647 13.9509L17.4814 22.2536L14.7697 18.4907C14.5412 18.1746 14.1756 17.9842 13.7833 17.9842H11.9971C11.7495 17.9842 11.6048 18.266 11.7495 18.4679L16.495 25.0491Z" fill="#BD7048" />
                                <path d="M33.5156 4.26562H5.48438C4.81025 4.26562 4.26562 4.81025 4.26562 5.48438V33.5156C4.26562 34.1897 4.81025 34.7344 5.48438 34.7344H33.5156C34.1897 34.7344 34.7344 34.1897 34.7344 33.5156V5.48438C34.7344 4.81025 34.1897 4.26562 33.5156 4.26562ZM31.9922 31.9922H7.00781V7.00781H31.9922V31.9922Z" fill="#BD7048" />
                            </svg></span>
                            <div className="consultation-card__block">
                                <h3 className="consultation-card__title">Не важно</h3>
                                <p className="consultation-card__subtitle">Сколько квадратов, цена - одна!</p>
                            </div>
                        </div>

                        <div className="consultation-card">
                            <span><svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.3879 3.34425C19.5891 3.09244 19.8383 2.88305 20.121 2.72819C20.4037 2.57333 20.7143 2.47609 21.0349 2.44208C21.3554 2.40808 21.6795 2.43799 21.9884 2.53009C22.2973 2.62219 22.5849 2.77464 22.8345 2.97862L30.7856 9.47212C31.2229 9.82914 31.5227 10.3269 31.6338 10.8803C31.745 11.4338 31.6605 12.0087 31.395 12.5068C30.6998 12.2944 29.9769 12.1867 29.25 12.1875H28.5187L29.2451 11.3587L25.0575 7.93893L21.6036 12.1899H18.4616L23.1684 6.39843L21.2916 4.86525L15.4464 12.1875H12.3264L19.3879 3.34425ZM25.5938 24.375C25.2705 24.375 24.9605 24.5034 24.732 24.732C24.5034 24.9605 24.375 25.2705 24.375 25.5937C24.375 25.917 24.5034 26.227 24.732 26.4555C24.9605 26.6841 25.2705 26.8125 25.5938 26.8125H28.0312C28.3545 26.8125 28.6645 26.6841 28.893 26.4555C29.1216 26.227 29.25 25.917 29.25 25.5937C29.25 25.2705 29.1216 24.9605 28.893 24.732C28.6645 24.5034 28.3545 24.375 28.0312 24.375H25.5938ZM7.3125 13.4062C7.3125 13.083 7.4409 12.773 7.66946 12.5445C7.89802 12.3159 8.20802 12.1875 8.53125 12.1875H9.89138L11.8292 9.75H8.53125C7.56155 9.75 6.63157 10.1352 5.94589 10.8209C5.26021 11.5066 4.875 12.4365 4.875 13.4062V28.0312C4.875 29.6474 5.51702 31.1974 6.65982 32.3402C7.80262 33.483 9.35259 34.125 10.9688 34.125H29.25C30.5429 34.125 31.7829 33.6114 32.6971 32.6971C33.6114 31.7829 34.125 30.5429 34.125 29.25V19.5C34.125 18.2071 33.6114 16.9671 32.6971 16.0529C31.7829 15.1386 30.5429 14.625 29.25 14.625H8.53125C8.20802 14.625 7.89802 14.4966 7.66946 14.268C7.4409 14.0395 7.3125 13.7295 7.3125 13.4062ZM7.3125 28.0312V16.8553C7.69275 16.9894 8.10469 17.0625 8.53125 17.0625H29.25C29.8965 17.0625 30.5165 17.3193 30.9736 17.7764C31.4307 18.2335 31.6875 18.8535 31.6875 19.5V29.25C31.6875 29.8965 31.4307 30.5164 30.9736 30.9736C30.5165 31.4307 29.8965 31.6875 29.25 31.6875H10.9688C9.99905 31.6875 9.06907 31.3023 8.38339 30.6166C7.69771 29.9309 7.3125 29.0009 7.3125 28.0312Z" fill="#BD7048" />
                            </svg></span>
                            <div className="consultation-card__block">
                                <h3 className="consultation-card__title">Рассрочка</h3>
                                <p className="consultation-card__subtitle">до 24 месяцев</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="works">
                <div className="container">
                    <div className="works-row">
                        <h2 className="works__title">Как это работает?</h2>
                        <div className="works-card">
                            <div className="works-card__number">01</div>
                            <div className="works-card__block">
                                <h3 className="works-card__title">Выбор состава проекта</h3>
                                <p className="works-card__info">Выберите состав вашего проекта: только планировка или дизайн-проект</p>
                            </div>
                        </div>

                        <div className="works-card">
                            <div className="works-card__number">02</div>
                            <div className="works-card__block">
                                <h3 className="works-card__title">Настройка проекта</h3>
                                <p className="works-card__info">Отметьте в корзине нужен ли <br /> вам профессиональный замер, <br /> подбор строительной бригады <br /> или точный просчет сметы</p>
                            </div>
                        </div>

                        <div className="works-card">
                            <div className="works-card__number">03</div>
                            <div className="works-card__block">
                                <h3 className="works-card__title">Создание чертежей</h3>
                                <p className="works-card__info">Наши дизайнеры спроектируют <br /> интерьер, подготовят <br /> чертежи.</p>
                            </div>
                        </div>
                    </div>
                    <img src={imgBig} alt="" className="works__imageBig" />
                </div>
            </section>
            <section className="services">
                <div className="container">
                    <h2 className="services__title">Наши услуги</h2>
                    <div className="services-row">
                        <div className="services-layout">
                            <h3 className="services-layout__title">Планировка за 99 000 ₸</h3>

                            <p className="services-layout__date">Срок выполнения: <span>5 дней</span></p>

                            <p className="services-layout__info">Мы разработаем для вас уникальное планировочное решение квартиры, которое будет соответствовать как нормам эргономики, так и вашим личным пожеланиям, а также подготовим чертеж для согласования планировки. </p>

                            <ul className="services-layout__list">
                                <li className="services-layout__item">2 варианта планировки + финальный</li>
                                <li className="services-layout__item">обмерный план</li>
                                <li className="services-layout__item">план демонтажа стен</li>
                                <li className="services-layout__item">план монтажа перегородок</li>
                            </ul>

                            <div className="services-layout__btns">
                                <button onClick={()=>setStatusRequest(true)} className="btn__brown">Оставить заявку</button>
                                <button className="services-layout__btn">
                                    <VscFilePdf />
                                    Посмотреть пример
                                </button>
                            </div>

                        </div>

                        <div className="services-img">
                            <img src={servicesImgBig} alt="" className="services__imgBig" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="services-revers">
                <div className="container">
                    <div className="services-row services-row__revers">
                        <div className="services-layout services-layout__margin">
                            <h3 className="services-layout__title">Дизайн-проект за 199 000 ₸</h3>

                            <p className="services-layout__date">Срок выполнения: <span>14 дней</span></p>

                            <p className="services-layout__info">Разработаем планировочное решение вашей квартиры, далее на его основе мы подготовим альбом, состоящий из 12 чертежей, необходимых строителям для ремонта.</p>

                            <ul className="services-layout__list">
                                <li className="services-layout__item">2 варианта планировки + финальный</li>
                                <li className="services-layout__item">планы демонтажа и монтажа стен</li>
                                <li className="services-layout__item">розетки, выключатели, освещение</li>
                                <li className="services-layout__item">сантехника</li>
                                <li className="services-layout__item">план потолка</li>
                                <li className="services-layout__item">план пола и плинтусов</li>
                                <li className="services-layout__item">план дверей</li>
                            </ul>

                            <div className="services-layout__btns">
                                <button onClick={()=>setStatusRequest(true)} className="btn__brown">Оставить заявку</button>
                                <button className="services-layout__btn">
                                    <VscFilePdf />
                                    Посмотреть пример
                                </button>
                            </div>

                        </div>

                        <div className="services-img">
                            <img src={servicesImgBig} alt="" className="services__imgBig" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="repair">
                <div className="container">
                    <div className="repair-row">
                        <div className="repair-img">
                            <img src={imgRepair} alt="" className="repair__img" />
                        </div>

                        <div className="repair-info">
                            <h3 className="repair-info__title">Планируете ремонт?</h3>
                            <p className="repair-info__subtitle">Ответьте на несколько вопросов и получите бесплатный чек-лист по ремонту</p>
                            <button onClick={()=>setStatusRequest(true)} className="btn__brown">Получить чек-лист</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="design">
                <div className="container">
                    <h2 className="design__title">Дизайн комнат</h2>
                    <p className="design__subtitle">Выбирая дизайн комнаты, вы получаете смету со списком всех предметов в интерьере, <br />
                        названиями, артикулами, цветом стен и так далее.</p>

                    <div className="design-block">
                        <div className="design-block__titles">
                            <h3 className="design-block__title">Гостиные</h3>
                            <span className="design-block__line"></span>
                        </div>

                        <div className="design-block__row">
                            {
                                product.map((item: ItemType) => {
                                    if (item.category === "livingRoom") {
                                        return <CardProduct key={item.id} item={item} />
                                    }
                                })
                            }
                        </div>
                    </div>

                    <div className="design-block">
                        <div className="design-block__titles">
                            <h3 className="design-block__title">Детские</h3>
                            <span className="design-block__line"></span>
                        </div>

                        <div className="design-block__row">

                            {
                                product.map((item: ItemType) => {
                                    if (item.category === "baby") {
                                        return <CardProduct key={item.id} item={item} />
                                    }
                                })
                            }


                        </div>
                    </div>

                    <div className="design-block">
                        <div className="design-block__titles">
                            <h3 className="design-block__title">Коридоры - прихожие</h3>
                            <span className="design-block__line"></span>
                        </div>

                        <div className="design-block__row">

                            {
                                product.map((item: ItemType) => {
                                    if (item.category === "hallway") {
                                        return <CardProduct key={item.id} item={item} />
                                    }
                                })
                            }

                        </div>
                    </div>

                    <NavLink to={'catalog'} onClick={() => scroll.scrollToTop()} className="btn__brown">К каталогу комнат</NavLink>
                </div>
            </section>
            <section className="like">
                <div className="container">
                    <h2 className="like__title">Давайте определим, что <br /> вам нравится</h2>
                    <p className="like__subtitle"> Пройдите короткий тест и мы покажем <br /> подходящие вам стилевые решения</p>
                    <button onClick={()=>setStatusRequest(true)} className="btn__brown">Пройти тест</button>
                </div>
            </section>
            <section className="question">
                <div className="container">
                    <h2 className="question__title">Часто задаваемые вопросы</h2>
                    <Accordion />
                </div>

            </section>
            <PopupBasket />
            <PopupRequest setStatusRequest={setStatusRequest} statusRequest={statusRequest} />
        </>
    );
};

export default Home;