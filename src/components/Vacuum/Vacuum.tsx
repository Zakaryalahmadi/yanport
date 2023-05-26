import { getRotation } from '../../contexts/Utils/utils';
import { IVacuumProps } from '../../interfaces/IVacuumProps';
import './Vacuum.css';


import vacuumPlayer from '../../assets/icones/vacuum_player.svg';

const Vacuum = ({ vacuum, room }: IVacuumProps) => {


    return (
        <div
            className="vacuum"
            style={{
                gridRow: `${room.rows - vacuum.posY} / span 1`,
                gridColumn: `${vacuum.posX + 1} / span 1`,
                transform: `rotate(${getRotation(vacuum.orientation)}deg)`,
            }}>
            <img
                src={vacuumPlayer}
                alt="vacuum"
                height={60}

                width={60}
            />
        </div>
    );
};

export default Vacuum;