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
const passedStudents = students.filter((student) => student.score > 70);
  console.log(passedStudents.map((student) => student.name)); 