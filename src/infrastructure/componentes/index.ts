import { characters } from './characters.js';

const main = () => {
    //ev.preventDefault();
    const template = `
        <li>Edad: ${characters[0].age} años</li>                    
    `;
    const age = document.querySelector('.list-unstyled');
    age.innerHTML = template;
};

console.log('loaded index');
document.addEventListener('DOMContentLoaded', main);
