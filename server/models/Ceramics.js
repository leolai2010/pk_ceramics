var mongoose = require('mongoose');
var CeramicSchema = new mongoose.Schema({
    imageurl: { type: String, required:[true, "Please upload an image"] },
    name: { type: String, required:[true, "Name is required"], minlength:[3, "Must have 3 Characters"] },
    type: { type: String, required:[true, "Please select a Type"] },
    price: { type: Number, required:[true, "Please Enter a Price value"] },
}, {timestamps: true})
var CartSchema = new mongoose.Schema({
    ceramics:[CeramicSchema]
}, {timestamps: true})
mongoose.model('Ceramic', CeramicSchema);
mongoose.model('Cart', CartSchema);