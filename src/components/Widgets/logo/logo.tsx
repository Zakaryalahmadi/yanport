
import logo from '../../../assets/icones/vacuum.svg';
import './logo.css';

const Logo = () => {

    return (
        <div className="h-logo">
            <img src={logo} alt="vacuum-home" width={250} height={150} />
            <h1>Vacuum<br /> Controller</h1>
        </div>
    );
}

export default Logo;