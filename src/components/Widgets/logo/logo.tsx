
import logo from '../../../assets/icones/vacuum.svg';
import './logo.css';

const Logo = () => {

    return (
        <div className="h-logo">
            <img src={logo} alt="vacuum-home" width={150} height={150} />
            <h1>IVacuum<br /> Controller</h1>
        </div>
    );
}

export default Logo;