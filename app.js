// const fs = require('fs')
// fs.writeFileSync('notes.txt','my name is tharun')
// fs.appendFileSync('notes.txt', ' my name is not tharun')
// const validator = require('validator');
// const chalk = require('chalk');
const yargs = require('yargs');
const { demandOption } = require('yargs');
const notes = require('./notes');
const { readNotes } = require('./notes');
//const printNotesRemarks = require('./notes.js')

//console.log(yargs.argv);
//yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'add a note now',
    builder:{
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
        //console.log('Title: ' + argv.title + '\n', "Body: " + argv.body);
    }
})


yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder:{
        title:{
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list out note titles',
    handler(){
        notes.listNotes()
    }
})


yargs.command({
    command: 'read',
    describe: 'read the title given',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        readNotes(argv.title)
    }
})
// printNotesRemarks()
// console.log(validator.isEmail('tharun@.com'));
// console.log(chalk.inverse.blue('Success!'));

// console.log(process.argv[2]);

// const command = process.argv[2]

// if(command === 'add') {
//     console.log('adding note')
// } else if (command === 'remove'){
//     console.log('removing code')
// }

yargs.parse()