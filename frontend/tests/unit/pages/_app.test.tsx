import MyApp from '../../../src/pages/_app';
import "@testing-library/jest-dom";

describe('_app', () => {
    it('renders correctly', () => {
        expect(MyApp).toBeDefined();
    });
});