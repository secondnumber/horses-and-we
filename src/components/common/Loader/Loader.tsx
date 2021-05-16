import React from 'react';
import classes from './Loader.module.scss';

type Props = {
  icon: string;
};

const Loader: React.FC<Props> = ({ icon }) => (
  <div className={classes.loader}>
    <img className={classes.image} src={icon} alt="" />
  </div>
);

export default Loader;
