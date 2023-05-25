import { IVacuumProps } from '../../interfaces/IVacuumProps';
import './Vacuum.css';


const Vacuum = ({ vacuum, room }: IVacuumProps) => {


    const getRotation = (orientation: string): number => {
        switch (orientation) {
            case 'N':
                return 0;
            case 'E':
                return 90;
            case 'S':
                return 180;
            case 'W':
                return 270;
        }
        return 0;
    };

    return (
        <div
            className="vacuum"
            style={{
                gridRow: `${room.rows - vacuum.posY} / span 1`,
                gridColumn: `${vacuum.posX + 1} / span 1`,
                transform: `rotate(${getRotation(vacuum.orientation)}deg)`,
            }}>
            <img
                src=""
                alt="vacuum"
                height={
                    room.columns > 15 && room.rows > 15
                        ? '30px'
                        : room.columns > 10 && room.rows > 10
                            ? '50px'
                            : '60px'
                }
                width={
                    room.columns > 15 && room.rows > 15
                        ? '30px'
                        : room.columns > 10 && room.rows > 10
                            ? '50px'
                            : '60px'
                }
            />
        </div>
    );
};

export default Vacuum;