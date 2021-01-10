import React from 'react';
import classes from './Map.module.scss';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import LoaderContainer from '../Loader/LoaderContainer';

const MyMap = (props) => {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
  };

  return (
    <div className={classes.container}>
      <Map
        containerStyle={containerStyle}
        google={props.google}
        defaultCenter={props.mymap.mapCenter}
        defaultZoom={props.mymap.mapZoom}
        styles={props.mymap.mapStyle}
      >
        <Marker title="Indiega" icon={props.mymap.icon} />
      </Map>
    </div>
  );
};

const Loading = (props) => <LoaderContainer />;

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDyjNJJI9xzHvd7Ud79BYZhF86KMt3BvE8',
  LoadingContainer: Loading,
})(MyMap);
