import { getData } from "../../utils/getData";
import {fullyContains} from '../day4_1';
import {anyOverlap} from '../day4_2';

const currData = getData('./day4/__tests__/input.txt');

describe('day4', () => {
    test('fully contains', () => {
        expect(fullyContains(currData)).toBe(2)
    })
    test('fully contains', () => {
        expect(anyOverlap(currData)).toBe(4)
    })
})