import React from 'react';
import classes from './TeamPage.module.scss';
import HeaderContainer from '../../common/Header';
import BreadcrumbsContainer from '../../common/Breadcrumbs';
import FooterContainer from '../../common/Footer';
import Team from './Team/Team';

const TeamPage = (props) => {
  let teamList = props.teamPage.teamList.map((el) => (
    <Team key={el.id} id={el.id} name={el.name} image={el.image} rank={el.rank} social={el.social} />
  ));
  return (
    <div>
      <HeaderContainer />
      <BreadcrumbsContainer />
      <div className={classes.wrapper}>
        <ul className={classes.block}>{teamList}</ul>
      </div>
      <FooterContainer />
    </div>
  );
};

export default TeamPage;
