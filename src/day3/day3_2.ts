import { getData } from "../utils/getData";
import { valuesOf } from "./day3_1";


const formatData = (data:string): string[][] => {
    const size = 3;
    const list = data.split('\n')
    let temp = []

    while(list.length !== 0) {
        temp.push(list.splice(0, size))
    }
    return temp
}

const findRepetition = (list: string[][]) => {
    return list.map(containers => {
        const [first, second, third] = containers;
        const letter = [...first].map( letter => {
            return second.includes(letter) ? letter : ''
        }).filter(e => e).map(l => third.includes(l) ? l : '').filter(e => e)[0];

        return [first, second, third, letter]
    }).filter(e => e);
}


export const sumOfThreeRepetitions = (data: string): number => {
    const currdata = formatData(data);
    const repetition = findRepetition(currdata);

    return repetition.reduce((acc, curr) => {
        return acc + valuesOf(curr[3]);
    }, 0)
}

const currData = getData('./day3/input.txt');
sumOfThreeRepetitions(currData)