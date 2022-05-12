import handler from '@pages/api/test/hello';
import { createMocks } from 'node-mocks-http';

describe('Hello', () => {
    it('should be a valid jest config', async () => {
        const { req, res } = createMocks({
            method: 'GET',
            url: '/api/test/hello',
        });
        await handler(req, res);

        expect(res.statusCode).toBe(200);
        expect(res._getJSONData()).toEqual({ name: 'John Doe' });
    });
});