// use Employee const as parent
const Employee = require('./Employee');
// use super() method to get data from Employee and creates Engineer const
class Engineer extends Employee{
    constructor(name, id, email, github) {
       super(name, id, email);
       this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getTitle() {
        return 'Engineer';
    }   
};

module.exports = Engineer;