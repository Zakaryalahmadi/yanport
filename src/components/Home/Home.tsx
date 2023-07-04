import './Home.css';

import React, { useContext } from 'react';


import columnsIcon from '../../assets/icones/columns.svg';
import rowsIcon from '../../assets/icones/rows.svg';
import orientationIcon from '../../assets/icones/orientation.svg';

import PlayerContext from '../../contexts/PlayerContext';
import Logo from '../Widgets/logo/logo';
import CustomButton from '../Widgets/button/button';
import { EOrientation } from '../../contexts/enums/enums';





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
    const newOrientation = e.currentTarget.value as EOrientation;
    if (Object.values(EOrientation).includes(newOrientation)) {
        setVacuum({
            ...vacuum,
            orientation: newOrientation,
        });
    }
};

  return (
    <div className="home">
      <Logo />


      <CustomButton buttonText='PROCHAINE ETAPE' isItBackButton={false} link={'/game'} />


      <div id="h-section">
        <div className="h-orientation">
          <h3>
            Choisissez la direction de départ de votre Vacuum
          </h3>
          <p className='h-orientation-logo'>
            <img src={orientationIcon} alt="vacuum-home" width={300} height={300} />
          </p>
          <div className="h-custom-select">
            <select
              className="h-select"
              name="orientations"
              id="orientation-select"
              value={vacuum.orientation}
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
                min={0}
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
                min={0}
                onChange={handleChangeRowsNumber}></input>
            </div>
          </div>



        </div>

        <div className="h-position">
          <h3>Position initiale de Vacuum</h3>
          <div className="h-option">
            <span className='h-X'>X</span>
            <h4>Position horizontale</h4>
            <input
              className="h-input"
              type="number"
              value={vacuum.posX}
              min={0}
              max={room.columns - 1}
              onChange={handleChangeVacuumPosX}></input>

          </div>
          <div className="h-option">
            <span className='h-Y'>Y</span>
            <h4>Position verticale</h4>
            <input
              className="form-input"
              type="number"
              value={vacuum.posY}
              min={0}
              max={room.rows - 1}
              onChange={handleChangeVacuumPosY}></input>
          </div>

        </div>
      </div>
    </div >
  );
};

export default Home;
