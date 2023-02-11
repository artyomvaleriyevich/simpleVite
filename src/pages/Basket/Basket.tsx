import { useSelector } from 'react-redux';
import { removeAllProduct } from '../../redux/basket';
import { RootState, useAppDispatch } from '../../store';
import './basket.scss'
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from '../../axios';
const Basket = () => {
    const { order } = useSelector((s: RootState) => s.basket)
    let price = order.reduce((acc, rec) => acc + rec.price, 0)
    const priceFormat = new Intl.NumberFormat()
    const dispatch = useAppDispatch()

    type InputBasketType = {
        basketFormSize: boolean,
        basketFormTender: boolean,
        basketFormBudgeting: boolean,
        basketFormAlbum: boolean,
        basketFormName: string,
        basketFormTel: number,

    }
    const {
        register,
        reset,
        handleSubmit,
        formState: { isValid }
    } = useForm<InputBasketType>()


    const handlerBasket: SubmitHandler<InputBasketType> = (data) => {
        axios.post('/application', {
            basketFormSize: data.basketFormSize,
            basketFormTender: data.basketFormTender,
            basketFormBudgeting: data.basketFormBudgeting,
            basketFormAlbum: data.basketFormAlbum,
            basketFormName: data.basketFormName,
            basketFormTel: data.basketFormTel,
    
        })
            .then(() => {
                reset()
                toast('Ваш заказ был принят')
                dispatch(removeAllProduct())
            })
            .catch((err: Error) => alert(err))
    }

    return (
        <div className='basket'>
            <div className="container">
                <div className="basket__content">
                    <h2 className="basket__title">Список ваших товаров:</h2>
                    <form onSubmit={handleSubmit(handlerBasket)} className="basket__row">
                        <div className="basket__order">
                            {
                                order.length ?
                                    order.map((item) => (
                                        <div key={item.id} className='basket__item'>
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
                                <div className="basket-form">
                                    <div className="basket-prices__card">
                                        <label className='basket-prices__card-label'>
                                            <input {...register('basketFormSize')} className='basket-prices__card-box' type="checkbox" /> Замеры
                                            <p className='basket-prices__card-number'>+ 19 000 тг</p>
                                        </label>
                                    </div>

                                    <div className="basket-prices__card">
                                        <label className='basket-prices__card-label'>
                                            <input {...register('basketFormTender')} className='basket-prices__card-box active' type="checkbox" /> Тендер строительных бригад
                                            <p className='basket-prices__card-number'>+ 49 000 тг</p>
                                        </label>
                                    </div>

                                    <div className="basket-prices__card">
                                        <label className='basket-prices__card-label'>
                                            <input {...register('basketFormBudgeting')} className='basket-prices__card-box' type="checkbox" /> Составление сметы
                                            <p className='basket-prices__card-number'>+ 49 000 тг</p>
                                        </label>
                                    </div>

                                    <div className="basket-prices__card">
                                        <label className='basket-prices__card-label'>
                                            <input {...register('basketFormAlbum')} className='basket-prices__card-box' type="checkbox" /> Печать альбома
                                            <p className='basket-prices__card-number'>+ 19 000 тг</p>
                                        </label>
                                    </div>


                                    <label className='basket-form__label'>
                                        <input {...register('basketFormName', { required: true, minLength: 3 })} maxLength={8} placeholder='Введите ваше имя' className='basket-form__input' type="text" />
                                    </label>


                                    <label className='basket-form__label'>
                                        <input {...register('basketFormTel', { required: true, minLength: 3 })} maxLength={20} placeholder='Введите ваш телефон' className='basket-form__input' type="number" />
                                    </label>


                                    <button style={{ background: isValid ? '#BD7048' : '#BD704860' }} disabled={!isValid} type={'submit'} className="basket-form__btn">Оставить заявку</button>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Basket;