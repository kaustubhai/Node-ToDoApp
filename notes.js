const fs = require('fs')
const chalk = require('chalk');
const { inverse } = require('chalk');
const msg = chalk.bold.blue

const getNote = (p) => {
    fs.readFile(p, (err, fileContent) => {
        if (!err)
            console.log(msg(fileContent));
    })
}

module.exports = getNote;