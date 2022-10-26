import { Character } from './character.js';

export class King extends Character {
    kingdomYears: number;
    constructor(
        name: string,
        family: string,
        age: number,
        kingdomYears: number
    ) {
        super(name, family, age);
        this.kingdomYears = kingdomYears;
        this.message = 'Vais a morir todos';
    }
}
