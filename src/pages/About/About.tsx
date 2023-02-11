import './About.scss'
import imgCommand from '../../images/AboutImg/command/bg.png'
import imgDesign from '../../images/homeImg/aboutDesign/im.png'
import CommandSimple from "../../components/CommandSimple/CommandSimple";
import imgUser from '../../images/AboutImg/user/user.png'

const About = () => {
    return (
        <>
            <section className="command">
            <div className="container">
                <h4 className="command__text">Команда Simple <span>Design</span></h4>
                <h2 className="command__title">Первый интернет-сервис <br/>
                    дизайна интерьера в Казахстане</h2>


            </div>
            <img src={imgCommand} alt="" className="command__img"/>
        </section>
            <section className="concepts">
                <div className="container">
                    <div className="concepts__row">

                        <div className="concepts-block">
                            <h3 className="concepts-block__title">
                                <span>10</span> дизайн-концепций, <br/> отражающих актуальные <br/> стили в интерьере
                            </h3>
                            <p className="concepts-block__info">
                                Мы создали сервис для тех, кто не знает, как подступиться к  большому ремонту, ценит качественный дизайн, для тех, кому нужен чёткий план. <br/>
                                Заказав Simple Design - вы получите дизайн-проект, подробную инструкцию по реализации, смету с материалами, чек-лист для проверки строителей.
                            </p>
                        </div>

                        <div className="concepts__img">
                            <img src={imgDesign} alt=""/>
                        </div>

                    </div>
                </div>
            </section>
            <section className="commandSimple">
                <div className="container">
                   <div className="commandSimple__row">
                       <span className="commandSimple__line"></span>
                       <h2 className="commandSimple__title">
                           В команде Simple design <br/>
                           <span>21 человек</span>
                       </h2>
                   </div>
                    <CommandSimple/>
                </div>
            </section>
            <section className="user">
                <div className="container">
                    <div className="user__row">
                        <div className="user__img">
                            <img src={imgUser} alt=""/>
                        </div>

                        <div className="user-info">
                            <h3 className="user-info__title">Юрий Черепанов</h3>
                            <p className="user-info__softSkill">Дизайнер, основатель студии Design Republic <br/>
                                основатель сервиса Simple Design</p>
                            <p className='user-info__listHardSkill'>Главная идея Simple design - дать возможность каждому жить в красивом доме. <br/>
                                Мы помогаем решить вам сложные, но важные вопросы, касающиеся ремонта:</p>
                            <ul className="user-info__hardSkill">
                                <li>какую планировку лучше выбрать;</li>
                                <li>как рационально использовать площадь дома;</li>
                                <li>какой дизайн выбрать?</li>
                                <li>как правильно спланировать освещение;</li>
                                <li>как грамотно составить бюджет на материалы и мебель;</li>
                                <li>как выбрать надежную строительную бригаду;</li>
                                <li>и как на всём этом еще и сэкономить?</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="showReel">
                <div className="container">
                    <div className="showReel__row">
                        <h2 className="showReel__title">
                           <span> За 4 года</span> мы реализовали <br/> более 250 проектов
                        </h2>
                        <span className="showReel__line"></span>
                    </div>
                </div>
                <div className="showReel__video">
                    <iframe  src="https://www.youtube.com/embed/NXTJJEHiAxI"
                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; ; picture-in-picture; web-share"
                             allowFullScreen></iframe>
                </div>
            </section>
        </>
    );
};

export default About;