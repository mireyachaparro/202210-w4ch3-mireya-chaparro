import { CharacterModel } from './charactermodel';

export class Character implements CharacterModel {
    //name: string;
    //family: string;
    //age: number;
    isAlive: boolean; //no se pone en el constructor como parametro porque siempre va a estar vivo, por ahora
    message: string;
    static serie = 'Game of Thrones';
    //adviser: King | Fighter | Adviser | Squire | null;
    //protect: Fighter | null;
    //si se pone public, no hace falta definir el tipo arriba, ni tampoco ponerlo abajo
    constructor(
        //esto es una funcion especial
        public name: string,
        public family: string,
        public age: number
    ) {
        //no se le pasa el estado porque al principio siempre va a estar vivo
        //this.name = name;
        //this.family = family;
        //this.age = age;
        this.isAlive = true; //no se pone en el constructor como parametro porque siempre va a estar vivo, por ahora
        this.message = '';
        //this.adviser = null;
        //this.protect = null;
    }
    communicate() {
        //esto es un metodo que hemos creado nosotros
        return this.message;
    }

    dead() {
        this.isAlive = false;
    }
}

//comunicarse es un metodo, es un console log que es un return
/*hardcodear: no poner literales porque no se pueden cambiar, por ejemplo poner un literal "hola" en el retorno
communicate() {
        return "Hola";
    }*/
