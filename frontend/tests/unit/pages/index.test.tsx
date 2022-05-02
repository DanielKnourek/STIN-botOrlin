import Home from '../../../src/pages/index';
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react'

describe('index page', () => {
    test('renders correctly', () => {
        render(<Home />);
        expect(screen.getByText(/Hello World!/i)).toBeInTheDocument();
    });
});