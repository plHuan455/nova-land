import React, { useState } from 'react';

import { IconName } from 'components/atoms/Icon';
import MapInformation, { TypeMapMarker } from 'components/templates/MapInformation';
import getNearestExchangesService from 'services/exchanges';
import { NearestExchangesTypes } from 'services/exchanges/types';
import { useAppSelector } from 'store/hooks';

interface MapInformationContainerProps {
  dataMarker: TypeMapMarker;
}

const MapInformationContainer: React.FC<MapInformationContainerProps> = ({ dataMarker }) => {
  const [dataLocation, setDataLocation] = useState<TypeMapMarker>(dataMarker);
  const systemData = useAppSelector((state) => state.system.dataSystem);
  const [loading, setLoading] = useState(false);

  const handleLocationSearch = () => {
    try {
      if (navigator.geolocation && dataLocation === dataMarker) {
        setLoading(true);
        navigator.geolocation.getCurrentPosition(
          async (position: GeolocationPosition) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            const data = await getNearestExchangesService({
              longtitude: pos.lng,
              latitude: pos.lat,
            });
            const dtLocation = ConvertLocationData(data);
            setDataLocation(dtLocation);
          },
        );
      }
      if (dataLocation !== dataMarker) {
        setLoading(true);
        setDataLocation(dataMarker);
      }
    } finally {
      setLoading(false);
    }
  };

  const ConvertLocationData = (dataConvert: NearestExchangesTypes) => ({
    lat: Number(dataConvert.latitude),
    lng: Number(dataConvert.longtitude),
    dataMarker: {
      title: dataLocation.dataMarker.title,
      dataCard: [
        {
          branchName: dataLocation.dataMarker.dataCard[0].branchName,
          informationDetail: {
            iconLocation: 'location' as IconName,
            location: dataLocation.dataMarker.dataCard[0].informationDetail.location,
            iconEmail: 'email' as IconName,
            email: dataLocation.dataMarker.dataCard[0].informationDetail.email,
            iconPhone: 'phoneContact' as IconName,
            phone: dataLocation.dataMarker.dataCard[0].informationDetail.phone,
          },
        },
        {
          branchName: dataConvert.name,
          informationDetail: {
            iconLocation: 'location' as IconName,
            location: dataConvert.address,
            iconPhone: 'phone' as IconName,
            phone: dataConvert.phone,
          },
        },
      ],
      nameBtn: 'Tìm gallery gần nhất',
    },
  });

  return (
    <div className="p-contact_mapInformation">
      <MapInformation
        mapAPIkey={systemData?.gtmId || 'AIzaSyAt4eV8aoSdhKXHQSQvJc7aSEGlcnUVbdo'}
        mapMarker={dataLocation}
        handleLocationSearch={handleLocationSearch}
        loading={loading}
      />
    </div>
  );
};

export default MapInformationContainer;
