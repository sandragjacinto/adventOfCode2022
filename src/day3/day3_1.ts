import { getData } from "../utils/getData";

export const valuesOf = (s: string) => {
    return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(s) + 1
} 


const formatData = (data:string): string[][] => {
    const list = data.split('\n').map(element => ([element.substring(0, (element.length)/2), element.substring((element.length)/2)]))

    return list.map(containers => {
        const [first, second] = containers;
        const letter = [...first].map( letter => second.includes(letter) ? letter : '').filter(e => e)[0];
            
        return [first, second, letter]
    }).filter(e => e);
}

export const sumOfRepetitions = (data:string): number => {

    const dataArray = formatData(data);

    return dataArray.reduce((acc, curr) => {
        return acc + valuesOf(curr[2])
    }, 0)

}


const currentData = getData('./day3/input.txt');
sumOfRepetitions(currentData)