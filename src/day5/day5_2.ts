import { getData } from "../utils/getData";
import { formatData } from "./day5_1";

export const cratesOnTopMoveChunk = (data: string) => {
    const {stack, moves} = formatData(data)
    
    moves.map( move => {
        const [amount, from, to] = move;

        const letterToMove = stack[parseInt(from) - 1].splice(0, parseInt(amount))
        stack[parseInt(to) - 1].unshift(...letterToMove)
    })
    
    return stack.map(line => line[0]).join('')

};

const currData = getData('./day5/input.txt');
cratesOnTopMoveChunk(currData)