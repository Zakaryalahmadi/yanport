import IRoom from "../../interfaces/IRoom";
import IVacuum from "../../interfaces/IVacuum";

export type PlayerContent = {
    room: IRoom;
    setRoom: React.Dispatch<React.SetStateAction<IRoom>>;
    vacuum: IVacuum;
    setVacuum: React.Dispatch<React.SetStateAction<IVacuum>>;
    moveVacuum: (_c: string, h: IVacuum) => IVacuum;
    moveVacuumViaInstructions: (_c: string, h: IVacuum) => IVacuum;
};


export type PlayerProps = { children: React.ReactNode };
