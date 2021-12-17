const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var blogSchemaful = new Schema({
    name: String,
    description: String
});
var blogs = mongoose.model('blog', blogSchemaful);

module.exports = blogs;