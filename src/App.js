import React from "react";
import logo from "./logo.svg";
import "./App.css";

import io from "socket.io-client";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
// import { Socket } from "net";
const serverPORT = 3001;

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "block"
  }
}));

let socket;
function App() {
  const classes = useStyles();
  if (!socket) {
    console.log("initializing socket.io from client");
    socket = io(`:${serverPORT}`);
  }

  return (
    <Button variant="contained" className={classes.button}>
      Default
    </Button>
  );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
