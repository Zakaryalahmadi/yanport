import {createContext, useState} from 'react';
import IRoom from '../interfaces/IRoom';
import IVacuum from '../interfaces/IVacuum';
import { CurrentPlayergroundProps, PlayergroundContent } from './types/TPlayergroundContent';
import { DEFAULT_VACCUM } from './Utils/utils';



const PlayerGroundContext = createContext<PlayergroundContent>({
    room: { rows: 10, columns: 10 },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setRoom: () => {},
    vacuum: DEFAULT_VACCUM,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setVacuum: () => {} ,
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
        locationX: TempoVacuum.locationX,
        locationY: TempoVacuum.locationY,
        orientation: TempoVacuum.orientation,
      };
    };
  
    const moveVacuum = (command: string, vacuumToMove: IVacuum): IVacuum => {
      switch (command) {
        case 'g' || 'G':
            if (vacuumToMove.orientation === 'N') {
                return {
                locationX: vacuumToMove.locationX,
                locationY: vacuumToMove.locationY,
                orientation: 'W',
                };
            } else if (vacuumToMove.orientation === 'W') {
                return {
                locationX: vacuumToMove.locationX,
                locationY: vacuumToMove.locationY,
                orientation: 'S',
                };
            } else if (vacuumToMove.orientation === 'S') {
                return {
                locationX: vacuumToMove.locationX,
                locationY: vacuumToMove.locationY,
                orientation: 'E',
                };
            } else if (vacuumToMove.orientation === 'E') {
                return {
                locationX: vacuumToMove.locationX,
                locationY: vacuumToMove.locationY,
                orientation: 'N',
                };
            }
            break;
        case 'd' || 'D':
            if (vacuumToMove.orientation === 'N') {
                return {
                locationX: vacuumToMove.locationX,
                locationY: vacuumToMove.locationY,
                orientation: 'E',
                };
            } else if (vacuumToMove.orientation === 'E') {
                return {
                locationX: vacuumToMove.locationX,
                locationY: vacuumToMove.locationY,
                orientation: 'S',
                };
            } else if (vacuumToMove.orientation === 'S') {
                return {
                locationX: vacuumToMove.locationX,
                locationY: vacuumToMove.locationY,
                orientation: 'W',
                };
            } else if (vacuumToMove.orientation === 'W') {
                return {
                locationX: vacuumToMove.locationX,
                locationY: vacuumToMove.locationY,
                orientation: 'N',
                };
            }
            break;  
        case 'a' || 'A':
            if (vacuumToMove.orientation === 'N') {
                if (vacuumToMove.locationY + 1 <= room.rows - 1) {
                return {
                    locationX: vacuumToMove.locationX,
                    locationY: vacuumToMove.locationY + 1,
                    orientation: 'N',
                };
                } else {
                return {
                    locationX: vacuumToMove.locationX,
                    locationY: vacuumToMove.locationY,
                    orientation: 'N',
                };
                }
            } else if (vacuumToMove.orientation === 'E') {
                if (vacuum.locationX + 1 <= room.columns - 1) {
                return {
                    locationX: vacuumToMove.locationX + 1,
                    locationY: vacuumToMove.locationY,
                    orientation: 'E',
                };
                } else {
                return {
                    locationX: vacuumToMove.locationX,
                    locationY: vacuumToMove.locationY,
                    orientation: 'E',
                };
                }
            } else if (vacuumToMove.orientation === 'S') {
                if (vacuum.locationY - 1 >= 0 && vacuum.locationY > -room.rows) {
                return {
                    locationX: vacuumToMove.locationX,
                    locationY: vacuumToMove.locationY - 1,
                    orientation: 'S',
                };
                } else {
                return {
                    locationX: vacuumToMove.locationX,
                    locationY: vacuumToMove.locationY,
                    orientation: 'S',
                };
                }
            } else if (vacuumToMove.orientation === 'W') {
                if (vacuum.locationX - 1 >= 0 && vacuum.locationX > -room.columns) {
                return {
                    locationX: vacuumToMove.locationX - 1,
                    locationY: vacuumToMove.locationY,
                    orientation: 'W',
                };
                } else {
                return {
                    locationX: vacuumToMove.locationX,
                    locationY: vacuumToMove.locationY,
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
