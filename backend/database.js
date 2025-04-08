import mongoose, {connect}  from "mongoose";
import { config  } from "./src/config.js";

mongoose.connect(config.db.URI)

const connection = mongoose.connection

connection.once("open", () =>{
    console.log("DB is connected")
})
connection.once("disconnect", () => {
    console.log("DB is disconnect")
})

connection.once("error", (error) =>{
    console.log("error" + error)
});