const os = require("os");
const path = require("path");

const {format} = require("date-fns")
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async ( message ) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd')}`;
    const logItem = `${dateTime}\t${message}`;
    console.log(logItem);
    try{
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), logItem)
    }catch (error) {
        console.log(error)
    }
}

module.exports = logEvents;
