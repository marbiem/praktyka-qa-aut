// "Normalna" deklaracja funkcji
function classicAdd(a, b, c) {
  return a + b + c;
}

// To samo w postaci arrow function
const arrowAdd1 = (a, b, c) => {
  return a + b + c;
};

// To samo w postaci arrow function
const arrowAdd2 = (a, b, c) => a + b + c;

function studentsMap() {
  const students = [
    { name: "Mango", score: 83 },
    { name: "Poly", score: 59 },
    { name: "Ajax", score: 37 },
    { name: "Kiwi", score: 94 },
    { name: "Houston", score: 64 },
  ];

  const names = students.map((student) => student.name);
  //console.log(names);
  return names;
}

function studentsFlatMap() {
  const students = [
    { name: "Mango", courses: ["matematyka", "fizyka"] },
    { name: "Poly", courses: ["informatyka", "matematyka"] },
    { name: "Kiwi", courses: ["fizyka", "biologia"] },
  ];

  const allCourses = students.flatMap((student) => student.courses);

  const uniqueCourses = allCourses.filter(
    (course, index, array) => array.indexOf(course) === index
  );

  return uniqueCourses;
}

class User {
  // Opcjonalna deklaracja właściwości publicznych
  name;
  // Obowiązkowa deklaracja właściwości prywatnych
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  getEmail() {
    return this.#email;
  }

  changeEmail(newEmail) {
    this.#email = newEmail;
  }
}

const mango = new User({
  name: "Mango",
  email: "mango@mail.com",
});

mango.changeEmail("mango@supermail.com");
console.log(mango.getEmail());
