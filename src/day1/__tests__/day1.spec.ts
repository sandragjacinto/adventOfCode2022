import { carriesMost } from '../day1_1';
import { threeCarriesMost } from '../day1_2';

const fs = require('fs');
const path = require('path');
const currData = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8');

describe('carriesMost module', () => {
  test('finds the highest', () => {
    expect(carriesMost(currData)).toBe(24000);
  });
 
  test('finds the 3 highest', () => {
    expect(threeCarriesMost(currData)).toBe(45000);
  });
});