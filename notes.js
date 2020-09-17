const fs = require('fs')
const chalk = require('chalk');
const yargs = require('yargs');


yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log('Added')
    }
    },
    {
        command: 'delete',
        describe: 'Delete a note',
        handler: function () {
            console.log.red('Deleted')
        }
    })