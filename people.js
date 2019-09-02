class Person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }

    changeName(newName) {
        this.age = newName;
    }

    birthday(){
        this.age++;
    }

    getHeight(newheight) {
        this.height = newheight;
    }
    
}

class Employee extends(Person){
    constructor(name, age, height){
        super(name, age, height);
        // makes sure that Employee inherits all the property of Person
    } 
}

class Student extends(Person){
    constructor(name, age, height, school, id){
        super(name, age, height)
        this.school = school;
        this.id = id;
    }
   
}

// const newEmployee = new Employee("Jethro", 27, 179);
// console.log(newEmployee.name);
// console.log(newEmployee.age);
// console.log(newEmployee.height);

const newStudent = new Student("Jethro", 26, 180, "Mount Pleasant High School", 30420);

console.log(newStudent.name);
console.log(newStudent.age);
console.log(newStudent.height);
console.log(newStudent.school);
console.log(newStudent.id);

// Person > Student/Empl

// Create a class called Vehicl 

// Vehicle > Sedan/HatchBack > Brand