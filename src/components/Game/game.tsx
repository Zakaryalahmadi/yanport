import './game.css';

import React, { useContext, useState } from 'react';
import PlayerContext from '../../contexts/PlayerContext';
import Vacuum from '../Vacuum/Vacuum';
import Logo from '../Widgets/logo/logo';
import { checkInstructions } from '../../contexts/Utils/utils';
import CustomButton from '../Widgets/button/button';

import resetIcon from '../../assets/icones/reset.svg';
import submitIcon from '../../assets/icones/submit_arrow.svg';
import boussoleIcon from '../../assets/icones/boussole.svg';
import xIcon from '../../assets/icones/x_icon.svg';
import yIcon from '../../assets/icones/y_icon.svg';
import LongArrow from '../../assets/icones/long-arrow.svg';
import commandArrowUp from '../../assets/icones/command-arrow-up.svg';
import commandArrowRight from '../../assets/icones/command-arrow-right.svg';
import commandArrowLeft from '../../assets/icones/command-arrow-left.svg';
import AkeyIcon from '../../assets/icones/Akeybutton.svg';
import GkeyIcon from '../../assets/icones/Gkeybutton.svg';
import DkeyIcon from '../../assets/icones/Dkeybutton.svg';


const Game = () => {
    const { room, vacuum, setVacuum, moveVacuum, moveVacuumViaInstructions } = useContext(PlayerContext);

    const [vacuumInstructions, setVacuumInstructions] = useState('');



    const handleChange = () => {
        setVacuum(moveVacuumViaInstructions(vacuumInstructions, vacuum));
    };


    const handleVacuumInstructions = (e: React.FormEvent<HTMLInputElement>) => {
        setVacuumInstructions(e.currentTarget.value);
    };


    const resetInstructions = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setVacuumInstructions('');
    };

    const handleKeyDownInstruction = (event: React.KeyboardEvent) => {
        const allowedKeys = ['a', 'A', 'd', 'D', 'g', 'G'];
        const keyPressed = event.key.toUpperCase();

        if (!allowedKeys.includes(keyPressed)) {
            event.preventDefault();
            return;
        }

        if (keyPressed === 'D') {
            setVacuum(moveVacuum('d', vacuum));
        } else if (keyPressed === 'G') {
            setVacuum(moveVacuum('g', vacuum));
        } else if (keyPressed === 'A') {
            setVacuum(moveVacuum('a', vacuum));
        }
    }


    function generateRoomItems() {
        return Array.from({ length: room.rows }, (_v, row) =>
            Array.from({ length: room.columns }, (_v, col) => (
                <div className="room-item" key={`${row}-${col}`} />
            ))
        );
    }

    
    return (
        <div className="game">
            <Logo />

            <div className='top-game'>
                <CustomButton buttonText='ETAPE PRECEDENTE' isItBackButton={true} link={'/'} />

                <form onSubmit={handleChange} className="instructions-list">
                    <button className="instructions-button reset-btn" onClick={(e) => resetInstructions(e)}>
                        <img src={resetIcon} width={30} height={30} alt="reset-button" />
                    </button>

                    <input
                        onChange={handleVacuumInstructions}
                        className="instructions-input"
                        type="text"
                        onKeyDown={handleKeyDownInstruction}
                        placeholder="Entrez vos commandes"
                        value={vacuumInstructions}
                    />
                    
                </form>
            </div>

            <div className="g-config">

                <div className="g-pad">

                    <div className="g-position">

                        <h3>
                            Emplacement du Vacuum
                        </h3>

                        <div className='coord-content'>
                            <div className='coord-label'>
                                <img src={boussoleIcon} alt="boussole-icon" />
                                <p>{vacuum.orientation}</p>
                            </div>

                            <div className='coord-label'>
                                <img src={xIcon} alt="x-coord  icon" />
                                <p>{vacuum.posX}</p>
                            </div>
                            <div className='coord-label'>
                                <img src={yIcon} alt="y-coord  icon" />
                                <p>{vacuum.posY}</p>
                            </div>


                        </div>
                    </div>

                    <div className="g-commands-container">
                        <h3>Commandez votre Vacuum <br /> <span>(bouton noir clickable)</span></h3>
                        <div className='g-commands'>
                            <div className='g-commands-arrow'>
                                <p>
                                    <img src={commandArrowLeft} alt="command-arrow-up" className='img-clickable' onClick={() => setVacuum(moveVacuum('g', vacuum))} width={60} height={60} />
                                </p>
                                <p>
                                    <img src={LongArrow} alt="Long arrow" />
                                </p>
                                <p>
                                    <img src={GkeyIcon} alt="G key" width={60} height={60} />
                                </p>
                            </div>
                            <div className='g-commands-arrow'>

                                <p>
                                    <img src={commandArrowUp} alt="command-arrow-up" className='img-clickable' onClick={() => setVacuum(moveVacuum('a', vacuum))} width={60} height={60} />
                                </p>
                                <p>
                                    <img src={LongArrow} alt="Long arrow" />
                                </p>
                                <p>
                                    <img src={AkeyIcon} alt="A key" width={60} height={60} />
                                </p>
                            </div>
                            <div className='g-commands-arrow'>
                                <p>
                                    <img onClick={() => setVacuum(moveVacuum('d', vacuum))} className='img-clickable' src={commandArrowRight} alt="command-arrow-up" width={60} height={60} />
                                </p>
                                <p>
                                    <img src={LongArrow} alt="Long arrow" />
                                </p>
                                <p>
                                    <img src={DkeyIcon} alt="D key" width={60} height={60} />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="room"
                    style={{
                        gridTemplateRows: `repeat(${room.rows}, 1fr)`,
                        gridTemplateColumns: `repeat(${room.columns}, 1fr)`,
                    }}>
                    {generateRoomItems()}
                    <Vacuum vacuum={vacuum} room={room} />
                </div>
            </div>
        </div>
    );
};

export default Game;
