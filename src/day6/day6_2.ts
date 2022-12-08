import { getData } from "../utils/getData"

export const messageStart = (data: string): number => {
    const mark: string[] = []
    let ind = 0
    const toto = [...data].find((letter, index) => {
        if(mark.length < 14) {
            mark.push(letter)
        } else {
            mark.splice(0,1)
            mark.push(letter)
        }
        
        const test = new Set(mark)
        ind = index + 1;
        return test.size === 14
    })

    return ind
}


const currData = getData('./day6/input.txt');
messageStart(currData);