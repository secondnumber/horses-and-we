import React from 'react';
import classes from './NotFoundPage.module.scss';
import HeaderContainer from '../../common/Header/HeaderContainer';
import FooterContainer from '../../common/Footer/FooterContainer';
import NotFound from './NotFound/NotFound';

const NotFoundPage = (props) => {
  return (
    <div className={classes.wrapper}>
      <HeaderContainer />
      <NotFound />
      <FooterContainer />
    </div>
  );
};
export default NotFoundPage;
