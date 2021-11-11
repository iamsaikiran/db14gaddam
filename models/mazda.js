const mongoose = require("mongoose") 
const mazdaSchema = mongoose.Schema({ 
 cost: Number, 
 model: String, 
 color: String 
}) 
 
module.exports = mongoose.model("Mazda", 
mazdaSchema) 