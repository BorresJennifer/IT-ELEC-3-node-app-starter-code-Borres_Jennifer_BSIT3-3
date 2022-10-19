const fs = require('fs')

const write = function (data = "IMPOSSIBLE"){
    fs.writeFileSync('note.txt', data);
}

module.exports = write