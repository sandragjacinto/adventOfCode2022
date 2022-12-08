import { getData } from "../utils/getData";
import { formatDataDay7 } from "./day7_1";

/*
The total disk space available to the filesystem is 70000000. 
To run the update, you need unused space of at least 30000000. 
You need to find a directory you can delete that will free up enough space to run the update.

In the example above, the total size of the outermost directory 
(and thus the total amount of used space) is 48381165; 
this means that the size of the unused space must currently be 21618835, 
which isn't quite the 30000000 required by the update. 
Therefore, the update still requires a directory with total size of at least 8381165 
to be deleted before it can run.
*/



export const getTotalDirectorySizeToDelete = (data): number => {
    const formattedData = formatDataDay7(data);
    const totalOccupied = formattedData['cd /_1'].currTotal
    const unused = 70000000 - totalOccupied;
    const needed = 30000000 - unused;

    const dataArray = Object.keys(formattedData).reduce((acc, curr: string) => {
        formattedData[curr] = {
            ...formattedData[curr],
            path: curr
        }

        acc.push(formattedData[curr])

        return acc
    }, []);

    dataArray.sort((a, b) => a.currTotal - b.currTotal)

    const dirTodelete = dataArray.find(e => e.currTotal >= needed)

    return dirTodelete.currTotal
}

const currData = getData('./day7/input.txt');
getTotalDirectorySizeToDelete(currData)