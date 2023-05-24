import './Home.css';

import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import PlayerGroundContext from '../../contexts/PlayerContext'; 
import logo from '../../assets/icones/vacuum.svg';
import arrowRight from '../../assets/icones/arrow_stroke.svg';
import orientationIcon from '../../assets/icones/orientation.png';

const Home = () => {
  const { room, setRoom, vacuum, setVacuum } = useContext(PlayerGroundContext);

    const handleChangeRowsNumber = (e: React.FormEvent<HTMLInputElement>) => {
        setRoom({ rows: Number(e.currentTarget.value), columns: room.columns });
    };

    const handleChangeColumnsNumber = (e: React.FormEvent<HTMLInputElement>) => {
        setRoom({ rows: room.rows, columns: Number(e.currentTarget.value) });
    };


    const handleChangeVacuumLocationX = (e: React.FormEvent<HTMLInputElement>) => {
        setVacuum({
        locationX: Number(e.currentTarget.value),
        locationY: vacuum.locationY,
        orientation: vacuum.orientation,
        });
    };

    const handleChangeVacuumLocationY = (e: React.FormEvent<HTMLInputElement>) => {
        setVacuum({
        locationX: vacuum.locationX,
        locationY: Number(e.currentTarget.value),
        orientation: vacuum.orientation,
        });
    };


    const handleChangeVacuumOrientation = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setVacuum({
        locationX: vacuum.locationX,
        locationY: vacuum.locationY,
        orientation: String(e.currentTarget.value),
        });
    };
  return (
    <div className="home">
        <div className="h-logo">
            <img src={logo} alt="vacuum-home" width={150} height={150} />
            <h1>IVacuum<br/> Controller</h1>
        </div>
        
        <div className="next-step-button">
                <NavLink to="/playground">
                <button type='submit' className="next-button" >
                    PROCHAINE ETAPE <img src={arrowRight} alt="arrow-right" width={27} height={27} />
                </button>
            </NavLink>
        </div>
        
        <div id="h-section">
            <div className="h-orientation">
                <h3>
                    Choisissez la direction de départ de votre iHoover
                </h3>
                <p className='h-orientation-logo'>
                    <img src={orientationIcon} alt="vacuum-home" width={150} height={150} />
                </p>
                <div className="h-option">
                    <label>orientation</label>
                    <select
                    className="h-select"
                    name="orientations"
                    id="orientation-select"
                    onChange={handleChangeVacuumOrientation}>
                        <option value="N">N</option>
                        <option value="E">E</option>
                        <option value="W">W</option>
                        <option value="S">S</option>
                    </select>
                </div>
            </div>

            <div className="h-dimension">
                <h2>
                    Choisissez les dimensions de votre piece
                </h2>
                <div className='h-rows-columns'>
                    <div className='h-colums'>
                        <h3>COLOMNE</h3>
                        <img src="https://scontent-cdg4-3.xx.fbcdn.net/v/t39.30808-6/309889188_490980123041855_7050733672760939665_n.png?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gBz_MXgHvyUAX8f5zg6&_nc_ht=scontent-cdg4-3.xx&oh=00_AfDmwHz-LWfKKsC0_DJaOIws0LjHJ4Y_RglVVq77HoOmhA&oe=6473A670" alt="vacuum-home" width={50} height={50} />
                        <input
                            className="h-input"
                            type="number"
                            value={room.columns}
                            onChange={handleChangeColumnsNumber}></input>
                   </div>
                   <div className='h-colums'>
                        <h3>LIGNE</h3>
                        <img src="https://scontent-cdg4-3.xx.fbcdn.net/v/t39.30808-6/309889188_490980123041855_7050733672760939665_n.png?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gBz_MXgHvyUAX8f5zg6&_nc_ht=scontent-cdg4-3.xx&oh=00_AfDmwHz-LWfKKsC0_DJaOIws0LjHJ4Y_RglVVq77HoOmhA&oe=6473A670" alt="vacuum-home" width={50} height={50} />
                        <input
                            className="h-input"
                            type="number"
                            value={room.rows}
                            onChange={handleChangeRowsNumber}></input>
                   </div>
                </div>
            </div>

            <div className="h-position">
                <h2>Position initiale de iVacuum</h2>
                <div className="h-option">
                    <label htmlFor="horizontal">Position horizontale</label>
                    <input
                    className="h-input"
                    type="number"
                    value={vacuum.locationX}
                    onChange={handleChangeVacuumLocationX}></input>

                </div>
                <div className="h-option">
                    <label htmlFor="vertical">Position verticale</label>
                    <input
                    className="form-input"
                    type="number"
                    value={vacuum.locationY}
                    onChange={handleChangeVacuumLocationY}></input>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Home;
