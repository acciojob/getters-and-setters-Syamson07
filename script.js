//complete this code
class Person {
	constructor(name,age){
		this._name=name;
		this._age=age;
	}
	get name(){
		return this._name;
	}
	get age(){
		return this._age;
	}
	set age(value) {
    if (value >= 0) {
      this._age = value;
    } else {
      console.error("Age must be a positive number.");
    }
  }
}

class Student extends Person {	
  study() {
    console.log(`${this.name} is studying`);
}
}

class Teacher extends Person {
	teach() {
    console.log(`${this.name} is teaching`);
  }
const person = new Person("John", 25);
console.log(person.name); 

person.age = 30;
console.log(person.age);  

// 2. Student instance
const student = new Student("Alice", 22);
student.study();     

// 3. Teacher instance
const teacher = new Teacher("Bob", 40);
teacher.teach();           
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
