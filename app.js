const chalk = require('chalk');
const { argv } = require('yargs');
const yargs = require('yargs');
const notes = require('./notes')

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
        const obj = { title: argv.title, body: argv.body };
        notes.add(obj);
    }
})
    
yargs.command({
    command: 'delete',
    describe: 'Delete a note',
    build: {
        title: {
            describe: 'Title of the note to delete',
            type: 'string',
            demandOption: true
        }
    },
    handler: function () {
        notes.delete(argv.title)
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

yargs.parse()