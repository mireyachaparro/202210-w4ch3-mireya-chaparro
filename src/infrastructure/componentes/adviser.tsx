import { Character } from './character';
import { Squire } from './squire';
import { King } from './king';
import { Fighter } from './fighter';

export class Adviser extends Character {
    constructor(
        name: string,
        family: string,
        age: number,
        boss: null | King | Fighter | Adviser | Squire
    ) {
        super(name, family, age);
        this.message = 'No sé por qué, pero creo que voy a morir pronto';
    }
}
