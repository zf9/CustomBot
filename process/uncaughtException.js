const fs = require('fs');
module.exports = async (client, error) => {
    console.error('uncaughtException:', error);
    fs.appendFile('./Logs/uncaughtException.txt', error + "\n", (err) => {
        if (err) {
            console.error('Error appending to uncaughtException.txt file:', err);
        }
    })
}
