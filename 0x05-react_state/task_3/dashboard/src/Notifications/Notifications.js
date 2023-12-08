import React from 'react';
import closeIcon from '../assets/close-icon.png';
import utils from '../utils/utils.js';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";

const { getLatestNotification } = utils;

export const Notifications = class Notifications extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
      markNotificationAsRead
    } = this.props;
    return (
      <React.Fragment>
        {
          displayDrawer ? (
            <>
              <div className={ css(styles.Notifications) } id="Notifications">
                <button
                  className={ css(styles.NotifButton) }
                  aria-label="Close"
	                onClick={() => handleHideDrawer() }>
	                  <img src={ closeIcon } style={{ width:"20px", height:"20px" }} alt="close"></img>
                </button>
                <p>Here is the list of notifications</p>
                <ul className={ css( styles.Ul) }>
                  {
                    listNotifications && listNotifications.length > 0 ? (
                      listNotifications.map(({ type, html, value, id }) => (
                        <NotificationItem
                          key={ id }
                          html={ html }
                          type={ type }
                          value={ value }
                          id={ id }
                          markAsRead={ markNotificationAsRead }
                        />
                      ))
                    ) : (
                      <NotificationItem type="urgent" value="No new notification for now" />
                    )
                  }
                </ul>
              </div>
            </>
          )
          :
          (
            <div className={ css(styles.menuItem) } id="menuItem" onClick={() => handleDisplayDrawer()}>
              <p>Your notifications</p>
            </div>  
          )
        }
      </React.Fragment>
    );
  }
}

const opacityFrameAnim = {
  "from": { opacity: 0.5 },
  "to": { opacity: 1.0 },
};

const bounceFrameAnim = {
  "0%": { transform: "translateY(0px)" },
  "33%": { transform: "translateY(-5px)" },
  "66%": { transform: "translateY(5px)" },
  "100%": { transform: "translateY(0px)" },
};

const styles = StyleSheet.create({
  Notifications: {
    backgroundColor: "white",
    border: "2px dashed red",
    fontFamily: "Arial, Heveltica, Sans-serif",
    top: "2.5em",
    right: "0",
    position: "absolute",
    "@media (max-width: 400px)": {
      position: "relative",
      display: "block",
      width: "100vw",
      height: "100vh",
      marginLeft: "auto",
      marginRight: "auto",
      paddingTop: "50px",
      border: "none",
      padding: "0",
      fontSize: "20px",
    },
  },

  menuItem: {
    textAlign: "right",
    backgroundColor: "#fff8f8",
    ":hover": {
      cursor: "pointer",
      animationName: [opacityFrameAnim, bounceFrameAnim],
      animationDuration: ["1s, 0.5s"],
      animationIterationCount: "3",
    },
  },

  '[data-notification-type="default"]': {
    color: "blue",
  },

  '[data-notification-type="urgent"]': {
    color: "red",
  },

  "notification-header": {
    display: "flex",
    justifyContent: "space-between",
  },

  "[data-urgent]": {
    color: "red",
  },

  Ul: {
    "@media (max-width: 400px)": {
      padding: "0",                           },
  },

  NotifButton: {
    color: "green",
                    id: "close",
    position: "absolute",
    background: "none",
    border: "none",
    top: "2px",
    right: "2px",
    fontWeight: "bold",
    fontSize: "15px",
    cursor: "pointer"
  },

});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
}
