import { CharacterModel } from '../charactermodel';

export function CharacterCard({ character }: { character: CharacterModel }) {
    //const [initialState, setState] = useState(characters);

    return (
        <>
            {/* <ul className="characters-list row list-unstyled"> */}
            {/* {initialState.map((item) => ( */}
            <li className="character col">
                <div className="card character__card">
                    <img
                        src={'./assets/' + character.name + '.jpg'}
                        alt={character.name + character.family}
                        className="character__picture card-img-top"
                    />
                    <div className="card-body">
                        <h2 className="character__name card-title h4">
                            {character.name} {character.family}
                        </h2>
                        <div className="character__info">
                            <ul className="list-unstyled">
                                <li>Edad: {character.age} años</li>
                                <li>
                                    Estado:
                                    <i className="fas fa-thumbs-down"></i>
                                    <i className="fas fa-thumbs-up"></i>
                                </li>
                            </ul>
                        </div>
                        <div className="character__overlay">
                            <ul className="list-unstyled">
                                <li>Años de reinado: X</li>
                                <li>Arma: XXX</li>
                                <li>Destreza: X</li>
                                <li>Peloteo: X</li>
                                <li>Asesora a: X</li>
                                <li>Sirve a: X</li>
                            </ul>
                            <div className="character__actions">
                                <button className="character__action btn">
                                    habla
                                </button>
                                <button className="character__action btn">
                                    muere
                                </button>
                            </div>
                        </div>
                    </div>
                    <i className="emoji"></i>
                </div>
            </li>
            {/* ))} */}
            {/* </ul> */}
        </>
    );
}
