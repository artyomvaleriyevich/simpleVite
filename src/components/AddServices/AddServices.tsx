import React from 'react';
import './addServices.scss'
import {NavLink} from "react-router-dom";


import imgTender from '../../images/AddServices/tender.png'
import imgEstimate from '../../images/AddServices/smeta.png'
import imgAlbum from '../../images/AddServices/albom.png'
// @ts-ignore
import { animateScroll as scroll} from 'react-scroll'


const AddServices = () => {

    return (
        <section className='addServices'>
            <div className="container">
                <h2 className="addServices__title">Дополнительные услуги</h2>

                <div className="addServices__row">

                    <NavLink onClick={()=> {
                        scroll.scrollTo(540)

                    }} className='addServices-card' to={'/about/tender'}>
                        <img src={imgTender} alt=""/>
                        <h3 className="addServices-card__title">Тендер строительных бригад</h3>
                    </NavLink>

                    <NavLink  onClick={()=> {
                        scroll.scrollTo(540)
                    }} className='addServices-card' to={'/about/estimate'}>
                        <img src={imgEstimate} alt=""/>
                        <h3 className="addServices-card__title">Составление сметы</h3>
                    </NavLink>

                    <NavLink  onClick={()=> {
                        scroll.scrollTo(540)
                    }} className='addServices-card' to={'/about/album'}>
                        <img src={imgAlbum} alt=""/>
                        <h3 className="addServices-card__title">Печать альбома</h3>
                    </NavLink>

                </div>
            </div>
        </section>
    );
};

export default AddServices;