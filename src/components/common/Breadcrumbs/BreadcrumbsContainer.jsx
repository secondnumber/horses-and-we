import React from 'react';
import { connect } from 'react-redux';
import Breadcrumbs from './Breadcrumbs';

let mapStateToProps = (state) => {
  return {
    breadcrumbs: state.breadcrumbs,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const BreadcrumbsContainer = connect(mapStateToProps)(Breadcrumbs);

export default BreadcrumbsContainer;
