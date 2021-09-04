const os = require("os");
const path = require("path");

const {format} = require("date-fns")
const fs = require('fs');
const fsPromises = require('fs').promises;

const logEvents = async ( message ) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd')}`;
    const logItem = `${dateTime}\t${message}\n`;
    console.log(logItem);
    try{
        if (!fs.existsSync(path.join(__dirname, 'MyLogs'))){
            await fsPromises.mkdir(path.join(__dirname, 'MyLogs'))
        }
        await fsPromises.appendFile(path.join(__dirname, 'MyLogs', 'eventLog.txt'), logItem)
    }catch (error) {
        console.log(error)
    }
}

module.exports = logEvents;