import { getData } from "../utils/getData";

export const formatData = (data:string): string[][][] => {
    const dataList = data.trim().split('\n').map(e => e.split(',').map(e => e.split('-')))
    return dataList
}

export const fullyContains = (data: string) => {
    const formattedData = formatData(data);
    const covered = formattedData.filter(rows => {
        const [elf1, elf2] = rows.sort((a, b) => Number(a[0]) - Number(b[0]));

        if(parseInt(elf1[0]) === parseInt(elf2[0])) {
            return true
        }
        
        if ((parseInt(elf1[0]) <= parseInt(elf2[0])) && (parseInt(elf1[1]) >= parseInt(elf2[1]))) {
            return true
        }
        // return parseInt(elf1[0]) === parseInt(elf2[0]) || ((parseInt(elf1[0]) <= parseInt(elf2[0])) && (parseInt(elf1[elf1.length - 1]) >= parseInt(elf2[elf2.length - 1])))
    })

    return covered.length
}

const currData = getData('./day4/input.txt');
fullyContains(currData)
