import React from 'react';
import classes from './Breadcrumbs.module.scss';
import Crumb from './Crumb/Crumb';

const Breadcrumbs = (props) => {
  let crumbsList = props.breadcrumbs.crumbsList.map((element) => (
    <Crumb key={element.id} name={element.name} link={element.link} separator={element.separator} />
  ));
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>{props.breadcrumbs.title}</h2>
      <ul className={classes.list}>{crumbsList}</ul>
    </div>
  );
};

export default Breadcrumbs;
