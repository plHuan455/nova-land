import React from 'react';

import dataMapInformation from 'assets/dataDummy/mapInformation';
import MapInformation from 'components/templates/MapInformation';
import { useAppSelector } from 'store/hooks';

const MapInformationContainer: React.FC = () => {
  const systemData = useAppSelector((state) => state.system.dataSystem);

  return (
    <div className="p-contact_mapInformation">
      <MapInformation
        mapAPIkey={systemData?.gtmId || 'AIzaSyAt4eV8aoSdhKXHQSQvJc7aSEGlcnUVbdo'}
        mapMarker={dataMapInformation}
      />
    </div>
  );
};

export default MapInformationContainer;
