import React from  'react';
import { shallow , mount } from 'enzyme';
import { Notifications } from './Notifications';
import NotificationItem from './NotificationItem';
import utils from '../utils/utils';
const { getLatestNotification } = utils;

const listNotifications = [
  {id: 1, type: "default", value: "1st Notification"},
  {id: 2, type: "urgent", value: "2nd Notification"},
  {id: 3, type: "urgent", html: getLatestNotification()},
]

describe('Test the Notification component', () => {
  it("Test that Notifications render without crashing", () => {
    const component = shallow(<Notifications />);
    expect(component).toBeDefined();
  });
  
  it("test if Notification renders ul", () => {
    const component = shallow(<Notifications />);
    expect(component.find("ul")).toBeDefined();
  });

  it("verify that Notifications render 1 list items when displayDrawer is true and no array is passed", () => {
    const component = shallow(<Notifications displayDrawer={ true } />);
    expect(component.find("NotificationItem")).toHaveLength(1);
  });

  it("verify that Notifications render 3 list items when displayDrawer is true and an array is passed", () => {
    const component = shallow(<Notifications displayDrawer={ true } listNotifications={ listNotifications } />);
    expect(component.find("NotificationItem")).toHaveLength(3);
  });

  it("verify that Notifications renders the text 'Here is the list of notifications' wen displayDrawer is true", () => {
    const component = shallow(<Notifications displayDrawer={ true } />);
    expect(component.find("p").at(1).text()).toEqual("Here is the list of notifications");
  });

  it("verifies that the menuItem is being displayed when displayDrawer is false", () => {
    const component = shallow(<Notifications displayDrawer={ false } />);
    expect(component.find("div.menuItem").exists()).toBe(true);
    expect(component.find("div.menuItem").html()).toEqual('<div class="menuItem"><p>Your notifications</p></div>');
  });

  it("verifies that the div.Notifications is not being displayed wen the displayDrawer is false", () => {
    const component = shallow(<Notifications displayDrawer={ false } />);
    expect(component.find("div.Notifications").exists()).toBe(false);
  });

  it("verifies that menuItem is being displayed when displayDrawer is true", () => {
    const component = shallow(<Notifications displayDrawer={ true } />);
    expect(component.find("div.menuItem").exists()).toBe(true);
    expect(component.find("div.menuItem").html()).toEqual('<div class="menuItem"><p>Your notifications</p></div>');
  });

  it("verifies that the div.Notifications is being displayed wen the displayDrawer is true", () => {
    const component = shallow(<Notifications displayDrawer={ true } />);
    expect(component.find("div.Notifications").exists()).toBe(true);
  });

  it("verifies that notifications renders correctly, if an empty array is passed", () => {
    const component = shallow(<Notifications displayDrawer={ true } listCourses={ [] } />);
    expect(component.find("NotificationItem").dive().text()).toEqual("No new notification for now");
  });

  it("verifies that notifications renders correctly, if no listCourses array is passed", () => {
    const component = shallow(<Notifications displayDrawer={ true } />);
    expect(component.find("NotificationItem").dive().html()).toEqual('<li data-notification-type="urgent">No new notification for now</li>');
  });

  it("verify that when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem", () => {
    const component = shallow(<Notifications displayDrawer={ true } listNotifications={ listNotifications } />);
    expect(component.find("NotificationItem")).toHaveLength(3);
    expect(component.find("NotificationItem").at(0).html()).toEqual('<li data-notification-type="default">1st Notification</li>');
    expect(component.find("NotificationItem").at(1).html()).toEqual('<li data-notification-type="urgent">2nd Notification</li>');
    expect(component.find("NotificationItem").at(2).html()).toEqual('<li data-urgent="true"><strong>Urgent requirement</strong> - complete by EOD</li>');
  });

});


describe("Mock the Nofications component and check if its functionalies return predictable results", () => {
  const mockMarkAsRead = jest.fn();
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  const component = shallow(
    <Notifications displayDrawer={ true } listNotifications={ [] } markAsRead={ mockMarkAsRead } />

    // let simulate a click (which we is an instance of the component since markAsRead is triggered wach time the button is clicked)
    component.instance().markAsRead(5);
    expect(mockMarkAsRead).toHaveBeenCalledWith(5);
    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith("Notification 5 has been marked as read");
