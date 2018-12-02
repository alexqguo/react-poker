import { connect } from 'react-redux';
import CreateVoteComponent from '../components/CreateVote';
import { addMessage } from '../actions';

const mapDispatchToProps = dispatch => ({
  dispatch: (message, author) => {
    dispatch(addMessage(message, author));
  }
});

export const CreateVote = connect(() => ({}), mapDispatchToProps)(CreateVoteComponent);
