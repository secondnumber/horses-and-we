import React from 'react';
import classes from './Map.module.scss';
import { GoogleApiWrapper, IMapProps, IProvidedProps, Map, Marker } from 'google-maps-react';
import LoaderContainer from '../Loader';

interface Props extends IProvidedProps {
  icon: string;
  mapCenter: any;
  mapZoom: number;
  mapStyle: any;
}

const MyMap: React.ComponentType<Props> = ({ icon, mapCenter, mapZoom, mapStyle }) => {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
  };

  return (
    <div className={classes.container}>
      <Map
        containerStyle={containerStyle}
        google={google}
        //defaultCenter={mapCenter}
        //defaultZoom={mapZoom}
        styles={mapStyle}
      >
        <Marker title="Indiega" icon={icon} />
      </Map>
    </div>
  );
};

const Loading = () => <LoaderContainer />;

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDyjNJJI9xzHvd7Ud79BYZhF86KMt3BvE8',
  LoadingContainer: Loading,
})(MyMap);
