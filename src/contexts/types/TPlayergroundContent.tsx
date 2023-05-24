import IRoom from "../../interfaces/IRoom";
import IVacuum from "../../interfaces/IVacuum";

// Define the type for the context value
export type PlayergroundContent = { 
    room : IRoom;
    setRoom: React.Dispatch<React.SetStateAction<IRoom>>;
    vacuum: IVacuum;
    setVacuum: React.Dispatch<React.SetStateAction<IVacuum>>;
    moveVacuum: (_c: string, h:IVacuum) =>IVacuum;
    moveVacuumViaInstructions: (_c: string, h: IVacuum) => IVacuum;
};

// Define the default value for the context
export type CurrentPlayergroundProps = { children: React.ReactNode };