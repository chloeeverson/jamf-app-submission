import { HashRouter as Router, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import './App.css';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar'
import Login from '../Login/Login';
import Group from '../Group/Group';
import Submit from '../Submit/Submit';


//overrides MUI preset styling
const theme = createTheme({
  overrides: {
    // makes buttons rounded
    MuiButton: {
      root: {
        borderRadius: 20,
      },
    },
  },
  // changes preset colors used for buttons, etc.
  palette: {
    secondary: {
      main: '#0A88F1'
    },
    primary: {
      main: '#E6ECF2'
    }
  }
})


function App() {
  //create variables for local states
  //used to signify when a section is complete to pass off 
  //to the top nav bar for design change
  const [completeOneMode, setCompleteOneMode] = useState(false);
  const [completeTwoMode, setCompleteTwoMode] = useState(false);
  //grab login store for complete update
  const complete1 = useSelector(store => store.login);
 //grab group store for complete update
  const complete2 = useSelector(store => store.group);

  //on page render call functions
  useEffect(() => {
    console.log('in use effect on render');
    console.log('complete one', completeOneMode)
    console.log('complete two', completeTwoMode)
    checkOne()
    checkTwo()
  });

  //when said local states have changed - make change effective immediately
  useEffect(() => {
    console.log('in use effect for complete state changes');
  }, [completeOneMode, completeTwoMode]);

  //change local state based on value from incoming store
  function checkOne() {
    console.log('in check one function');
    if (complete1.complete === true) {
      setCompleteOneMode(true)
    }
    else {
      setCompleteOneMode(false)
    }
  }

  //change local state based on value from incoming store
  function checkTwo() {
    if (complete2.complete === true && complete2.complete === true) {
      setCompleteTwoMode(true)
    }
    else {
      setCompleteTwoMode(false)
    }
  }


  return (
    
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <NavBar one={completeOneMode} two={completeTwoMode} />
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/group" exact>
          <Group />
        </Route>
        <Route path="/submit" exact>
          <Submit />
        </Route>
      </Router>
      <img style={{ minWidth: '200px', maxWidth: '250px', display: 'block', position: 'fixed', width: '20%', left: '-40px', bottom: '-10px' }} src="images/app-icon.png" />
    </ThemeProvider>
  );
}

export default App;
