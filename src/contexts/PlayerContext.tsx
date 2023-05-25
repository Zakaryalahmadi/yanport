import { createContext, useState } from 'react';
import IRoom from '../interfaces/IRoom';
import IVacuum from '../interfaces/IVacuum';
import { CurrentPlayergroundProps, PlayergroundContent } from './types/TPlayergroundContent';
import { DEFAULT_VACCUM } from './Utils/utils';



const PlayerGroundContext = createContext<PlayergroundContent>({
    room: { rows: 10, columns: 10 },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setRoom: () => { },
    vacuum: DEFAULT_VACCUM,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setVacuum: () => { },
    moveVacuum: () => DEFAULT_VACCUM,
    moveVacuumViaInstructions: () => DEFAULT_VACCUM,
});

// Create the context provider component
export const CurrentPlaygroundContextProvider = ({
    children,
}: CurrentPlayergroundProps) => {
    const [room, setRoom] = useState<IRoom>({ rows: 10, columns: 10 });
    const [vacuum, setVacuum] = useState<IVacuum>(DEFAULT_VACCUM);

    // Move the vacuum based on instructions
    const moveVacuumViaInstructions = (instructions: string, vacuum: IVacuum): IVacuum => {

        let TempoVacuum = vacuum;
        for (let i = 0; i < instructions.length; i++) {
            TempoVacuum = moveVacuum(instructions[i], TempoVacuum);
        }
        return {
            posX: TempoVacuum.posX,
            posY: TempoVacuum.posY,
            orientation: TempoVacuum.orientation,
        };
    };

    const moveVacuum = (command: string, vacuumToMove: IVacuum): IVacuum => {
        switch (command) {
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
        <PlayerGroundContext.Provider
            value={{
                room,
                setRoom,
                vacuum,
                setVacuum,
                moveVacuum,
                moveVacuumViaInstructions,
            }}>
            {children}
        </PlayerGroundContext.Provider>
    );
};

export default PlayerGroundContext;
