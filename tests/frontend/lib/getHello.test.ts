import getHello, { Data } from '../../../frontend/lib/getHello'

describe('testing api/test/hello', () => {
    test('is John Doe', () => {
        expect(getHello()).toStrictEqual<Data>({name: 'John Doe'});
    })
});

// required with this small example
// to make the isolatedModules config happy
// export { }