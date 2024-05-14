import React from 'react';
import UseRefHook from './Components/UseRef/UseRefHook';
import UseReducerHook from './Components/UseReducer/UseReducerHook';
import CompA from './Components/UseRef/CompA';

import './App.css';

const App = () => {
  return (
    <div>
      {/* <h1>App Component</h1>
      <CompA />

      <UseRefHook /> */}

      <h1>Counter Task</h1>
      <UseReducerHook />
    </div>
  );
};

export default App;