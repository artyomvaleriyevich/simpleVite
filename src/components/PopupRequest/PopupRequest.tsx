import React from 'react';
import './popupRequest.scss'
import {AiOutlineCloseCircle} from "react-icons/ai";

interface IPopupRequest {
    statusRequest: boolean,
    setStatusRequest: (a: boolean) => void
}

const PopupRequest = ({statusRequest, setStatusRequest}:IPopupRequest) => {

    return (
        <div className={'overlay'} style={{display: statusRequest ? 'flex': 'none'}}>
            <div className="popupRequest">
                <div className="popupRequest__top">
                    <h3 className={'popupRequest__title'}>Оставьте ваши контакты и мы с вами свяжемся</h3>
                    <span onClick={()=>setStatusRequest(false)} className="popupRequest__btn"><AiOutlineCloseCircle/></span>
                </div>

                <form className="popupRequest__form">
                    <label className={'popupRequest__form-label'}>
                        Ваше имя
                        <input required type="text"/>
                    </label>
                    <label className={'popupRequest__form-label'}>
                        Ваш Email
                        <input required type="email"/>
                    </label>
                    <label className={'popupRequest__form-label'}>
                        Ваш Телефон
                        <input required type="tel"/>
                    </label>

                    <button type={'submit'} className="btn__brown">Отправить заявку</button>
                </form>
            </div>
        </div>
    );
};

export default PopupRequest;