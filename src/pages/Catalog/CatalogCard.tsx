import CatalogCardImg from "../../components/CatalogCardImg/CatalogCardImg";
import {HiOutlineShoppingBag} from "react-icons/hi";
import {Link} from "react-router-dom";
import {SwiperSlide } from "swiper/react";
import './catalog.scss'
import { animateScroll as scroll} from 'react-scroll'

type ItemType = {
 item:{
    id:number,
    category: string,
    titleCategory: string,
    title: string,
    info: string,
    price: number,
    imgOne: string,
    imgTwo: string,
    imgThree: string
 }
}
const CatalogCard = ({item}:ItemType, ) => {

    return (
        <Link onClick={()=> scroll.scrollToTop()} className="catalog__link" to={`/product/${item.id}`} >
        <CatalogCardImg imgOne={item.imgOne} imgTwo={item.imgTwo} imgThree={item.imgThree} delay={3000}/>
        <div className="catalog-card__block">
            <h2 className="catalog-card__title">{item.title}</h2>
            <button className="catalog-card__btn">
                <HiOutlineShoppingBag/>
                Выбрать
            </button>
        </div>
        </Link>
    );
};

export default CatalogCard;