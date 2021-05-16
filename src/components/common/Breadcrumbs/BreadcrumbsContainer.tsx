import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/store';
import Breadcrumbs from './Breadcrumbs';
import { CrumbsType } from '../../../redux/reducers/breadcrumbsReducer';

type MapStatePropsType = {
  crumbsList: Array<CrumbsType>;
  title: string;
};
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    crumbsList: state.breadcrumbs.crumbsList,
    title: state.breadcrumbs.title,
  };
};

const BreadcrumbsContainer = connect(mapStateToProps)(Breadcrumbs);

export default BreadcrumbsContainer;
