import { useSelector } from 'react-redux';
import { removeAllProduct } from '../../redux/basket';
import { RootState, useAppDispatch } from '../../store';
import './basket.scss'
const Basket = () => {
    const { order } = useSelector((s: RootState) => s.basket)
    let price = order.reduce((acc, rec) => acc + rec.price, 0)
    const priceFormat = new Intl.NumberFormat()

    const dispatch = useAppDispatch()

    return (
        <div className='basket'>
            <div className="container">
                <div className="basket__content">
                    <h2 className="basket__title">Список ваших товаров:</h2>
                    <div className="basket__row">
                        <div className="basket__order">
                            {
                                order.length ?
                                    order.map((item) => (
                                        <div className='basket__item'>
                                            <div className="basket__block">
                                                <img src={item.imgOne} alt={item.title} />
                                                <h3 className='basket__item-title'>{`${item.titleCategory}:  ${item.title}`}</h3>
                                            </div>

                                            <p className="basket__price">{priceFormat.format(item.price)} тг</p>
                                        </div>
                                    ))
                                    : <h2 className='basket__null'>Ваш список пустой</h2>
                            }

                            <h2 className="basket__price">Итого: {priceFormat.format(price)} тг</h2>
                        </div>

                        <div className="basket-prices">
                            <h2 className="basket-prices__title">Дополнительные услуги:</h2>
                            <div className="basket-prices__row">

                                <div className="basket-prices__card">
                                    <label className='basket-prices__card-label'>
                                        <input className='basket-prices__card-box' type="checkbox" /> Замеры
                                        <p className='basket-prices__card-number'>+ 19 000 тг</p>
                                    </label>
                                </div>

                                <div className="basket-prices__card">
                                    <label className='basket-prices__card-label'>
                                        <input className='basket-prices__card-box active' type="checkbox" /> Тендер строительных бригад
                                        <p className='basket-prices__card-number'>+ 49 000 тг</p>
                                    </label>
                                </div>

                                <div className="basket-prices__card">
                                    <label className='basket-prices__card-label'>
                                        <input className='basket-prices__card-box' type="checkbox" /> Тендер строительных бригад
                                        <p className='basket-prices__card-number'>+ 49 000 тг</p>
                                    </label>
                                </div>

                                <div className="basket-prices__card">
                                    <label className='basket-prices__card-label'>
                                        <input className='basket-prices__card-box' type="checkbox" /> Печать альбома
                                        <p className='basket-prices__card-number'>+ 19 000 тг</p>
                                    </label>
                                </div>



                                <form action="" className="basket-form">
                                    <label className='basket-form__label'>
                                        <input required placeholder='Введите ваше имя' className='basket-form__input' type="text" />
                                    </label>


                                    <label className='basket-form__label'>
                                        <input required placeholder='Введите ваш телефон' className='basket-form__input' type="tel" />
                                    </label>


                                    <button onClick={() => dispatch(removeAllProduct())} type={'submit'} className="basket-form__btn btn__brown">Оставить заявку</button>
                                </form>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Basket;