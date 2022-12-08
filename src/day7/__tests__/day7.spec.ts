import { getData } from "../../utils/getData";
import { getTotalDirectorySize } from "../day7_1"
import { getTotalDirectorySizeToDelete } from '../day7_2';

const currData = getData('./day7/__tests__/input.txt');

describe('day 7', () => {
    test('getTotalDirectorySize', () => {
        expect(getTotalDirectorySize(currData)).toBe(95437);
    })
    
    test('getTotalDirectorySizeToDelete', () => {
        expect(getTotalDirectorySizeToDelete(currData)).toBe(24933642);
    })
})