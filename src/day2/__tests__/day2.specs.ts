import { getData } from "../../utils/getData";
import { myTotalScore } from '../day2_1';
import { myTotalLooseWin } from '../day2_2';

const data = getData('./day2/__tests__/input.txt')

describe('total score', () => {
    test('finds the total', () => {
      expect(myTotalScore(data)).toBe(15);
    });
    test('finds the total', () => {
      expect(myTotalLooseWin(data)).toBe(12);
    });
  });