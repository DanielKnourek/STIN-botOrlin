import getHello, { Data } from './getHello';

describe('testing api/test/hello', () => {

    test('is John Doe', () => {
        expect(getHello().name).toBe<Data['name']>('John Doe');
    });

});