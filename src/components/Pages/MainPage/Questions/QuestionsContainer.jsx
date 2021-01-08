import React from 'react';
import { connect } from 'react-redux';
import Questions from './Questions';

let mapStateToProps = (state) => {
  return {
    questions: state.questions,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const QuestionsContainer = connect(mapStateToProps)(Questions);

export default QuestionsContainer;
