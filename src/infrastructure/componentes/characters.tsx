import { Adviser } from './adviser';
import { Fighter } from './fighter';
import { King } from './king';
import { Squire } from './squire';

export const characters = [
    new King('Joffrey', 'Baratheon', 54, 4),
    new Fighter('Jaime', 'Lannister', 35, 'AK47', 8),
    new Fighter('Daenerys', 'Targaryen', 28, 'destornillador', 7),
    new Adviser('Tyrion', 'Lannister', 60, null),
    new Squire('Bronn ', '', 60, 'Jaime', 6),
];
