import React, {useState} from 'react';
import {SlClose} from "react-icons/sl";
import './Accordion.scss'

const Accordion = () => {

    const [expanded,setExpanded] = useState(false)
    const [expanded2,setExpanded2] = useState(false)
    const [expanded3,setExpanded3] = useState(false)
    const [expanded4,setExpanded4] = useState(false)

    return (
        <div>
            <div className="question-accordion">
                <div className="question-accordion__block" onClick={() => setExpanded(!expanded)}>
                    <SlClose className={`question-accordion__svg ${expanded && 'active'} `}/>
                    <h3 className="question-accordion__title">Вопрос</h3>
                </div>
                {expanded && <p  className={`question-accordion__text ${expanded && 'active'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada nibh at ornare turpis sit lacus, in viverra volutpat. Id sed quam consectetur condimentum tellus pellentesque a, convallis metus. Hac dui sit cursus ac id aliquet. A convallis suspendisse in nulla risus, senectus vitae. Condimentum in aliquet egestas aliquam at eu. Id bibendum iaculis netus ipsum quis amet lectus nisi mattis. Sit porttitor a vulputate aliquam elementum, odio lacus.</p>}
            </div>

            <div className="question-accordion">
                <div className="question-accordion__block" onClick={() => setExpanded2(!expanded2)}>
                    <SlClose className={`question-accordion__svg ${expanded2 && 'active'} `}/>
                    <h3 className="question-accordion__title">Вопрос</h3>
                </div>
                {expanded2 && <p  className={`question-accordion__text ${expanded2 && 'active'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada nibh at ornare turpis sit lacus, in viverra volutpat. Id sed quam consectetur condimentum tellus pellentesque a, convallis metus. Hac dui sit cursus ac id aliquet. A convallis suspendisse in nulla risus, senectus vitae. Condimentum in aliquet egestas aliquam at eu. Id bibendum iaculis netus ipsum quis amet lectus nisi mattis. Sit porttitor a vulputate aliquam elementum, odio lacus.</p>}
            </div>

            <div className="question-accordion">
                <div className="question-accordion__block" onClick={() => setExpanded3(!expanded3)}>
                    <SlClose className={`question-accordion__svg ${expanded3 && 'active'} `}/>
                    <h3 className="question-accordion__title">Вопрос</h3>
                </div>
                {expanded3 && <p  className={`question-accordion__text ${expanded3 && 'active'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada nibh at ornare turpis sit lacus, in viverra volutpat. Id sed quam consectetur condimentum tellus pellentesque a, convallis metus. Hac dui sit cursus ac id aliquet. A convallis suspendisse in nulla risus, senectus vitae. Condimentum in aliquet egestas aliquam at eu. Id bibendum iaculis netus ipsum quis amet lectus nisi mattis. Sit porttitor a vulputate aliquam elementum, odio lacus.</p>}
            </div>

            <div className="question-accordion">
                <div className="question-accordion__block" onClick={() => setExpanded4(!expanded4)}>
                    <SlClose className={`question-accordion__svg ${expanded4 && 'active'} `}/>
                    <h3 className="question-accordion__title">Вопрос</h3>
                </div>
                {expanded4 && <p  className={`question-accordion__text ${expanded4 && 'active'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada nibh at ornare turpis sit lacus, in viverra volutpat. Id sed quam consectetur condimentum tellus pellentesque a, convallis metus. Hac dui sit cursus ac id aliquet. A convallis suspendisse in nulla risus, senectus vitae. Condimentum in aliquet egestas aliquam at eu. Id bibendum iaculis netus ipsum quis amet lectus nisi mattis. Sit porttitor a vulputate aliquam elementum, odio lacus.</p>}
            </div>
        </div>
    );
};

export default Accordion;