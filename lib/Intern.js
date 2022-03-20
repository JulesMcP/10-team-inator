// use Employee const as parent
const Employee = require('./Employee');
// use super() method to get data from Employee and create Intern const 
class Intern extends Employee {
    constructor(name, id, email, school) {
       super(name, id, email);
       this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getTitle() {
        return 'Intern';
    }   
};

module.exports = Intern;