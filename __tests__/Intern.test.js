const Intern = require('../lib/Intern');

test('test intern object', () => {
    const intern = new Intern('Sam Wilson', 101, 'Falcon1@marvel.com', 'Air Force');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});