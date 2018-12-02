import React from 'react';
import PropTypes from 'prop-types';

const CreateVote = (props) => {
  let input;

  return (
    <section id="create-vote">
      <input
        onKeyPress={(e) => {
        if (e.key === 'Enter') {
          props.dispatch(input.value, 'Me')
          input.value = ''
        }
      }}
        type="text"
        ref={(node) => {
        input = node
      }}
      />
    </section>
  );
}

CreateVote.propTypes = {
  dispatch: PropTypes.func.isRequired
};


export default CreateVote;
