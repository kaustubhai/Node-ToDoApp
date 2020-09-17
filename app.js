const chalk = require('chalk');
const yargs = require('yargs');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Title of the task',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Body of the task',
            type: 'string',
        }
    },
    handler: function(argv) {
        console.log(chalk.blue(' Added: ', argv.title, ' '))
        console.log(chalk.greenBright.inverse(' Task: ', argv.body, ' '))
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
        console.log(chalk.<i class="fa fa-bullseye" aria-hidden="true"></i>(' Read '))
    }
})

yargs.parse()