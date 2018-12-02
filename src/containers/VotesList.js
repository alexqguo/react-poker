import { connect } from 'react-redux';
import VotesListComponent from '../components/VotesList';

export const VotesList = connect(state => ({
  votes: state.messages
}), {})(VotesListComponent);
