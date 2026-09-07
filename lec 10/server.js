// const express = require("express");
// const app = express()

// app.use(express.json()); //data parse coming as 

// const employees = [
//     { empId: 1, name: "Satakshi", salary: 10000, department: "IT" },
//     { empId: 2, name: "Nikhil", salary: 20000, department: "HR" },
//     { empId: 3, name: "Prachi", salary: 30000, department: "Finance" },
//     { empId: 4, name: "Muskan", salary: 10000, department: "IT" },
//     { empId: 5, name: "Rohit", salary: 1000, department: "Sales" }
// ]

// //Read Operation
// // app.get("/employees/:id", (req, res) => {
// //     res.json(employees);
// // });
// // app.get("/employees/:id", (req, res) => {
// //     const id = req.params.id;
// //     const result = employees.find((employee) => employee.empId === Number(id));
// // });-
// // if (!employee) {

// // return res.status(404).json({

// success: false,

// message: "Employee not found"

// });

// }

// res.json({


// });



// app.post("/employees", (req, res) => {
//     const employee = req.body;
//     employees.push({ empId: employees.length + 1, ...employee });
//     res.json({ success: true, employee })
// })

// app.put("/employees/:id", (req, res) => {
//     const id = req.params.id;
//     const employee = req.body
//     const result = employees.find((employee) => employee.empId === Number(id));
//     if (!result) {
//         res.status(404).json({ success: false, message: "employee not found" });
//     }
//     result.name = employee.name;
//     result.salary = employee.salary;
//     result.department = employee.department;

//     res.json({ success: true, employee })
// })

// app.listen(4000, () => console.log("server is running on port 4000"))



//Create
app.post("/employees",(req,res)=>{
    const employee=req.body;
    employees.push({empId:employees.length+1,...employee});
    res.json({success:true,employee});  
})

//update
app.put("/employees/:id",(req,res)=>{
    const id=req.params.id;
    const employee=req.body;
    const result=employees.find((employee)=>employee.empId===Number(id));
    if(!result){
        res.status(404).json({success:false, message:"employee not found"});
    }
    result.name=employee.name;
    result.salary=employee.salary;
    result.department=employee.department;
    res.json({success:true,employee});
})

//delete
app.delete("/employees/:id",(req,res)=>{
    const id=req.params.id;
    const result=employees.find((employee)=>employee.empId===Number(id));
    if(!result){
        res.status(404).json({success:false, message:"employee not found"});
    }
    employees.splice(id-1,1);
    res.json({success:true,result});
})

app.listen(3000,()=>console.log("server is running on port 3000"));