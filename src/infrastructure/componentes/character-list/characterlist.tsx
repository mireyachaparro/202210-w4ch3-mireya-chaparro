import { CharacterCard } from '../character-card/charactercard';

export function CharacterList() {
    return (
        <div className="app container">
            <ul className="characters-list row list-unstyled">
                <CharacterCard></CharacterCard>
            </ul>
        </div>
    );
}
