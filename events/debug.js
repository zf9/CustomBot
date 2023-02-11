const fs = require('fs');
module.exports = async (client, error) => {
    fs.appendFile('./Logs/debug.txt', error + "\n", function (err) {
        if(err) return console.error('Error while appending to debug.txt file:', err);
    })
}
