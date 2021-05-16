import React from 'react';
import { connect } from 'react-redux';
import Loader from './Loader';
import { AppStateType } from '../../../redux/store';

type MapStatePropsType = {
  icon: string;
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    icon: state.common.loaderIcon,
  };
};

const LoaderContainer = connect(mapStateToProps)(Loader);

export default LoaderContainer;
