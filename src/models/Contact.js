const mongoose=require("mongoose")

const Contact= mongoose.Schema({
    email:String,
    contact_number:Number,
    query:String
})

module.exports=mongoose.model("queries",Contact)