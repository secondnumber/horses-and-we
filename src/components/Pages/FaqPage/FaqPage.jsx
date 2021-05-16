import React from 'react';
import HeaderContainer from '../../common/Header';
import BreadcrumbsContainer from '../../common/Breadcrumbs';
import FooterContainer from '../../common/Footer';
import classes from './FaqPage.module.scss';
import FormFaq from '../../common/FormFaq/FormFaq';
import Questions from './Question/Question';

const FaqPage = (props) => {
  const submit = (values) => {
    console.log(values);
  };
  let questionsBlock = props.faq.questionsList.map((el) => <Questions key={el.id} title={el.title} list={el.list} />);
  return (
    <div>
      <HeaderContainer />
      <BreadcrumbsContainer />
      <div className={classes.wrapper}>
        <div className={classes.block}>
          <div className={classes.questions}>{questionsBlock}</div>
          <div className={classes.form}>
            <h2 className={classes.title}>ASK ANY QUESTION</h2>
            <FormFaq onSubmit={submit} />
          </div>
        </div>
      </div>
      <FooterContainer />
    </div>
  );
};

export default FaqPage;
