import { content, plugins, theme } from '../../tailwind.config';

describe('jest.config.test.ts', () => {
    it('should be a valid jest config', () => {
        expect(content).toBeDefined();
        expect(plugins).toBeDefined();
        expect(theme).toBeDefined();
    }
    );
}
);
