const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    const p = fs.readFileSync('./tasks.json')
    const dataString = p.toString();
    data = JSON.parse(dataString);
    return data;
}

const putNotes = (obj) => {
    
    try{
        const data = getNotes();
    }catch (e) {
        data = []
    }
    
    for (let i in data) {
        if (data[i].title === obj.title) {
            console.log(chalk.red('Task with same title exist'))
            return;
        }
    }    

    data.push(obj);
    const dataString = JSON.stringify(data);
    fs.writeFileSync('./tasks.json', dataString)
}

const delNotes = (title) => {
    try{
        const data = getNotes();
    }catch (e) {
        data = []
    }
    
    data = data.filter(i => i.title !== title);
    
    const dataString = JSON.stringify(data);
    fs.writeFileSync('./tasks.json', dataString)
}

module.exports = {
    add: putNotes,
    read: getNotes,
    delete: delNotes
}