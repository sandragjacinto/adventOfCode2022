import { getData } from "../../utils/getData";
import {markerStart} from '../day6_1';
import { messageStart } from "../day6_2";

const currData = getData('./day6/__tests__/input.txt');

describe('day6', () => {
    test('crates on top', () => {
        expect(markerStart(currData)).toBe(7)
    })
    
    test('crates on top', () => {
        expect(messageStart(currData)).toBe(19)
    })
})