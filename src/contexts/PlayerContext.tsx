import { createContext, useState } from 'react';

import IRoom from '../interfaces/IRoom';
import IVacuum from '../interfaces/IVacuum';
import { PlayerContent, PlayerProps } from './types/TFile';
import { DEFAULT_VACCUM } from './Utils/utils';


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

    const moveVacuumViaInstructions = (instructions: string, vacuum: IVacuum): IVacuum => {
        let tempovacuum: IVacuum = vacuum;

        for (let i = 0; i < instructions.length; i++) {
            tempovacuum = moveVacuum(instructions[i], tempovacuum);
        }

        return {
            posX: tempovacuum.posX,
            posY: tempovacuum.posY,
            orientation: tempovacuum.orientation,
        };
    };


    const moveVacuum = (command: string, vacuumToMove: IVacuum): IVacuum => {
        switch (command) {
            case 'd' || 'D':
                if (vacuumToMove.orientation === 'N') {
                    return {
                        posX: vacuumToMove.posX,
                        posY: vacuumToMove.posY,
                        orientation: 'E',
                    };
                } else if (vacuumToMove.orientation === 'E') {
                    return {
                        posX: vacuumToMove.posX,
                        posY: vacuumToMove.posY,
                        orientation: 'S',
                    };
                } else if (vacuumToMove.orientation === 'S') {
                    return {
                        posX: vacuumToMove.posX,
                        posY: vacuumToMove.posY,
                        orientation: 'W',
                    };
                } else if (vacuumToMove.orientation === 'W') {
                    return {
                        posX: vacuumToMove.posX,
                        posY: vacuumToMove.posY,
                        orientation: 'N',
                    };
                }
                break;
            case 'g' || 'G':
                if (vacuumToMove.orientation === 'N') {
                    return {
                        posX: vacuumToMove.posX,
                        posY: vacuumToMove.posY,
                        orientation: 'W',
                    };
                } else if (vacuumToMove.orientation === 'W') {
                    return {
                        posX: vacuumToMove.posX,
                        posY: vacuumToMove.posY,
                        orientation: 'S',
                    };
                } else if (vacuumToMove.orientation === 'S') {
                    return {
                        posX: vacuumToMove.posX,
                        posY: vacuumToMove.posY,
                        orientation: 'E',
                    };
                } else if (vacuumToMove.orientation === 'E') {
                    return {
                        posX: vacuumToMove.posX,
                        posY: vacuumToMove.posY,
                        orientation: 'N',
                    };
                }
                break;
            case 'a' || 'A':
                if (vacuumToMove.orientation === 'N') {
                    if (vacuumToMove.posY + 1 <= room.rows - 1) {
                        return {
                            posX: vacuumToMove.posX,
                            posY: vacuumToMove.posY + 1,
                            orientation: 'N',
                        };
                    } else {
                        return {
                            posX: vacuumToMove.posX,
                            posY: vacuumToMove.posY,
                            orientation: 'N',
                        };
                    }
                } else if (vacuumToMove.orientation === 'E') {
                    if (vacuum.posX + 1 <= room.columns - 1) {
                        return {
                            posX: vacuumToMove.posX + 1,
                            posY: vacuumToMove.posY,
                            orientation: 'E',
                        };
                    } else {
                        return {
                            posX: vacuumToMove.posX,
                            posY: vacuumToMove.posY,
                            orientation: 'E',
                        };
                    }
                } else if (vacuumToMove.orientation === 'S') {
                    if (vacuum.posY - 1 >= 0 && vacuum.posY > -room.rows) {
                        return {
                            posX: vacuumToMove.posX,
                            posY: vacuumToMove.posY - 1,
                            orientation: 'S',
                        };
                    } else {
                        return {
                            posX: vacuumToMove.posX,
                            posY: vacuumToMove.posY,
                            orientation: 'S',
                        };
                    }
                } else if (vacuumToMove.orientation === 'W') {
                    if (vacuum.posX - 1 >= 0 && vacuum.posX > -room.columns) {
                        return {
                            posX: vacuumToMove.posX - 1,
                            posY: vacuumToMove.posY,
                            orientation: 'W',
                        };
                    } else {
                        return {
                            posX: vacuumToMove.posX,
                            posY: vacuumToMove.posY,
                            orientation: 'W',
                        };
                    }
                }
                break;
        }
        return DEFAULT_VACCUM;
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
