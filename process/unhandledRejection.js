const fs = require('fs');
module.exports = async (client, error) => {
    console.error('unhandledRejection:', error);
    fs.appendFile('./Logs/unhandledRejection.txt', error + "\n", (err) => {
        if (err) {
            console.error('Error appending to unhandledRejection.txt file:', err);
        }
    })
}
