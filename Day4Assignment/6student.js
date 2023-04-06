class Student {
    constructor(name, score) {
      this.name = name;
      this.score = score;
    }
  }
  
const students = [
    new Student("Odelu", 75),
    new Student("shashikanth", 82),
    new Student("kousiii", 90),
    new Student("Ranjini",99)];
const highestScore = Math.max(...students.map((student) => student.score));
const topStudents = students.filter((student) => student.score === highestScore);
console.log(topStudents.map((student) => student.name)); 
