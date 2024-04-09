// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';

// class MapContainer extends Component {
//   render() {
//     const mapStyles = {
//       width: '100%',
//       height: '100%'
//     };

//     return (
//       <Map
//         google={this.props.google}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={{
//           lat: 37.774929,
//           lng: -122.419416
//         }}
//       />
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'TU_API_KEY'
// })(MapContainer);




import React from 'react';

function Mapa() {
  return (
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.726716118286!2d-81.4817046!3d28.5178688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e778dcb8e96309%3A0x521910be9bc29c43!2s2295%20S%20Hiawassee%20Rd%2C%20Orlando%2C%20FL%2032835%2C%20EE.%20UU.!5e0!3m2!1ses!2sve!4v1712360069695!5m2!1ses!2sve"
				width="100%"
				height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      ></iframe>
  );
}

export default Mapa;
