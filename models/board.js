const mongoose = require('mongoose');

const boardSchema = mongoose.Schema;

const Board = new boardSchema({
    name:{
      type: String
    }

},{
    timestamps: true
});

module.exports = mongoose.model('Board', Board);