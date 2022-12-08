import { formatData } from '../day5/day5_1';
import { getData } from '../utils/getData';
// <= 100000

export const formatDataDay7 = (data: string) => {
    const bylines = data.split('$').filter(e => e).map(e => e.split('\n').filter(e=>e))
    
    let parent = 1;
    let dirs: string[] = []
    const objTree = bylines.reduce((acc, curr, index) => {
        if(bylines[index - 1] && bylines[index - 1][0].endsWith('..')) {
            parent = parent + 1;
            dirs.pop()
        }
        
        let temp = {} as Record<string, any>
        if(curr[0] === ' ls') {
            if(Object.keys(acc).length){
                temp[`${dirs.join('_')}_${bylines[index - 1][0].trim()}_${index}`] = {files: curr.map(e => {
                    return e.split(' ').filter(e => parseInt(e))
                }).filter(e => Boolean(e.length)).map(e => parseInt(e[0]))}
            }else {
                temp[`${bylines[index - 1][0].trim()}_${index}`] = {files: curr.map(e => {
                    return e.split(' ').filter(e => Number(e))
                }).filter(e => Boolean(e.length)).map(e => parseInt(e[0]))};
            }
            dirs.push(`${bylines[index - 1][0].trim()}_${index}`)
        }
        
        if (bylines[index - 1] && bylines[index - 1][0].startsWith(' cd') && !bylines[index - 1][0].endsWith('..')) {
            parent = 1
        }
        
        
        return {...acc, ...temp}
        
    }, {} as Record<string, any>);


    for (const iterator of Object.keys(objTree)) {
        const total = objTree[iterator].files.reduce((acc: number, curr:number) => {
            
            acc = acc + curr;
            
            return acc
        }, 0)
        
        objTree[iterator] = {
            ...objTree[iterator],
            currTotal: total
        }
    }
    
    for (const iterator of Object.keys(objTree)) {
        for (const iterator2 of Object.keys(objTree)) {
        if(iterator2.includes(iterator) && iterator !== iterator2) {
            objTree[iterator].currTotal = objTree[iterator].currTotal + objTree[iterator2].currTotal
        }
        }        
    }
    return objTree
}

interface entry {
    currTotal: number,
    files: number[]
}

export const getTotalDirectorySize = (data: string): number => {
    const formattedData = formatDataDay7(data);

    let total = 0
    for (const iterator of Object.keys(formattedData)) {
        const curr = formattedData[iterator];

            if(curr.currTotal <= 100000) {
                total = total + curr.currTotal;
            }
    
    }
    return total

}

const currData = getData('./day7/input.txt');
getTotalDirectorySize(currData)