import React from 'react';
import TodoApp from './TodoApp';
import useStyles from '../styles/AppStyles';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <header className={classes.header}>
        <h1>
          todo<span>list</span>
        </h1>
        <h2>todolist app built with Context from the challenge LarnU</h2>
      </header>
      <TodoApp />
      <a
        href="https://github.com/Ellisvelandia"
        className={classes.link} target="_blank"
      >
        <strong>EllisVelandia&copy;2022</strong>
      </a>
    </div>
  );
}

export default App;
