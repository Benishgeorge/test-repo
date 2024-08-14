const express = require ('express')
const mongoose = require ('mongoose')

const userroutes = require ('./Routes/userroutes')

const app = express();

const port = 4002;

//define routes
app.use('/api',userroutes);
 

const MONGO_URI = "mongodb+srv://benishgeorge4:ben12345@cluster0.e8nczjd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(MONGO_URI,{});


mongoose.connection.on('connected', () =>{
    console.log("MongoDB successfully connected");
})

app.listen(port, () => {
    console.log ("Server is Started on port" + " " + port)
})




















