import jestConfig from '../../jest.config';

describe('jest.config.test.ts', () => {
    it('should be a valid jest config', () => {
        expect(jestConfig).toBeDefined();
    }
    );
}
);
