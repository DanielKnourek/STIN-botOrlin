// import getHello, { Data } from 'frontend/lib/getHello'
import getHello, { Data } from '../../../frontend/lib/getHello'

describe('testing api/test/hello', () => {

    test('is John Doe', () => {
        expect(getHello().name).toBe<Data['name']>('John Doe');
    });

});