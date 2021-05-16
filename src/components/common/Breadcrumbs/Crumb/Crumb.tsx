import React from 'react';
import classes from './Crumb.module.scss';

type Props = {
  name: string;
  link: string;
  separator: string;
};

const Crumb: React.FC<Props> = ({ name, link, separator }) => (
  <li className={classes.linksItem}>
    <a className={classes.link} href={link}>
      {name}
    </a>
    <span className={classes.separator}>{separator}</span>
  </li>
);

export default Crumb;
