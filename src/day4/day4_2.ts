import { getData } from "../utils/getData";
import { formatData } from './day4_1';

export const anyOverlap = (data: string) => {
    const formattedData = formatData(data);

    const covered = formattedData.filter(rows => {
        const [elf1, elf2] = rows.sort((a, b) => Number(a[0]) - Number(b[0]));

        if(parseInt(elf1[0]) === parseInt(elf2[0])) {
            return true
        }
        
        if ((parseInt(elf1[1]) >= parseInt(elf2[0]))) {
            return true
        }

    })
    return covered.length
}

const currData = getData('./day4/input.txt');
anyOverlap(currData)
