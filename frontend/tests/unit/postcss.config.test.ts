import { plugins } from '../../postcss.config';

describe('jest.config.test.ts', () => {
    it('should be a valid jest config', () => {
        expect(plugins).toBeDefined();
        expect(plugins.autoprefixer).toBeDefined();
        expect(plugins.tailwindcss).toBeDefined();
    }
    );
}
);
