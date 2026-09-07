const express = require("express");
const app = express();
const PORT = 3000;

const users = [
    { id: 101, name: "Satakshi", email: "Satakshi09@gamil.com" },
    { id: 102, name: "Nikhil", email: "Nikhil09@gamil.com" },
    { id: 103, name: "Prachi", email: "Prachi709@gamil.com" },
    { id: 104, name: "Muskan", email: "Muskan109@gamil.com" },

]

app.get("/", (req, res) => {
    res.send("hello world")  //text or HTML
})


app.get("/about", (req, res) => {
    res.send("hello from about")
})


app.get("/user", (req, res) => {
    res.json("hello from about") //json format and object type
})



app.listen(PORT, () => {
    console.log("Server is running on port 3000")
})