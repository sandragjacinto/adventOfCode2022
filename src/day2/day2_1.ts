import { getData } from "../utils/getData"

/*
A || X for Rock, === 1
B || Y for Paper, === 2
C || Z for Scissors === 3

lost === 0
draw === 3
win === 6
2 1
3 2
1 3

paper wins rock 
scissors wins paper
rock wins scissors
*/

const transLateToNumber = (letter: string) => {
    switch (letter) {
        case 'A':
        case 'X':
            return 1;
        case 'B':
        case 'Y':
            return 2;
        default:
            return 3;
    }
}


export const transformData = (data: string): number[][] => {
    return data.trim().split('\n').map(x => x.split(' ').map((y: string) => transLateToNumber(y)))
}


export const myTotalScore = (data: string): number => {
    const transfData = transformData(data).reduce((acc, eachPlay) => {
        let points = 0;
        const [yours, mine] = eachPlay;
        
        if(Math.abs(mine - yours) === 2) {
            if(mine < yours) {
                points = 6;
            }    
            return acc + points +  mine
        }
        
        if(mine > yours) {
            points = 6;
        }
        
        if(mine === yours) {
            points = 3
        }
        
        
        return acc + points +  mine
    }, 0);
    
    return transfData;
}

const currData = getData('./day2/input.txt')
myTotalScore(currData)