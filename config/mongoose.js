const mongoose = require('mongoose');

const url = "mongodb+srv://ganeshpbharadwaj010:Bx3Cz8UTDHoeRgh7@cluster0.ylnbicx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Auth"

exports.connectMongoose = async()=>{
    try{
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connectde using Mongoose");
    } catch(err){
        console.log("Error while connecting to db");
    }
}