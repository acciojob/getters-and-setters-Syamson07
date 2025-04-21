// Base class: Person
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Getter for age
  get age() {
    return this._age;
  }

  // Setter for age
  set age(value) {
    if (value >= 0) {
      this._age = value;
    } else {
      console.error("Age must be a positive number.");
    }
  }
}

// Subclass: Student
class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

// Subclass: Teacher
class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// 🔓 Make classes accessible globally for Cypress
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
