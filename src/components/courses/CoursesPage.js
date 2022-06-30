import React, { useState } from "react";
import { connect } from "react-redux";
import * as courseAction from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

const CoursesPage = (props) => {
  const [course, setCourse] = useState({ course: { title: "" } });

  const handleChange = (e) => {
    const course2 = { ...course, title: e.target.value };
    setCourse(course2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.actions.createCourse(course);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Courses</h2>
      <h3>Add Course</h3>
      <input type="text" onChange={handleChange} value={course.title} />
      <input type="submit" value="Save" />
      {props.courses.map((course) => (
        <div key={course.title}>{course.title}</div>
      ))}
    </form>
  );
};

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

//This func determines what state is passed to our component via props
function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses,
  };
}

// This let us declare what actions to pass to our component on props
// When omited our component gets a dispatch prop injected automatically, so it passes automatically dispatch

/*
function EsempiomapDispatchToPropsAsFunction(dispatch) {
  return {
    // createCourse: (course) => dispatch(courseAction.createCourse(course)),  // Modo esteso
    actions: bindActionCreators(courseAction, dispatch),
  };
}
//Esempio come oggetto, when declared as an obj, each property is automatically bound to dispatch
const EsempiomapDispatchToPropsAsObj = {
  createCourse: courseAction.createCourse,
}; */

function mapDispatchToProps(dispatch) {
  return {
    // createCourse: (course) => dispatch(courseAction.createCourse(course)),  // Modo esteso
    actions: bindActionCreators(courseAction, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
