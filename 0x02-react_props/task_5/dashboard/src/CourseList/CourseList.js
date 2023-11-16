import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';

const CourseList = ({ listCourses }) => {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={ true } />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={ true } />
      </thead>
      <tbody>
        <CourseListRow textFirstCell="ES6" textSecondCell="60" isHeader={ false } />
        <CourseListRow textFirstCell="Webpack" textSecondCell="20" isHeader={ false } />
        <CourseListRow textFirstCell="React" textSecondCell="40" isHeader={ false } />
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropType.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    credit: PropTypes.number.isRequired,
  });
}

CourseList.defaultProps = {
  listCourses: [],
}

export default CourseList;
