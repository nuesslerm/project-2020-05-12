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

const TopicsList = () => {
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
        <Route exact path="/" component={HomePage} />
        <Route exact path="/topics" component={TopicsList} />
        <Route path="/topics/:topicId" component={TopicDetail} />
      </div>
    );
  }
}

export default App;
