import {getData} from '../utils/getData'
// const fs = require('fs');
// const path = require('path');
// const currData = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8');

export const getByORder = (data:string) => {
    return data.split('\n\n').map(each => each.split('\n').reduce((acc, curr) => Number(acc) + Number(curr), 0)).sort((a, b) => b - a);
}

export const carriesMost = (data:string) => {
    return getByORder(data)[0]
};

const currData = getData('./day1/input.txt')
carriesMost(currData)