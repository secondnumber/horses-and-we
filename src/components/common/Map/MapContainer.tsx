import React from 'react';
import { connect } from 'react-redux';
import MyMap from './Map';
import { AppStateType } from '../../../redux/store';
import { IMapProps, IProvidedProps } from 'google-maps-react';

interface MapStatePropsType {
  icon: string;
  mapCenter: any;
  mapZoom: number;
  mapStyle: any;
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    icon: state.map.icon,
    mapCenter: state.map.mapCenter,
    mapZoom: state.map.mapZoom,
    mapStyle: state.map.mapStyle,
  };
};

const MapContainer = connect(mapStateToProps, null)(MyMap);

export default MapContainer;
