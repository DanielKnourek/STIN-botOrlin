import nextConf from '../../next.config';

describe('jest.config.test.ts', () => {
    it('should be a valid jest config', () => {
        expect(nextConf.reactStrictMode).toBeDefined();
        expect(nextConf.webpackDevMiddleware).toBeDefined();
        expect(nextConf.webpackDevMiddleware({})).toEqual(expect.objectContaining({
            watchOptions: {
                poll: 1000,   // Check for changes every second
                aggregateTimeout: 300,   // delay before rebuilding
            }
        })
        );
    });
});
