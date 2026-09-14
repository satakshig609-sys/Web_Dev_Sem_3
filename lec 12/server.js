const express= require('express');
const employees=require("./data/employeData.js");
const employerRoutes=require("./routes/employeRoutes.js")

const app=express();

app.use(express.json());
app.use("/employees",employerRoutes)

app.listen(3000,()=>{console.log("Server is running on port 3000");
})


