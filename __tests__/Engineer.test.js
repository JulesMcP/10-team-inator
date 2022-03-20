const Engineer = require('../lib/Engineer');

test('test engineer object', () => {
    const engineer = new Engineer('Shuri', 98, 'Wakanda@marvel.com', 'WizKid');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});