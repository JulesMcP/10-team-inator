// use Employee const as parent
const Employee = require('./Employee');
// use super() method to get data from Employee and creates Manager const
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
       super(name, id, email);
       this.officeNumber = officeNumber;
    }
    getTitle() {
        return 'Manager';
    }   
};

module.exports = Manager;