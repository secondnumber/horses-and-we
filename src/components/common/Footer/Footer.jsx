import React from 'react';
import classes from './Footer.module.scss';
import Social from '../SocialList/Social';
import FooterNav from './FooterNav/FooterNav';

const Footer = (props) => {
  let socialList = props.social.socialList.map((item) => (
    <Social key={item.id} icon={item.icon} link={item.link} />
  ));
  let navMenu = props.navigation.navMenuItems.map((item) => (
    <FooterNav key={item.id} menuItem={item.menuItem} menuLink={item.menuLink} />
  ));

  return (
    <div className={classes.wrapper}>
      <div className={classes.filter}>
        <div className={classes.block}>
          <div className={classes.logo}>
            <img src={props.navigation.logo} alt={'Logo'} />
          </div>
          <div>
            <ul className={classes.list}>{navMenu}</ul>
            <p className={classes.description}>
              {props.navigation.description}
            </p>
            <ul className={classes.list}>{socialList}</ul>
          </div>
        </div>
        <p className={classes.copyright}>
          <span>© Copyright 2018 </span>
          <span>All Rights Reserved</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
