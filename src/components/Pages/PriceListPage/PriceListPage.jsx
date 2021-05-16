import React from 'react';
import classes from './PriceListPage.module.scss';
import HeaderContainer from '../../common/Header';
import BreadcrumbsContainer from '../../common/Breadcrumbs';
import FooterContainer from '../../common/Footer';
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
