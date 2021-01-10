import React from 'react';
import classes from './StatisticSearch.module.scss';

const StatisticSearch = (props) => {
  return (
    <form className={classes.form}>
      <input className={classes.input} type={'text'} name={'statisticSearch'} placeholder={'search here'} />
    </form>
  );
};

export default StatisticSearch;
