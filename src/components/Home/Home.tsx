import './Home.css';

import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import PlayerGroundContext from '../../contexts/PlayerContext';
import logo from '../../assets/icones/vacuum.svg';
import arrowRight from '../../assets/icones/arrow_stroke.svg';
import columnsIcon from '../../assets/icones/columns.svg';
import rowsIcon from '../../assets/icones/rows.svg';
import orientationIcon from '../../assets/icones/orientation.png';

const Home = () => {
    const { room, setRoom, vacuum, setVacuum } = useContext(PlayerGroundContext);

    const handleChangeRowsNumber = (e: React.FormEvent<HTMLInputElement>) => {
        setRoom({ rows: Number(e.currentTarget.value), columns: room.columns });
    };

    const handleChangeColumnsNumber = (e: React.FormEvent<HTMLInputElement>) => {
        setRoom({ rows: room.rows, columns: Number(e.currentTarget.value) });
    };


    const handleChangeVacuumposX = (e: React.FormEvent<HTMLInputElement>) => {
        setVacuum({
            posX: Number(e.currentTarget.value),
            posY: vacuum.posY,
            orientation: vacuum.orientation,
        });
    };

    const handleChangeVacuumposY = (e: React.FormEvent<HTMLInputElement>) => {
        setVacuum({
            posX: vacuum.posX,
            posY: Number(e.currentTarget.value),
            orientation: vacuum.orientation,
        });
    };


    const handleChangeVacuumOrientation = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setVacuum({
            posX: vacuum.posX,
            posY: vacuum.posY,
            orientation: String(e.currentTarget.value),
        });
    };
    return (
        <div className="home">
            <div className="h-logo">
                <img src={logo} alt="vacuum-home" width={150} height={150} />
                <h1>IVacuum<br /> Controller</h1>
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
                    <div>
                        <h3>
                            Choisissez la direction de départ de votre iHoover
                        </h3>
                        <p className='h-orientation-logo'>
                            <img src={orientationIcon} alt="vacuum-home" width={150} height={150} />
                        </p>
                    </div>
                    <div className="h-custom-select">
                        <select
                            className="h-select"
                            name="orientations"
                            id="orientation-select"
                            onChange={handleChangeVacuumOrientation}>
                            <option value="N">nord</option>
                            <option value="E">est</option>
                            <option value="W">west</option>
                            <option value="S">sud</option>
                        </select>
                    </div>
                </div>

                <div className="h-dimension">
                    <h3>
                        Choisissez les dimensions de votre piece
                    </h3>

                    <div className='h-columns'>
                        <h4>COLOMNE</h4>
                        <div>
                            <img src={columnsIcon} alt="columns-icon" width={50} height={50} />
                            <input
                                className="h-input"
                                type="number"
                                value={room.columns}
                                onChange={handleChangeColumnsNumber}></input>
                        </div>
                    </div>
                    <div className='h-rows'>
                        <h4>LIGNE</h4>
                        <div>
                            <img src={rowsIcon} alt="rows-icon" width={50} height={50} />
                            <input
                                className="h-input"
                                type="number"
                                value={room.rows}
                                onChange={handleChangeRowsNumber}></input>
                        </div>
                    </div>

                </div>

                <div className="h-position">
                    <h3>Position initiale de iVacuum</h3>
                    <div className="h-option">
                        <label htmlFor="horizontal">Position horizontale</label>
                        <input
                            className="h-input"
                            type="number"
                            value={vacuum.posX}
                            onChange={handleChangeVacuumposX}></input>

                    </div>
                    <div className="h-option">
                        <label htmlFor="vertical">Position verticale</label>
                        <input
                            className="form-input"
                            type="number"
                            value={vacuum.posY}
                            onChange={handleChangeVacuumposY}></input>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;
