import React from 'react';
import { connect } from 'react-redux';
import Footer from './Footer';
import { NavMenuType } from '../../../redux/reducers/navigationReducer';
import { SocialType } from '../../../redux/reducers/socialReducer';
import { AppStateType } from '../../../redux/store';

type MapStatePropsType = {
  logo: string;
  navMenuItems: Array<NavMenuType>;
  descriptionNav: string;
  socialListItems: Array<SocialType>;
  descriptionSocial: string;
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    logo: state.navigation.logo,
    navMenuItems: state.navigation.navMenuItems,
    descriptionNav: state.navigation.description,
    socialListItems: state.social.socialList,
    descriptionSocial: state.social.description,
  };
};

const FooterContainer = connect(mapStateToProps)(Footer);

export default FooterContainer;
