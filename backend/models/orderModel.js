const mongoose=require('mongoose')
var Order=mongoose.model('order',{

    iname: {type: String},
    idesc: {type: String},
    cname: {type: String},
    cemail: {type: String},
    cphone: {type: String},
    caddress: {type: String,required:true},
    quan:{type:Number},
    price:{type:Number},
    date:{type:Date}

})
module.exports={Order}
