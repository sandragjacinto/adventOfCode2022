import { getData } from "../../utils/getData";
import {challenge1} from '../day8_1';

const currData = getData('./day8/__tests__/input.txt');

describe('day8', () => {
    test('challenge1', () => {
        expect(challenge1).toBe(21)
    })
})