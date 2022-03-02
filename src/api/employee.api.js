const express = require('express');
const router = express.Router();
const EmployeeController = require('../controller/employee.controller');

module.exports = function (){
    router.get('/', EmployeeController.getAllEmployee);
    router.get('/:id', EmployeeController.getEmployeeById);
    router.post('/create', EmployeeController.createEmployee);
    router.put('/update', EmployeeController.updateEmployee);
    router.post('/validate', EmployeeController.validateEmployee);
    router.post('/delete',EmployeeController.deleteEmployee);
    return router;
}
