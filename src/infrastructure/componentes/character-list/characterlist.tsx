import { useState } from 'react';
import { CharacterCard } from '../character-card/charactercard';
import { characters } from '../characters';

export function CharacterList() {
    const [initialState, setState] = useState(characters);
    return (
        <>
            <div className="app container">
                <ul className="characters-list row list-unstyled">
                    {initialState.map((item) => (
                        <CharacterCard character={item}></CharacterCard>
                    ))}
                </ul>
            </div>
        </>
    );
}

// import { CharacterCard } from '../character-card/charactercard';

// export function CharacterList() {
//     return (
//         <div className="app container">
//             <CharacterCard></CharacterCard>
//         </div>
//     );
// }
