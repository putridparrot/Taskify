import React from 'react';
import './App.css';

import Shell from "./Components/Shell";
import Container from "./Components/Container";
import { makeStyles, Theme, createStyles, Toolbar } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Shell>
       {/* <main className={classes.content}>
          <Toolbar />
          <Container/>       
        </main>*/}
      </Shell>
    </div>
  );
}

export default App;




