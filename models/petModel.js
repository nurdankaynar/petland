const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetBlog = new Schema ({
        selectedPet: String,
        title: String,
        snippet: String,
        blogBody: String
    },

    { timestamps: true } 

)

module.exports = mongoose.model('PetBlog', PetBlog);