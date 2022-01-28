import React from 'react';

import dataMapInformation from 'assets/dataDummy/mapInformation';
import MapInformation from 'components/templates/MapInformation';

const MapInformationContainer: React.FC = () => (
  <div className="p-contact_mapInformation">
    <MapInformation
      mapAPIkey="AIzaSyAt4eV8aoSdhKXHQSQvJc7aSEGlcnUVbdo"
      mapMarker={dataMapInformation}
    />
  </div>
);

export default MapInformationContainer;
