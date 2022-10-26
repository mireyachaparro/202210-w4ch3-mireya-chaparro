import { Adviser } from './adviser.js';
import { Fighter } from './fighter.js';
import { King } from './king.js';
import { Squire } from './squire.js';

export const characters = [
    new King('Joffrey', 'Baratheon', 54, 4),
    new Fighter('Jaime', 'Lannister', 35, 'AK47', 8),
    new Fighter('Daenerys', 'Targaryen', 28, 'destornillador', 7),
    new Adviser('Tyrion', 'Lannister', 60, null),
    new Squire('Bronn ', '', 60, 'Jaime', 6),
];

(characters[3] as Adviser).boss = characters[2];

//characters[4].protector = characters[1];
//jof se ha hecho amigo de pepe, pepe no es amigo de joff

//console.log(characters); eso lo importamos en el index.html
