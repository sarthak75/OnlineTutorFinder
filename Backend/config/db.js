const mongoose = require('mongoose')

mongoose.set('strictQuery', true);

const connectDB = async () => {
    try{
        const conn = await mongoose.connect("mongodb+srv://sarthak:qV8WBsXnCHFGuams@cluster0.iw2uehq.mongodb.net/?retryWrites=true&w=majority")
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    }catch(error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB