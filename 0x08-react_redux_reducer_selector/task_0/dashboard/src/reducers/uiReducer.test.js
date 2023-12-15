/*
 * @jest-environment jsdom
 */

import {
  unSelectCourse,
  selectCourse,
} from "../actions/courseActionCreators";
import disp from "../actions/uiActionCreators";
import reduxState from "./uiReducer";

const { displayNotificationDrawer } = disp;
const { initialState } = reduxState;

describe("it tests our uiReducer", () => {
  const uiReducerSpy = jest.spyOn(reduxState, "uiReducer");
  let state

  beforeEach(() => {
    state = initialState;
  });

  afterEach(() => {
    uiReducerSpy.mockRestore();
  });

  it("verifies that when no action is passed, the stata returned is the initial state", () => {
    const newState = uiReducerSpy(state, {});
    expect(uiReducerSpy).toHaveBeenCalledTimes(1);
    expect(uiReducerSpy).toHaveBeenCalledWith(initialState, {});
    expect(newState).toEqual(initialState);
  });

  it("verifies that uiReducer returns initial with the action type SELECT_COURSR", () => {
    const action = selectCourse(3);
    const newState = uiReducerSpy(state, action);

    expect(uiReducerSpy).toHaveBeenCalled();
    expect(uiReducerSpy).toHaveBeenCalledWith(initialState);
    expect(newState).toEqual(initialState);
  });

  it("verifies that uiReducer sets isNotificationDrawerVisible: to true with the action type DISPLAY_NOTIFICATION_DRAWER", () => {
    const action = displayNotificationDrawer();
    const newState = uiReducerSpy(state, action);

    expect(uiReducerSpy).toHaveBeenCalled();
    expect(uiReducerSpy).toHaveBeenCalledWith(initialState, action);
    expect(newState).toEqual({
      ...state,
      isNotificationDrawerVisible: true,
    });
    expect(newState.isNotificationDrawerVisible).toEqual(true);
  });
});
