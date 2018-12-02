import React, { Component } from 'react';
import { UsersList } from './containers/UsersList';
import { VotesList } from './containers/VotesList';
import { CreateVote } from './containers/CreateVote';

import './App.css';

class App extends Component {
  render() {
    return (
      <div id="container">
        <UsersList />

        <section id="main">
          <VotesList />
          <CreateVote />
        </section>
      </div>
    );
  }
}

export default App;
