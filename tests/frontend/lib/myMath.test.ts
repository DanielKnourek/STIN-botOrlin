// import getHello, { Data } from 'frontend/lib/getHello'
import sum from '../../../frontend/lib/myMath'

describe("test my math package", () => {
    test("what a sum", () => {
        expect(sum(5, 6)).toBe(11);
    });

    test("what a sum", () => {
        expect(sum(5, 10)).toBe(15);
    });
})