import React from 'react';
import { CrumbsType } from '../../../redux/reducers/breadcrumbsReducer';
import classes from './Breadcrumbs.module.scss';
import Crumb from './Crumb';

type Props = {
  crumbsList: Array<CrumbsType>;
  title: string;
};

const Breadcrumbs: React.FC<Props> = ({ crumbsList, title }) => {
  const breadcrumbsList = crumbsList.map((element: CrumbsType) => (
    <Crumb key={element.id} name={element.name} link={element.link} separator={element.separator} />
  ));
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>{title}</h2>
      <ul className={classes.list}>{breadcrumbsList}</ul>
    </div>
  );
};

export default Breadcrumbs;
