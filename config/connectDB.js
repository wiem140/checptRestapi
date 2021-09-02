const mongoose = require ("mongoose")
// require("dotenv").config({path: './config/.env'})
const MONGO_URI = 'mongodb://localhost:27017/myapp'
const connectDB = async () =>{
    try {
        await mongoose.connect(MONGO_URI,{
            useNewUrlParser: true,
  useUnifiedTopology: true
        })
        console.log("mongo bd connected")
    } catch (error) {
        console.log(`database not connect ${error}`)
        
    }
}
module.exports =connectDB;