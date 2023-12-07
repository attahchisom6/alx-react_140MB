import React, { useContext } from 'react';
import logo from '../assets/holberton-logo.jpg';
import utils from '../utils/utils.js';
import { css, StyleSheet } from "aphrodite";
import { AppContext } from './App/AppContext'

const { getFullYear, getFooterCopy } = utils;
const { user } = useContext(AppContext)

const Footer = () => {
  return (
    <>
      <div className={ css(styles.Footer) }>
        <p>Copyright { getFullYear() } - { getFooterCopy(true) }</p>
      </div>
      {user.isLoggedIn && (
        <a href="#">Contact us</a>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  Footer: {
    fontSize: "1.4rem",
    fontStyle: "italic",
    padding: "2em",
    alignItems: "center",
    borderTop: "4px solid red",
  }
});

export default Footer;
