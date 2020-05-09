import dispatcher from "../appDispatcher";
import * as userApi from "../api/userApi"; // this line may directly call the firebase.js functions in the future
import actionTypes from "./actionTypes";

export function saveUser(user) {
  return userApi.saveUser(user).then((savedUser) => {
    // informs dispatcher that all relevant stores should be updated to add the new course
    dispatcher.dispatch({
      actionType: user.id ? actionTypes.UPDATE_USER : actionTypes.CREATE_USER,
      user: savedUser,
    });
  });
}

export function loadUsers() {
  return userApi.getUsers().then((users) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_USERS,
      users,
    });
  });
}

export function deleteUser(id) {
  return userApi.deleteUser(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_USER,
      id,
    });
  });
}
