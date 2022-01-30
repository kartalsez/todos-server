var dbName = 'todo';
var userName = 'admin';
var password = 'LeLxTgUqf8PFX8hf';
var LOCAL_CONNECTION_STRING = `mongodb://localhost/${dbName}`;
var ATLAS_CONNECTION_STRING = `mongodb+srv://${userName}:${password}@todocluster.uhnc3.mongodb.net/${dbName}?retryWrites=true&w=majority`;

module.exports = {LOCAL_CONNECTION_STRING, ATLAS_CONNECTION_STRING};
