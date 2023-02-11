import React, {useEffect} from 'react';
import DesignSwiper from "../DesignSwiper/DesignSwiper";
import {HiOutlineShoppingBag} from "react-icons/hi";
import {useAppDispatch} from "../../store";
import {getAllProduct} from "../../redux/allProduct";
import {Link} from "react-router-dom";
import { animateScroll as scroll} from 'react-scroll'

const CardProduct = ({item}:any) => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getAllProduct())
    },[])

    return (
        <Link onClick={()=> scroll.scrollToTop()} to={`/product/${item.id}`} className="design-card">
               <DesignSwiper delay={3500} imgOne={item.imgOne} imgTwo={item.imgTwo} imgThree={item.imgThree}/>
               <div className="design-card__block">
                   <h3 className="design-card__title">{item.title}</h3>
                   <button className="design-card__btn">
                       <HiOutlineShoppingBag/>
                       Выбрать
                   </button>
               </div>
        </Link>

    );
};

export default CardProduct;