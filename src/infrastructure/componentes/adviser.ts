import { Character } from './character.js';
import { Squire } from './squire.js';
import { King } from './king.js';
import { Fighter } from './fighter.js';

export class Adviser extends Character {
    boss: King | Fighter | Adviser | Squire;
    constructor(
        name: string,
        family: string,
        age: number,
        boss: null | King | Fighter | Adviser | Squire
    ) {
        super(name, family, age);
        this.boss = null;
        this.message = 'No sé por qué, pero creo que voy a morir pronto';
    }
}
(<Adviser>...)