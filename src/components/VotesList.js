import React from 'react';
import PropTypes from 'prop-types';

import Vote from './Vote';

const VotesList = ({ votes }) => (
  <section id="votes-list">
    <ul>
      {votes.map(message => (
        <Vote key={message.id}
          {...message}
        />
      ))}
    </ul>
  </section>
);

VotesList.propTypes = {
  votes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default VotesList;
