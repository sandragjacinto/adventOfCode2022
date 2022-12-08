export const getData = (currPath: string): string => {
    const fs = require('fs');
    const path = require('path');
    return fs.readFileSync(path.join('./src', currPath), 'utf8');
}