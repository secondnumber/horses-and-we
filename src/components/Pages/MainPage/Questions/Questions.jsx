import React from 'react';
import classes from './Questions.module.scss';
import Question from './Question/Question';

const Questions = (props) => {
  let questionsList = props.questions.questionsList.map((question) => (
    <Question
      id={question.id}
      question={question.question}
      answer={question.answer}
    />
  ));

  return (
    <div className={classes.wrapper}>
      <div className={classes.headers}>
        <h2 className={classes.title}>Frequently Asked Questions</h2>
        <h2 className={classes.subtitle}>you should know this</h2>
      </div>
      <p className={classes.caption}>
        Corned beef ham frankfurter cow, strip steak shoulder doner flank. Pork
        chop spare ribs pork ball tip. Prosciutto jowl meatball shank
      </p>
      <div className={classes.block}>{questionsList}</div>
    </div>
  );
};

export default Questions;
