import React from 'react';
import { render, screen } from '@testing-library/react';
import { CharacterCard } from './charactercard';
import { characters } from '../characters';

describe('given CharacterCard component', () => {
    describe('when the component is rendered', () => {
        const dataTest = [...characters];
        test('then it should display first name', () => {
            render(<CharacterCard character={dataTest[0]}></CharacterCard>);
            const element = screen.getByText(/joffrey/i);
            expect(element).toBeInTheDocument();
        });
        test('then it should display 28 años', () => {
            render(<CharacterCard character={dataTest[2]}></CharacterCard>);
            const element = screen.getByText(/28/i);
            expect(element).toBeInTheDocument();
        });
    });
});
