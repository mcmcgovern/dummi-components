// firebase.js
// contains the Firebase context and provider
import React, {
  createContext, //useEffect
} from "react";
import firebaseConfig from "./firebaseConfig";
import app from "firebase/app";
import "firebase/database";
//import { useDispatch } from "react-redux"; // this needs to be flux not redux
//import { todoActions } from "../state/todos";
// we create a React Context, for this to be accessible
// from a component later
const FirebaseContext = createContext(null);
export { FirebaseContext };
export default ({ children }) => {
  let firebase = {
    app: null,
    database: null,
  };
  //const dispatch = useDispatch();
  // check if firebase app has been initialized previously
  // if not, initialize with the config we saved earlier
  if (!app.apps.length) {
    app.initializeApp(firebaseConfig);
    firebase = {
      app: app,
      database: app.database(),
      api: {
        // api appears to have a function for each table that is to be retrieved from firebase and made accessible through the rest of the app
        getTodos, // getUsers?
      },
    };
  }
  // function to query Todos from the database and
  // fire a Redux action to update the items in real-time
  function getTodos() {
    firebase.database.ref("todos").on("value", (snapshot) => {
      // replace todos with users, or whichever table name
      const vals = snapshot.val();
      let _records = [];
      for (var key in vals) {
        _records.push({
          ...vals[key],
          id: key,
        });
      }
      // setTodos is a Redux action that would update the todo store
      // to the _records payload
      //dispatch(setTodos(_records));    commented to increase visibility of current errors (if any)
    });
  }
  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  );
};
