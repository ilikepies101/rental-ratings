import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
 
const containerStyle = {
  width: '400px',
  height: '400px'
};
 
const center = {
  lat: -3.745,
  lng: -38.523
};
 
class HomescreenMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = { userLocation: { lat: 32, lng: 32 }, loading: true };
  }

  

  componentDidMount(props) {
    debugger
    navigator.geolocation.getCurrentPosition(
      position => {
        debugger
        const { latitude, longitude } = position.coords;

        this.setState({
          userLocation: { lat: latitude, lng: longitude },
          loading: false
        });
      },
      () => {
        this.setState({ loading: false });
      },
      {timeout: 1000}
    );
  }

  render() {
    debugger
    if (this.state.loading) {
      return null;
    }

    return (
      <LoadScript
        googleMapsApiKey="TOOD"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={this.state.userLocation}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}
 
export default React.memo(HomescreenMap)