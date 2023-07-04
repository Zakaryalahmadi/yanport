import { ECommand, EOrientation } from "../enums/enums";


export const checkInstructions = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (
        e.key !== (ECommand.Right) &&
        e.key !== (ECommand.Left) &&
        e.key !== (ECommand.Advance) &&
        e.key !== 'Enter' &&
        e.key !== 'Backspace'
    ) {
        e.preventDefault();
    }
};

export const getRotation = (orientation: EOrientation): number => {
    switch (orientation) {
        case EOrientation.North:
            return 0;
        case EOrientation.East:
            return 90;
        case EOrientation.South:
            return 180;
        case EOrientation.West:
            return 270;
    }
};


