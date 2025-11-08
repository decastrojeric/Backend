import express from "express";
import "dotenv/config.js";
// import bookRoutes from "./routes/BookRoutes.js";
import studentRoutes from "./routes/StudentRoutes.js";

//init app
const app = express();

//middleware
app.use(express.json());

try{
    app.listen(process.env.PORT || 3000, () =>{
        console.log(`Listening to port ${process.env.PORT || 3000}...`)
})
}catch(e){
    console.log(e)
}

app.use('/student',studentRoutes);