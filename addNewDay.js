const addNewDay = () => {

    const day = process.argv.slice(2);
    const DAY = process.env.DAY
    
    if (!day.length || DAY) {
        throw new Error('You forgot the day')

        return;
    }


    const fs = require('fs-extra');
    const currDay = `day${day}`
    const base = `./src/${currDay}`;
    const tests = `${base}/__tests__`
    
    const filesToCreate = [`${base}/${currDay}_1.ts`, `${base}/${currDay}_2.ts`, `${base}/input.txt`, `${tests}/input.txt`, `${tests}/${currDay}.spec.ts`]
    
    filesToCreate.map(file => {

        fs.ensureFile(file, err => {
            console.log(err) // => null
        });

        return 'done'
    })
    return 'done'
}


addNewDay()