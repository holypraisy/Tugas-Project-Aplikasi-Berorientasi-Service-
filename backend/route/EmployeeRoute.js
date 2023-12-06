import express from "express";
import { getEmployees,
         getEmployeeById,
        addEmployee,
        updateEmployee,
        deleteEmployee, 
        patchEmployee} from "../controller/EmployeeController.js";


const router = express.Router();

router.get('/employees', getEmployees);
router.get('/employees/:id', getEmployeeById);
router.post('/employees', addEmployee);
router.put('/employees/:id', updateEmployee);
router.delete('/employees/:id', deleteEmployee);

router.patch('/employees/:id',patchEmployee);


export default router; 

