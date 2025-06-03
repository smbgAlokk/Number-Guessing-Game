const course = {
  courseNmae: "JS in Hindi",
  price: "999",
  courseInstructor: "Alok",
};

// course.courseInstructor

// Distructuring
const { courseInstructor } = course;
console.log(courseInstructor); // Alok

const { price: $ } = course;
console.log($); // 999
