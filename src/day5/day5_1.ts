import { getData } from "../utils/getData";

export const formatData = (data:string) => {
    const [stack, moves] = data.split('\n\n')
    const stacks = stack.split('\n');
    const bnOfcols = parseInt(stacks[stacks.length - 1].trim().slice(-1));
    const bnOflines = stacks.length - 1;
    
    const cleanLines = stacks.map((x, index) => {
        const newLine = x.replaceAll('    ', '[0]').replaceAll(' ', '').replaceAll('][', '_').split('_')
        return newLine.map(l => {
            return l.replaceAll('[', '').replaceAll(']', '')
        })
    })
    
    let ARR: string[][] = [];
    
    for (let indexCol = 0; indexCol < bnOfcols; indexCol++) {
        ARR.push([])
        for (let indexLine = 0; indexLine < bnOflines; indexLine++) {
            ARR[indexCol].push(cleanLines[indexLine][indexCol])
        }
        
    }

   const listMoves = moves.replaceAll(/[a-z]+/g, '').split('\n').map(e => e.trim().replaceAll('  ', '_').split('_'))

    return {stack : ARR.map(list => list.filter(e => e !== '0')), moves: listMoves}

}

export const cratesOnTop = (data: string) => {
    const {stack, moves} = formatData(data)
    
    moves.map( move => {
        const [amount, from, to] = move;
        
        for (let index = 0; index < parseInt(amount); index++) {
            const letterToMove = stack[parseInt(from) - 1].shift()
            stack[parseInt(to) - 1].unshift(letterToMove || '')
        }

    })
    
    return stack.map(line => line[0]).join('')

};

const currData = getData('./day5/input.txt');
cratesOnTop(currData);