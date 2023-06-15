import { Schema, model } from "mongoose";

const saleSchema = new Schema({
   totalPrice:{type:Number, required:true},
    floor:{type:Number, required: true},
    room:{type:Number, required: true},
    bathroom:{type:Number, required: true},
    terras:{type:Boolean, required: true},
    elevator:{type:Boolean, required: true},
    garden:{type:Boolean, required: true},
    parking:{type:Boolean, required: true},
    warehouse:{type:Boolean, required: true},
    area:{type:Number, required: true},
    city:{type:String, required: true},
    province:{type:String, required: true},
})

const Sale = model('sale', saleSchema)

export default Sale;