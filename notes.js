const fs = require('fs')
const chalk = require('chalk');



 const addNote = (title, body) => {
    const notes = loadNotes()

    //const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)


    //console.log(duplicateNote);
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log("New note created");
    }
    else{
        console.log("note title taken");
    }



}

const removeNote = (title) =>  {
    const notes = loadNotes()
    //console.log(title)
    const keepNotes = notes.filter((note) => note.title !== title)

    if(notes.length > keepNotes.length){
        saveNotes(keepNotes);
        console.log(chalk.inverse.green( 'Note removed'))
    }
    else{
        console.log(chalk.inverse.red('No note found!'));
    }
    
}


const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse.green("Your Notes:"));
    notes.forEach((note) => {
        console.log(note.title)
    });
}


const readNotes = (title) => {
    const notes = loadNotes()
    const noteInside = notes.find((note) => note.title === title)
    //console.log(noteInside)
    
    noteInside !== undefined ? console.log(chalk.inverse.green(noteInside.title) + '\n' + noteInside.body) : console.log(chalk.inverse.red("Not Found"))
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch (e) {
        return []
    }

}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}