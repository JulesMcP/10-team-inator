const Employee = require('../lib/Employee');

test('test employee object', () => {
    const employee = new Employee('Natasha', 16, 'blackwidow1@marvel.com');
    
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});
