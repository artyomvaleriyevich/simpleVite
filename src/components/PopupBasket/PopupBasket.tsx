import './popupBasket.scss'
import {RootState, useAppDispatch} from "../../store";
import {closePopupBasket, removeProduct} from "../../redux/basket";
import {ItemType} from "../../type/item";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";
import {GrClose} from 'react-icons/gr'
import {useSelector} from "react-redux";


const PopupBasket = () => {
    const dispatch = useAppDispatch()

    const {order, status} = useSelector((s:RootState) => s.basket)
   

    return (
        <div className={'overlay'} style={{display: status ? 'flex': 'none'}}>
            <div className="popupBasket">
               <div className="popupBasket__top">
                   <h2 className="popupBasket__title">Выбранные услуги:</h2>

                   <button className={'popupBasket__closeBtn'} onClick={()=> dispatch(closePopupBasket())} type={"button"}>
                       <GrClose/>
                   </button>
               </div>

                <div className="popupBasket__row">
                    {
                        order.length ?
                                order.map((item:ItemType)=>(
                                    <div key={item.id} className="popupBasket-item">
                                        <img src={item.imgOne} alt="" className="popupBasket-item__img"/>
                                        <h3 className="popupBasket-item__title">{`${item.titleCategory} [${item.price}]: ${item.title}`}</h3>
                                        <button key={item.id} onClick={()=> {
                                            dispatch(removeProduct(item.id))
                                            toast(`Товар был удален`)
                                        }} type={'button'} className="popupBasket-item__btn">( удалить )</button>
                                    </div>
                                ))
                            :  <h2 className='basket__null'>Ваш список пустой</h2>
                    }
                </div>
                <Link className='btn__brown popupBasket__btn' to={'/basket'}>{`Перейти к выбору услуг >>`}</Link>
            </div>
            

        </div>
    );
};

export default PopupBasket;