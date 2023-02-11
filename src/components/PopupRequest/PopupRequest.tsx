import './popupRequest.scss'
import {AiOutlineCloseCircle} from "react-icons/ai";
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from '../../axios';

interface IPopupRequest {
    statusRequest: boolean,
    setStatusRequest: (a: boolean) => void
}

const PopupRequest = ({statusRequest, setStatusRequest}:IPopupRequest) => {

    type InputType = {
        namePequest:string,
        emailRequest:string,
        phoneRequest:number,
        id?:number
    }

    const {
        register,
        reset,
        handleSubmit,
        formState: {isValid}
    } = useForm<InputType>()


    const handlerRequest:SubmitHandler<InputType> = (data) => {
          axios.post('/request',{
              namePequest:data.namePequest,
              emailRequest:data.emailRequest,
              phoneRequest:data.phoneRequest,
          })
            .then(() => {
                reset()
            })
            .catch((err:Error) => alert(err))
    }



    return (
        <div className={'overlay'} style={{display: statusRequest ? 'flex': 'none'}}>
            <div className="popupRequest">
                <div className="popupRequest__top">
                    <h3 className={'popupRequest__title'}>Оставьте ваши контакты <br /> и мы с вами свяжемся</h3>
                    <span onClick={()=>setStatusRequest(false)} className="popupRequest__btn"><AiOutlineCloseCircle/></span>
                </div>

                <form  onSubmit={ handleSubmit(handlerRequest)} className="popupRequest__form">
                    <label className={'popupRequest__form-label'}>
                        Ваше имя
                        <input required  {...register('namePequest',{required: 'Поле должно заполненно', minLength:{value: 3, message:'Минимум 3 символа'},maxLength: 8,pattern: /^[A-Za-z]+$/i})}   type="text"/>
                    </label>
                    <label className={'popupRequest__form-label'}>
                        Ваш Email
                        <input required  {...register('emailRequest',{required: 'Поле должно заполненно', minLength: {value: 6 ,message: 'Минимум 6 символа'},maxLength: 20, pattern:/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/})}   type="email"/>
                    </label>
                    <label className={'popupRequest__form-label'}>
                        Ваш Телефон
                        <input required {...register('phoneRequest',{required: 'Поле должно заполненно', minLength: {value: 6 ,message: 'Минимум 6 символа'},maxLength: 20})}   type="number"/>
                    </label>

                    <button style={{background: isValid ? '#BD7048' : '#BD704860'}} disabled={!isValid} type={'submit'} className="btn__brown">Отправить заявку</button>
                </form>
            </div>
        </div>
    );
};

export default PopupRequest;