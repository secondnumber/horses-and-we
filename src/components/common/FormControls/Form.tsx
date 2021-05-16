import React from 'react';
import classes from './Form.module.scss';

type Props = {
  input?: React.FC;
  meta?: any;
};

export const Form: React.FC<Props> = ({ meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
      {props.children}
      {hasError && <span className={classes.error}>{meta.error}</span>}
    </div>
  );
};

export const Textarea: React.FC<Props> = (props) => {
  const { input, ...restProps } = props;
  return (
    <Form {...props}>
      <textarea {...input} {...restProps} />
    </Form>
  );
};

export const Input: React.FC<Props> = (props) => {
  const { input, ...restProps } = props;
  return (
    <Form {...props}>
      <input {...input} {...restProps} />
    </Form>
  );
};
