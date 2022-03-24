// import getHello, { Data } from 'frontend/lib/getHello'
import sum from '../../lib/myMath'

describe("test my math package", () => {
    test("what a sum", () => {
        expect(sum(5, 6)).toBe(11);
    });
})