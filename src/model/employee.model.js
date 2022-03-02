const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    nic: { type: String, required: true },
    dob: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true},
    mobileNo: { type: String, required: true },
    emergencyNo: { type: String, required: true },
    sRate: { type: String, required: true },
    oTrate: { type: String, required: true },
    image: { type: String, required: true},
    password: {type:String, required:true},
    roster:{
        monday :{type: String},
        tuesday :{type:String},
        wednesday:{type:String},
        thursday :{type: String},
        friday :{type:String},
        saturday:{type:String},
        sunday:{type:String}
    }
});

const Employee = mongoose.model('employee', EmployeeSchema);
module.exports = Employee;