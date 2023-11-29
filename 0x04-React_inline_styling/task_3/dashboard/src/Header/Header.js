import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from "aphrodite";

const Header = () => {
  return (
    <div className={ css(styles.Header) }>
      <img src={ logo } alt="Holberton" className={ css(styles.HeaderIMG) } />
      <h1>School dashboard</h1>
    </div>
  );
}

const styles = StyleSheet.create({
  Header: {
    display: "flex",
    alignItems: "center",
    padding: "1.4rem",
    paddingTop: "200px",
    color: "red",
    borderBottom: "4px solid red",
    /*"@media (max-width: 400px)": {
      visibility: "hidden",
    },*/
  },

  HeaderIMG: {
    width: "250px",
    height: "250px",
    "@media (max-width: 400px)": {
      maxWidth: "50%",
      height: "50%",
      backgroundSize: "cover",
    },
  },
});

export default Header;
