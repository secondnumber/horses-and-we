import React from 'react';
import classes from './BlogNewsletter.module.scss';
import FormSubscribe from '../../../common/Subscribe/FormSubscribe/FormSubscribe';

const BlogNewsletter = (props) => {
  const submit = (values) => {
    console.log(values);
  };
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.header}>SIGN UP NEWSLETTER</h2>
      <div className={classes.block}>
        <FormSubscribe onSubmit={submit} />
      </div>
      <p>Subscribe to our Newsletter right now to be updated. We promice not to spam!</p>
    </div>
  );
};

export default BlogNewsletter;
