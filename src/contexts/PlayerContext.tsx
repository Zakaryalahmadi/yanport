import { createContext, useState } from 'react';

import IRoom from '../interfaces/IRoom';
import IVacuum from '../interfaces/IVacuum';
import { PlayerContent, PlayerProps } from './types/TFile';
import { ECommand, EOrientation } from './enums/enums';
// import { DEFAULT_VACCUM } from './Utils/utils';




const DEFAULT_VACCUM: IVacuum = {
    posX: 0,
    posY: 0,
    orientation: EOrientation.North,
};



const PlayerContext = createContext<PlayerContent>({
    room: { rows: 10, columns: 10 },
    setRoom: () => { },
    vacuum: DEFAULT_VACCUM,
    setVacuum: () => { },
    moveVacuum: () => DEFAULT_VACCUM,
    moveVacuumViaInstructions: () => DEFAULT_VACCUM,
});




export const PlayerContextProvider = ({
    children,
}: PlayerProps) => {
    const [room, setRoom] = useState<IRoom>({ rows: 10, columns: 10 });
    const [vacuum, setVacuum] = useState<IVacuum>(DEFAULT_VACCUM);

    const moveForward = (currentOrientation: EOrientation, currentPos: {x: number, y: number}): {x: number, y: number} => {
        const moves = {
            [EOrientation.North]: { x: 0, y: 1 },
            [EOrientation.East]: { x: 1, y: 0 },
            [EOrientation.South]: { x: 0, y: -1 },
            [EOrientation.West]: { x: -1, y: 0 }
        };
        const newPos = { 
            x: Math.min(Math.max(currentPos.x + moves[currentOrientation].x, 0), room.columns - 1),
            y: Math.min(Math.max(currentPos.y + moves[currentOrientation].y, 0), room.rows - 1)
        };
        return newPos;
    };

    const changeOrientation = (currentOrientation: EOrientation, command: ECommand): EOrientation => {
        const orientations = [EOrientation.North, EOrientation.East, EOrientation.South, EOrientation.West];
        let index = orientations.indexOf(currentOrientation);
    
        if (command === ECommand.Right) {
            index = (index + 1) % 4;
        } else if (command === ECommand.Left) {
            index = (index - 1 + 4) % 4;
        }
    
        return orientations[index];
    };
    
    const validateCommand = (command: string): command is ECommand => {
        return Object.values(ECommand).includes(command.toUpperCase() as ECommand);
    }
    
    const moveVacuum = (command: string, vacuumToMove: IVacuum): IVacuum => {
        if (!validateCommand(command)) {
            return DEFAULT_VACCUM;
        }
        
        const upperCaseCommand = command.toUpperCase() as ECommand;
    
        switch (upperCaseCommand) {
            case ECommand.Right:
            case ECommand.Left: {
                return {
                    ...vacuumToMove,
                    orientation: changeOrientation(vacuumToMove.orientation, upperCaseCommand),
                };
            }
            case ECommand.Advance: {
                const newPos = moveForward(vacuumToMove.orientation, {x: vacuumToMove.posX, y: vacuumToMove.posY});
                return {
                    ...vacuumToMove,
                    posX: newPos.x,
                    posY: newPos.y,
                };
            }
            default: {
                return DEFAULT_VACCUM;
            }
        }
    };
    

    const moveVacuumViaInstructions = (instructions: string, vacuum: IVacuum): IVacuum => {
        return [...instructions].reduce((vac, instruction) => moveVacuum(instruction, vac), vacuum);
    };

    return (
        <PlayerContext.Provider
            value={{
                room,
                setRoom,
                vacuum,
                setVacuum,
                moveVacuum,
                moveVacuumViaInstructions,
            }}>
            {children}
        </PlayerContext.Provider>
    );
};

export default PlayerContext;