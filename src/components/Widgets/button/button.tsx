import { NavLink, To } from "react-router-dom";
import arrowRight from '../../../assets/icones/arrow_stroke.svg';
import arrowLeft from '../../../assets/icones/arrow-left-stroke.svg';

import './button.css';

const CustomButton = (props: {
    link: To;
    buttonText: string; isItBackButton: boolean;
}) => {

    const arrowRightStyle = {
        right: '20px',
    }

    const leftRightStyle = {
        left: '20px',
    }

    return (
        <div className="next-step-button">
            <NavLink to={props.link}>
                <button type='submit' className={props.isItBackButton ? 'back-button' : 'next-button'} >
                    {props.buttonText}<img src={props.isItBackButton ? arrowLeft : arrowRight} alt="arrow-right" style={props.isItBackButton ? leftRightStyle : arrowRightStyle} width={27} height={27} />
                </button>
            </NavLink>
        </div>
    );
}


export default CustomButton;