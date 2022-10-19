const write = require ('./write')
const read = require('./read')
const add = require('./add')
const del = require('./del')
const present = require('./present')
const update = require('./update')

//get user input
const data = process.argv

if(data[2] == 'add'){
    //Build object
    note = {
        id: data[3],
        title: data[4],
        body: data[5]
    }


//Get old note value
var oldNote = read()
//Add note to note value
add(note, oldNote)
//console.log(note)
}

if(data[2] == 'read'){
    present(read())
}

 if (data[2] == 'delete') {
    // get ID to delete from notes
    const id = data[3]
    // get old note values
    const oldNote = read()

    del(id, oldNote);
    present(read())
    //console.log(read())
 }

  if (data[2] === 'update') {
    const note = {
        id: data [3],
        title: data [4],
        body: data [5]
    }
    const oldNote = read ()

    update(note, oldNote)

    present(read())
  }