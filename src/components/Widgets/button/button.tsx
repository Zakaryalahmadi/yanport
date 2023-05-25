import { NavLink } from "react-router-dom";
import arrowRight from '../../../assets/icones/arrow_stroke.svg';

import './button.css';

const CustomButton = (props: {
    buttonText: string; isItBackButton: boolean;
}) => {
    return (
        <div className="next-step-button">
            <NavLink to="/game">
                <button type='submit' className={props.isItBackButton ? 'back-button' : 'next-button'} >
                    {props.buttonText}<img src={props.isItBackButton ? arrowRight : arrowRight} alt="arrow-right" width={27} height={27} />
                </button>
            </NavLink>
        </div>
    );
}


export default CustomButton;