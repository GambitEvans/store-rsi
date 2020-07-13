const mongoose = require('mongoose');

function connect() {
    mongoose.connect("mongodb://localhost:27017/store", {
        useNewUrlParser: true, 
        useUnifiedTopology: true });
}


module.exports = {
    connect
};