import React from 'react';
import PropTypes from 'prop-types';

import Vote from './Vote';

const MessagesList = ({ messages }) => (
  <section id="votes-list">
    <ul>
      {messages.map(message => (
        <Vote key={message.id}
          {...message}
        />
      ))}
    </ul>
  </section>
);

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default MessagesList;
