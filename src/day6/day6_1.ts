import { getData } from "../utils/getData"

export const markerStart = (data: string): number => {
    const mark: string[] = []
    let ind = 0
    const toto = [...data].find((letter, index) => {
        if(mark.length < 4) {
            mark.push(letter)
        } else {
            mark.splice(0,1)
            mark.push(letter)
        }
        
        const test = new Set(mark)
        ind = index + 1;
        return test.size === 4
    })

    return ind
}


const currData = getData('./day6/input.txt');
markerStart(currData);