var mongoose = require('mongoose');
const {ATLAS_CONNECTION_STRING} = require("../constants");

mongoose.set('debug', true);
mongoose.connect(ATLAS_CONNECTION_STRING);
mongoose.Promise = Promise;

module.exports.Todo = require("./todo");
