import { getData } from "../utils/getData"

/*
X === lose, Y === draw, Z === win

lost === 0
draw === 3
win === 6

A for Rock, === 1
B for Paper, === 2
C for Scissors === 3

1 > 3
2 > 1
3 > 2
*/
const transLateToNumber = (letter: string) => {
    switch (letter) {
        case 'A':
            return {
                val: 1,
                wins: 3,
                looses: 2 
            };
        case 'B':
            return {
                val: 2,
                wins: 1,
                looses: 3
            };
        default:
            return {
                val: 3,
                wins: 2,
                looses: 1
            };
    }
};

const getPlayResult = (play: string[]) => {
    const [yours, mine] = play;

    if (mine === 'Y') {
        return 3 + transLateToNumber(yours).val;
    }

    if(mine === 'X') {
        return transLateToNumber(yours).wins
    }

    return 6 + transLateToNumber(yours).looses
}

const transformData = (data:string): number[] => {
    return data.trim().split('\n').map(eachPlay => getPlayResult(eachPlay.split(' ')))
}

export const myTotalLooseWin = (data:string) => {
    const transformedData = transformData(data)
    return transformedData.reduce((acc, curr) => acc + curr, 0)
}

const currData = getData('./day2/input.txt')
myTotalLooseWin(currData)