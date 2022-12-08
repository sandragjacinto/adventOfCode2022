import { getData } from '../../utils/getData';
import { sumOfRepetitions } from '../day3_1';
import { sumOfThreeRepetitions } from '../day3_2';

const data = getData('./day3/__tests__/input.txt');

describe('day3', () => {
    test('it shuld return the sum of repetitions', () => {
        expect(sumOfRepetitions(data)).toBe(157)
    })
    test('it shuld return the sum of repetitions', () => {
        expect(sumOfThreeRepetitions(data)).toBe(70)
    })
})