import './footer.scss'
import {NavLink} from "react-router-dom";
import {BsTelephone} from "react-icons/bs";
import { animateScroll as scroll } from "react-scroll";
const Footer = () => {

    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer-top">
                    <NavLink onClick={()=> scroll.scrollToTop()}  to={''} className="footer-block">
                        <h1 className="footer__title">
                            Simple <span>Design</span>
                        </h1>
                        <p className="footer__subtitle">дизайн интерьера</p>
                    </NavLink>

                    <nav className="footer-nav">
                        <li >
                            <NavLink  onClick={()=> scroll.scrollToTop()} className={`footer-nav__item`} to={''}>Главная</NavLink>
                        </li>
                        <li >
                            <NavLink  onClick={()=> scroll.scrollToTop()} className={`footer-nav__item`} to={'catalog'}>Каталог</NavLink>
                        </li>
                        <li >
                            <NavLink  onClick={()=> scroll.scrollToTop()} className={`footer-nav__item`} to={'about'}>О нас</NavLink>
                        </li>
                        <li >
                            <NavLink  onClick={()=> scroll.scrollToTop()} className={`footer-nav__item`} to={'price'}>Цены</NavLink>
                        </li>
                    </nav>

                    <NavLink className='footer__politics' to={'politics'}>
                        Политика конфиденциальности <br/>
                        Условия пользования
                    </NavLink>


                    <div className="footer-phone">
                        <p className="footer-phone__number">
                            <BsTelephone className={'footer-phone__number-icon'}/>
                            +9 999 999 9999
                        </p>
                        <p className="footer-phone__job">с 9:00 до 18:00</p>
                    </div>

                </div>
            </div>
            <div className="footer-bottom">
                <p>(с) 2023. Все права защищены.</p>
            </div>
        </footer>
    );
};

export default Footer;