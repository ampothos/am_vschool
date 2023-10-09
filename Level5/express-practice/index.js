const express = require("express")

const app = express() 

const users = [{name : "joe", age : 39}, 
                {name : "joe", age : 39},
                {name : "joe", age : 39}]
//1 endpoint/mountpath
//2 callback function 
app.get("/", (request, response) => {
    response.send(users)
})

    // 1: port 
    //2: callback function 
app.listen(9000, () => {
    console.log("Server is running on port 9000")
 }) 
