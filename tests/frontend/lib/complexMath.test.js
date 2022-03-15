import funSum from 'frontend/lib/complexMath'
// import { funSum } from 'frontend/lib/complexMath'
// import getHello, { Data } from '../../../frontend/lib/getHello'

describe('testing api/test/hello', () => {
    test('mock funsum'), () => {
        const mockfunSum = (a, b) => {
            digits_b = Math.ceil(Math.log10(Math.abs(b)))
            return (a * Math.pow(10, digits_b + 1) + b)
        }
        expect(mockfunSum(12, 5)).toBe(1205)
    }
    test('is John Doe', () => {
        expect(funSum(12, 5)).toBe(1205)
        // const fake = getHello();
        // expect("hello").toBe("hello");
    });

});
