import React from 'react';
import classes from './Footer.module.scss';
import Social from '../SocialList/Social';
import FooterNav from './FooterNav/FooterNav';
import { NavMenuType } from '../../../redux/reducers/navigationReducer';
import { SocialType } from '../../../redux/reducers/socialReducer';

type Props = {
  logo: string;
  navMenuItems: Array<NavMenuType>;
  descriptionNav: string;
  socialListItems: Array<SocialType>;
  descriptionSocial: string;
};

const Footer: React.FC<Props> = ({ logo, navMenuItems, descriptionNav, socialListItems, descriptionSocial }) => {
  const socialList = socialListItems.map((item: SocialType) => (
    <Social key={item.id} icon={item.icon} link={item.link} />
  ));
  const navMenu = navMenuItems.map((item: NavMenuType) => (
    <FooterNav key={item.id} menuItem={item.menuItem} menuLink={item.menuLink} />
  ));

  return (
    <div className={classes.wrapper}>
      <div className={classes.filter}>
        <div className={classes.block}>
          <div className={classes.logo}>
            <img src={logo} alt={'Logo'} />
          </div>
          <div>
            <ul className={classes.list}>{navMenu}</ul>
            <p className={classes.description}>{descriptionNav}</p>
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
