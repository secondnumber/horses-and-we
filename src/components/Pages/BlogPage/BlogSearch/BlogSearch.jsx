import React from 'react';
import classes from './BlogSearch.module.scss';
import Search from '../../../common/Search/Search';

const BlogSearch = (props) => {
  const submit = (values) => {
    console.log(values);
  };
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.header}>SEARCH ON WEBSITE</h2>
      <Search onSubmit={submit} />
    </div>
  );
};

export default BlogSearch;
