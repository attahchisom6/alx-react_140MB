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
        {
          listCourses ? (
            listCourses.forEach((row) => {
              <CourseListRow key={ row.id } textFirstCell={ row.name } textSecondCell={ row.credit } />
            })
          ) :(
            <CourseListRow textFirstCell='No course available yet' />
          )
        }
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropType.arrayOf(CourseShape);
}

CourseList.defaultProps = {
  listCourses: [],
}

export default CourseList;
