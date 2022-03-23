class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
  }


class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level
        this.students = students;
    }
        logstudents(){
            console.log(this.students);
        }

    registerStudent(studentToRegister) {
        if (!studentToRegister.name || !studentToRegister.email) {
            console.log("Invalid Name or Email");
            return false;
        }
        for (const student of this.students){
            console.log('student is', student.name)
         if (studentToRegister.email == student.email){
            console.log("Email is already registered");
            return false;
            }
        }
    }  
}



testStudent = new Student('Bugs Bunny', 'bugs@bunny.com');
console.log(testStudent); 
reactBootcamp = new Bootcamp("React", "Advanced", [testStudent]);
reactBootcamp.registerStudent(testStudent);







if ( testStudent.name === 'Bugs Bunny' && testStudent.email === 'bugs@bunny.com') {
console.log('TASK 1: PASS');
}


reactBootcamp = new Bootcamp("React", "Advanced");
console.log(reactBootcamp);
if ( reactBootcamp.name === 'React' && reactBootcamp.level === 'Advanced'
    && Array.isArray(reactBootcamp.students) && reactBootcamp.students.length === 0) {
console.log('TASK 2: PASS');
}

const runTest = (bootcamp, student) => {
const attemptOne = bootcamp.registerStudent(student);
const attemptTwo = bootcamp.registerStudent(student);
const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny"));
if ( attemptOne && !attemptTwo && !attemptThree) {
    console.log("TASK 3: PASS");
}
};

runTest(reactBootcamp, testStudent);