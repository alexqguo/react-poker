import React, { Component } from 'react';
import { UsersList } from './containers/UsersList';
import { MessagesList } from './containers/MessagesList';
import { CreateVote } from './containers/CreateVote';

import './App.css';

class App extends Component {
  render() {
    return (
      <div id="container">
        <UsersList />

        <section id="main">
          <MessagesList />
          <CreateVote />
        </section>
      </div>
    );
  }
}

export default App;
