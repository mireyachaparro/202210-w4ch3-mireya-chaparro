import { Character } from './character';
import { CharacterModel } from './charactermodel';
//se testean objetos que son instancias de las clases

describe('Given the class Character', () => {
    describe('When we instanciate the class, then ', () => {
        let expectedResult: CharacterModel; //primero lo ponemos como tipo any, para tipar esto, creamos una interfaz CharacterModel, una interfaz es la definicion de los tipos que quiero que tengan las propiedades de una clase. s ecrea un archivo nuevo exportando la interfaz
        let character: Character;
        beforeEach(() => {
            //arrange, se pone lo que diga el when
            const name = 'pepe'; //inferencia de tipos, como le estamos dando un string, coge el tipo string.
            const family = 'pepes';
            const age = 33;
            expectedResult = {
                name,
                family,
                age,
                isAlive: true,
                message: '',
            };
            //act
            character = new Character(name, family, age);
        });
        test('Then we have an object of this class', () => {
            //assert
            expect(character).toEqual(expectedResult);
        });
        test('and we run method dead, then isAlive should be false', () => {
            character.dead();
            expect(character.isAlive).toBe(false);
        });
    });
});
