const { Employee } = require('./employee.ts');

describe('Suite for employees', () => {
  test('create an employee', () => {
    const name = 'Judas Prist';
    const e = new Employee(name);

    expect(e.getName()).toEqual(name);
  });
});
