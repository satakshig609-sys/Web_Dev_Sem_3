const employees=require("../data/employeData.js")


const getEmployes=(req,res)=>{
    res.json(employees);
}

const getEmployesById=(req,res)=>{
     const id =req.params.id;
    const employee=employees.find(employee=>employee.employeeId===Number(id));
    if(!employee){
         return res.status(404).json({success:false,message:"Employee not found"});
    }
    res.json({success:true,employee});
}

const addEmployes=(req,res)=>{
    const employee=req.body;
    employees.push({employeeId:employees.length+1,...employee});
    res.json({success:true,employee});
}

// const createEmployes=(req,res)=>{
//     const id=req.params.id;
//     const employee=req.body
//     const result=employees.find((employee)=>employee.employeeId===Number(id)); 
//     if(!result){
//         res.status(404).json({success:false,message:"Employee not found"}); 
//     } 
//     result.name=employee.name;
//     result.department=employee.department;
//     result.salary=employee.salary;
//     res.json({success:true,employee:result});
// }

const updateEmployes=(req,res)=>{
    const id=req.params.id;
    const employee=req.body
    const result=employees.find((employee)=>employee.employeeId===Number(id)); 
    if(!result){
        return res.status(404).json({success:false,message:"Employee not found"}); 
    } 
    result.name=employee.name;
    result.department=employee.department;
    result.salary=employee.salary;
    res.json({success:true,employee:result});
}

const deleteEmployes=(req,res)=>{
    const id=req.params.id;
    const result=employees.find((employee)=>employee.employeeId===Number(id));
    if(!result){
        return res.status(404).json({success:false,message:"Employee not found"});
    }
    employees.splice(id-1,1);
    res.json({success:true,result});
};


module.exports={
   getEmployes ,
    getEmployesById,
    addEmployes,
    // createEmployes,
    updateEmployes,
    deleteEmployes
}