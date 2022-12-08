import { getData } from '../utils/getData'
import { getByORder } from './day1_1'

export const threeCarriesMost = (data: string): number => {
    return getByORder(data).splice(0, 3).reduce((acc, curr) => acc + curr, 0)
}

const currData = getData('./day1/input.txt')
threeCarriesMost(currData)