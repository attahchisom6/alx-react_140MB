/*
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow, mount } from "enzyme";
import App from "./App.js";
import { Notifications } from "../Notifications/Notifications";
import Header from '../Header/Header';
import  Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(()  => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Test the components of our react app", () => {
  it("test that App renders without crashing", () => {
    const component = shallow(<App />);
    expect(component).toBeDefined();
  });

  it('test if our app renders a Notification component', () => {
    const component = shallow(<App />);
    expect(component.find("Notifications").exists()).toBe(true);
  });

  it('verify if our app renders a Header component', () => {
    const component = shallow(<App />);
    expect(component.find("Header").exists()).toBe(true);
  });

  it("verify if the App render a Login component, but not a courseList", () => {
    const component = shallow(<App isLoggedIn={false}/>);
    expect(component.contains(<Login />)).toBe(true);
    expect(component.contains(<CourseList />)).toBe(false);
  });

  it("verifies that the App renders a CourseList component but not a Login component", () => {
    const component = shallow(<App isLoggedIn={ true } />);
    expect(component.find("CourseList").exists()).toBe(true);
    expect(component.find("Login").exists()).toBe(false);
  });

  it("verify if the App renders a footer component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Footer />)).toBe(true);
  });

});

describe('when ctrl + h is pressed', () => {
  it('test that the logOut function is called', () => {
    const mockedFn = jest.fn();
    const component = mount(<App logOut={ mockedFn } />);
    const event = new KeyboardEvent('keydown', {
      ctrlKey: true,
      key: "h",
    });
    document.dispatchEvent(event);
    expect(component.exists()).toBe(true);
    expect(mockedFn).toHaveBeenCalled();
    component.unmount();
  });

  document.alert = jest.fn();
  it("verify that alert is called", () => {
    const component = mount(<App />)
    const spy = jest.spyOn(window, "alert");
    const event = new KeyboardEvent("keydown", {
      ctrlKey: true,
      key: "h",
    });
    document.dispatchEvent(event);
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
    component.unmount();
  });

  it("verifies that alert is called with message 'Logging you out'", () => {
    const component = mount(<App />);
    const spy = jest.spyOn(window, 'alert');
    const event = new KeyboardEvent("keydown", {
      ctrlKey: true,
      key: "h",
    });
    document.dispatchEvent(event);
    expect(spy).toHaveBeenCalledWith("Logging you out");
    jest.restoreAllMocks();
    component.unmount();
  });
  document.alert.mockClear();
})
 
