import './Home.css';

import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';



import columnsIcon from '../../assets/icones/columns.svg';
import rowsIcon from '../../assets/icones/rows.svg';
import orientationIcon from '../../assets/icones/orientation.svg';

import PlayerContext from '../../contexts/PlayerContext';
import Logo from '../Widgets/logo/logo';
import CustomButton from '../Widgets/button/button';





const Home = () => {
  const { room, setRoom, vacuum, setVacuum } = useContext(PlayerContext);


  const handleChangeColumnsNumber = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(room.columns);
    setRoom({
      ...room,
      columns: Number(e.currentTarget.value)
    });
  };

  const handleChangeRowsNumber = (e: React.FormEvent<HTMLInputElement>) => {
    setRoom({
      ...room,
      rows: Number(e.currentTarget.value)
    });
  };


  const handleChangeVacuumPosX = (e: React.FormEvent<HTMLInputElement>) => {
    setVacuum({
      ...vacuum,
      posX: Number(e.currentTarget.value),
    });
  };

  const handleChangeVacuumPosY = (e: React.FormEvent<HTMLInputElement>) => {
    setVacuum({
      ...vacuum,
      posY: Number(e.currentTarget.value),
    });
  };


  const handleChangeVacuumOrientation = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setVacuum({
      ...vacuum,
      orientation: String(e.currentTarget.value),
    });
  };
  return (
    <div className="home">
      <Logo />


      <CustomButton buttonText='PROCHAINE ETAPE' isItBackButton={false} />


      <div id="h-section">
        <div className="h-orientation">
          <div>
            <h3>
              Choisissez la direction de départ de votre iHoover
            </h3>
            <p className='h-orientation-logo'>
              <img src={orientationIcon} alt="vacuum-home" width={250} height={250} />
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
            <div className='h-columns-content'>
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
            <div className='h-rows-content'>
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
            <h4>Position horizontale</h4>
            <input
              className="h-input"
              type="number"
              value={vacuum.posX}
              onChange={handleChangeVacuumPosX}></input>

          </div>
          <div className="h-option">
            <label htmlFor="vertical">Position verticale</label>
            <input
              className="form-input"
              type="number"
              value={vacuum.posY}
              onChange={handleChangeVacuumPosY}></input>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Home;
