const express=require("express")
const router=express.Router()

const{
    getEmployes ,
    getEmployesById,
    addEmployes,
    // createEmployes,
    updateEmployes,
    deleteEmployes
    
}=require("../controller/employeeController.js");


// read operation
router.get('/',getEmployes); 

router.get('/:id',getEmployesById)


router.post('/',addEmployes);
// update operation
router.put('/:id',updateEmployes);
// delete operation
router.delete("/:id",deleteEmployes);

module.exports=router