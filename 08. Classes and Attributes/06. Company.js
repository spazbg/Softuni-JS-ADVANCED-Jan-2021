class Company {
  #departments;
  constructor() {
    this.#departments = [];
  }

  addEmployee(username, salary, position, department) {
    if (!username || !position || !department || !salary || salary < 0) {
      throw new Error("Invalid input!");
    }

    let newEmploy = {
      username: username,
      salary: Number(salary),
      position: position,
    };

    if (!this.#departments[department]) {
      this.#departments[department] = [];
    }
    this.#departments[department].push(newEmploy);
    return `New employee is hired. Name: ${username}. Position: ${position}`;
  }

  bestDepartment() {
    let department = "";
    let maxSalary = 0;
    Object.entries(this.#departments).forEach(([key, value]) => {
      let salary = 0;
      value.forEach((e) => {
        salary += e.salary;
      });
      salary = salary / value.length;
      if (salary > maxSalary) {
        department = key;
        maxSalary = salary;
      }
    });
    if (department != "") {
      let res = `Best Department is: ${department}\nAverage salary: ${maxSalary.toFixed(
        2
      )}\n`;
      Object.values(this.#departments[department])
        .sort(
          (a, b) => b.salary - a.salary || a.username.localeCompare(b.username)
        )
        .forEach((e) => {
          let em = `${e.username} ${e.salary} ${e.position}\n`;
          res += em;
        });
      return res.trim();
    }
  }
}
