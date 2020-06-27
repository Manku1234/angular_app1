const mongoose = require('mongoose');
var Brand = mongoose.model('Brand',{ //give model name in sigular so that it chnages to plural
    brandname:{type: String},
}); 
module.exports={Brand};