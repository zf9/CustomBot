const fs = require('fs');
module.exports = async (client, error) => {
    console.error('error:', error);
    fs.appendFile('./Logs/error.txt', error + "\n", function (err) {
        if(err) return console.error('Error while appending to error.txt file:', err);
    })
}
