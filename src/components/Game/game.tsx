import './game.css';

import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PlayerContext from '../../contexts/PlayerContext';
import Vacuum from '../Vacuum/Vacuum';
import Logo from '../Widgets/logo/logo';



const Game = () => {
    const { room, vacuum, setVacuum, moveVacuum, moveVacuumViaInstructions } = useContext(PlayerContext);

    const [vacuumInstructions, setVacuumInstructions] = useState('');



    const handleChange = () => {
        setVacuum(moveVacuumViaInstructions(vacuumInstructions, vacuum));
    };


    const handleVacuumInstructions = (e: React.FormEvent<HTMLInputElement>) => {
        setVacuumInstructions(e.currentTarget.value);
    };


    const resetInstructions = () => {
        setVacuumInstructions('');
    };



    const checkInstructions = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (
            e.key !== ('d' || 'D') &&
            e.key !== ('g' || 'G') &&
            e.key !== ('a' || 'A') &&
            e.key !== 'Enter' &&
            e.key !== 'Backspace'
        ) {
            e.preventDefault();
        }
    };


    return (
        <div className="playground">
            <Logo />
            <div className="playground-config">
                <div
                    className="grid"
                    style={{
                        gridTemplateRows: `repeat(${room.rows}, 1fr)`,
                        gridTemplateColumns: `repeat(${room.columns}, 1fr)`,
                    }}>
                    {Array.from({ length: room.rows }, (_v, k) => k).map(() =>
                        Array.from({ length: room.columns }, (_v, k) => k).map((_item, index) => (
                            <div className="grid-item" key={index} />
                        )),
                    )}
                    <Vacuum vacuum={vacuum} room={room} />
                </div>
                <div className="playground-pad">
                    <div className="instructions">
                        Utilisez la ligne de commandes pour entrer vos instructions et appuyez sur
                        VALIDER pour les exécuter. <br />
                        Liste des commandes : <br />
                        - d : rotation de 90° vers la droite <br />
                        - g : rotation de 90° vers la gauche <br />
                        - a : avance dans la direction choisie <br />
                        <br />
                        Vous pouvez également nettoyer la ligne de commandes en appuyant sur le bouton
                        RESET.
                        <br />
                        Le hoover peut également être contrôlé au clic en temps réel !
                        <br />
                        Pour revenir à la page précédente et reconfigurer le playground, cliquez sur
                        le bouton REINITIALISER LE PLAYGROUND.
                    </div>
                    <div className="location">
                        <p>EMPLACEMENT DU HOOVER</p>
                        <p>
                            X : {vacuum.posX}, Y : {vacuum.posY}, dir : {vacuum.orientation}
                        </p>
                    </div>
                    <form onSubmit={handleChange} className="commands-list">
                        <p className="commands-title">LISTE DE COMMANDES</p>
                        <input
                            className="commands-input"
                            type="text"
                            onKeyDown={checkInstructions}
                            placeholder="Entrez vos commandes"
                            value={vacuumInstructions}
                            onChange={handleVacuumInstructions}
                        />
                        <div className="instructions-buttons">
                            <button className="commands-button" type="submit">
                                VALIDER
                            </button>
                            <button className="commands-button" onClick={resetInstructions}>
                                RESET
                            </button>
                        </div>
                    </form>
                    <div className="commands">
                        <p className="commands-title">BOUTONS DE COMMANDES</p>
                        <button
                            className="control-button"
                            onClick={() => setVacuum(moveVacuum('g', vacuum))}>
                            - 90°
                        </button>
                        <button
                            className="control-button"
                            onClick={() => setVacuum(moveVacuum('a', vacuum))}>
                            A
                        </button>
                        <button
                            className="control-button"
                            onClick={() => setVacuum(moveVacuum('d', vacuum))}>
                            + 90°
                        </button>
                    </div>
                    <NavLink to="/">
                        <div>
                            <button className="reset-playground-button" type="submit">
                                REINITIALISER LE PLAYGROUND
                            </button>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Game;
