import IVacuum from "../../interfaces/IVacuum";

export const DEFAULT_VACCUM: IVacuum = {
    posX: 0,
    posY: 0,
    orientation: 'N',
};


export const checkInstructions = (e: React.KeyboardEvent<HTMLDivElement>) => {
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

export const getRotation = (orientation: string): number => {
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


