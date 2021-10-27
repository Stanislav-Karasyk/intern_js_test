const departments = [
  { id: 1, title: "management", employees: [] },
  { id: 2, title: "kitchen", employees: [] },
  { id: 3, title: "hall", employees: [] },
];

// const positions = [
//   { id: 1, position: "manager" },
//   { id: 2, position: "cook" },
//   { id: 3, position: "waiter" },
//   { id: 4, position: "cleaner" },
// ];

const positions = { 1: "manager", 2: "cook", 3: "waiter", 4: "cleaner" };

class Restaurant {
  constructor(departments, positions) {
    this.departments = departments;
    this.positions = positions;
  }

  addDepartment(id, title) {
    const newDepartment = { id, title, employees: [] };
    this.departments.push(newDepartment);

    return newDepartment;
  }

  findDepartment(id) {
    return this.departments.find((department) => department.id === id);
  }

  addEmployee(name, surname, departmentId, positionId, salary, isFired) {
    const employee = {
      name,
      surname,
      departmentId,
      position: this.positions[positionId],
      salary,
      isFired,
    };

    const selectedDepartment = this.findDepartment(departmentId);

    return selectedDepartment.employees.push(employee);
  }
}
const restaurant = new Restaurant(departments, positions);

// restaurant.addDepartment(5, "book")
restaurant.addEmployee("Max", "Planck", 2, 1, 1500, false);
restaurant.addEmployee("Katherine", "Blodgett", 2, 2, 1500, false);
restaurant.addEmployee("Ada", "Lovelace", 2, 3, 1000, false);
restaurant.addEmployee("Johannes", "Kepler", 2, 4, 500, false);

console.log(restaurant.departments);

// const arr = restaurant.departments;

// arr.forEach((item) => {
//   if (item.numberDepartment === 2) {
//     console.log(item.employees);
//   }
// });

// console.log(restaurant);
// console.log(restaurant.departments);
