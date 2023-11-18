import React from 'react';
import './App.css';
import utils from '../utils/utils.js';
const { getFullYear, getFooterCopy, getLatestNotification } = utils;
import { Notifications } from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';

const listCourses = [
  {
    id: 1,
    name: "ES6",
     credit: 60,
  },
  {
    id: 2,
    name: "Webpack",
    credit: 20,
  },
  {
    id: 3,
    name: "React",
    credit: 40,
  },
]

const listNotifications = [
  {
    id: 1,
    type: "default",
    value: "New course available",
  },
  {
    id: 2,
    type: "urgent",
    value: "New resume available",
  },
  {
    id: 3,
    type: "urgent",
    html: getLatestNotification(),
  },
]

const App = ({ isLoggedIn }) => {
  return (
    <React.Fragment>
      <Notifications listNotifications={ listNotifications } />
      <div className="App">
        <Header />
        { isLoggedIn ? <CourseList listCourses={ listCourses } /> : <Login /> }
        <Footer />
      </div>
    </React.Fragment>
  );
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
}

App.defaultProps = {
  isLoggedIn: false,
}

export default App;
