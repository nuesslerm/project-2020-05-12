import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

const HomePage = () => {
  return (
    <div>
      <h1>HOME PAGE</h1>
    </div>
  );
};

const TopicList = () => {
  return (
    <div>
      <h1>TOPIC LIST PAGE</h1>
    </div>
  );
};

const TopicDetail = () => {
  return (
    <div>
      <h1>TOPIC DETAIL PAGE</h1>
    </div>
  );
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <p>Hello World</p>
      </div>
    );
  }
}

export default App;
