const mongoose = require('mongoose');
var Category = mongoose.model('Category',{ //give model name in sigular so that it chnages to plural
    categoryname:{type: String},
}); 
module.exports={Category};