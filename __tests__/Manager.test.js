const Manager = require('../lib/Manager');

test('test manager object', () => {
    const manager = new Manager('Nick Fury', 50, 'thepatch@marvel.com', 10);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});