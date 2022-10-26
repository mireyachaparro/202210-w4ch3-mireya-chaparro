import { Character } from './character.js';

export class Squire extends Character {
    protector: string;
    makeBall: number;
    constructor(
        name: string,
        family: string,
        age: number,
        protector: string,
        makeBall: number
    ) {
        super(name, family, age);
        this.protector = protector;
        this.makeBall = makeBall;
        this.message = 'Soy un loser';
    }
}
