import React from 'react';
import { connect } from 'react-redux';
import MyMap from './Map';

let mapStateToProps = (state) => {
  return {
    mymap: state.map,
  };
};

const MapContainer = connect(mapStateToProps)(MyMap);

export default MapContainer;
