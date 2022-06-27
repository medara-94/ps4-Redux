import React, { useState } from "react";

const CoursesPage = () => {
  const [course, setCourse] = useState({ course: { title: "" } });

  const handleChange = (e) => {
    const course2 = { ...course, title: e.target.value };
    setCourse(course2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(course.title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Courses</h2>
      <h3>Add Course</h3>
      <input type="text" onChange={handleChange} value={course.title} />
      <input type="submit" value="Save" />
    </form>
  );
};

export default CoursesPage;
