import { getData } from "../../utils/getData";
import {cratesOnTop} from '../day5_1';
import { cratesOnTopMoveChunk } from "../day5_2";

const currData = getData('./day5/__tests__/input.txt');

describe('day5', () => {
    test('crates on top', () => {
        expect(cratesOnTop(currData)).toBe('CMZ')
    })
    
    test('crates on top', () => {
        expect(cratesOnTopMoveChunk(currData)).toBe('MCD')
    })
})