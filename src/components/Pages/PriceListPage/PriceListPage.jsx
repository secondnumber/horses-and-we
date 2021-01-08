import React from 'react';
import classes from './PriceListPage.module.scss';
import HeaderContainer from '../../common/Header/HeaderContainer';
import BreadcrumbsContainer from '../../common/Breadcrumbs/BreadcrumbsContainer';
import FooterContainer from '../../common/Footer/FooterContainer';
import PriceListContainer from '../../common/PriceList/PriceListContainer';

const PriceListPage = (props) => {
  return (
    <div>
      <HeaderContainer />
      <BreadcrumbsContainer />
      <PriceListContainer />
      <FooterContainer />
    </div>
  );
};

export default PriceListPage;
