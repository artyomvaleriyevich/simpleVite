import './header.scss'
import {Link, NavLink} from "react-router-dom";
import {BsTelephone} from "react-icons/bs";



const Header = () => {

    return (
        <header className={'header'}>
            <div className="container">
               <div className="header-content">
                   <Link   to={''} className="header-block">
                       <h1 className="header__title">
                           Simple <span>Design</span>
                       </h1>
                       <p className="header__subtitle">дизайн интерьера</p>
                   </Link>

                   <nav className="header-nav">
                       <li >
                           <NavLink className={`header-nav__item`}  to={'/'}>Главная</NavLink>
                       </li>
                       <li >
                           <NavLink className={`header-nav__item`} to={'/catalog'}>Каталог</NavLink>
                       </li>
                       <li >
                           <NavLink className={`header-nav__item `} to={'/about'}>О нас</NavLink>
                       </li>
                       <li >
                           <NavLink className={`header-nav__item `}  to={'/price'}>Цены</NavLink>
                       </li>
                   </nav>

                   <div className="header-phone">
                       <p className="header-phone__number">
                           <BsTelephone className={'header-phone__number-icon'}/>
                           +996 555 362 034
                       </p>
                       <p className="header-phone__job">с 9:00 до 18:00</p>
                   </div>
               </div>
            </div>
        </header>
    );
};

export default Header;