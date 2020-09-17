const chalk = require('chalk');
const yargs = require('yargs');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log(chalk.greenBright.inverse(' Added '))
    }
})
    
yargs.command({
    command: 'delete',
    describe: 'Delete a note',
    handler: function () {
        console.log(chalk.red.inverse(' Deleted '))
    }
})

yargs.command({
    command: 'list',
    describe: 'list all the todos',
    handler: function () {
        console.log(chalk.yellowBright.inverse(' Listed '))
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a todo task',
    handler: function () {
        console.log(chalk.green.inverse(' Read '))
    }
})
console.log(yargs.argv)