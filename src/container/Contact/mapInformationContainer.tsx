import React, { useState, useEffect, useMemo } from 'react';
import { useQuery } from 'react-query';

import { IconName } from 'components/atoms/Icon';
import MapInformation, { TypeMapMarker } from 'components/templates/MapInformation';
import getNearestExchangesService, { getExchangesService } from 'services/exchanges';
import { NearestExchangesTypes } from 'services/exchanges/types';
import { useAppSelector } from 'store/hooks';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';

interface MapInformationContainerProps {
  dataMarker: TypeMapMarker;
}

const MapInformationContainer: React.FC<MapInformationContainerProps> = ({ dataMarker }) => {
  const [dataLocation, setDataLocation] = useState<TypeMapMarker>(dataMarker);
  const systemData = useAppSelector((state) => state.system.dataSystem);
  const [isBack, setIsBack] = useState(false);

  const handleLocationSearch = () => {
    try {
      if (navigator.geolocation && !isBack) {
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
            const dtLocation = convertLocationData(data);
            setDataLocation(dtLocation);
            setIsBack(true);
          },
        );
      }
      if (isBack) {
        setDataLocation(dataMarkerDefault[0]);
        setIsBack(false);
      }
    } finally {
      //
    }
  };

  const convertLocationData = (dataConvert: NearestExchangesTypes) => ({
    lat: Number(dataConvert.latitude),
    lng: Number(dataConvert.longtitude),
    dataMarker: {
      title: '',
      dataCard: [
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
      nameBtn: isBack ? 'Tìm gallery gần nhất' : 'Trở lại vị trí đầu',
    },
  });

  const { data } = useQuery(
    ['getExchangesHighlight'], () => getExchangesService({
      is_pinned: 'true',
    }), {
      ...DEFAULT_QUERY_OPTION,
    },
  );

  const dataMarkerDefault = useMemo(() => {
    if (data && data.data.length > 0) {
      return data.data.map((item) => ({
        lat: item.latitude,
        lng: item.longtitude,
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
              branchName: item.name,
              informationDetail: {
                iconLocation: 'location' as IconName,
                location: item.address,
                iconPhone: 'phone' as IconName,
                phone: item.phone,
              },
            },
          ],
          nameBtn: 'Tìm gallery gần nhất',
        },
      }));
    }
    return [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (dataMarkerDefault.length > 0) {
      setDataLocation(dataMarkerDefault[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="p-contact_mapInformation">
      <MapInformation
        mapAPIkey={systemData?.gmapId || 'AIzaSyAt4eV8aoSdhKXHQSQvJc7aSEGlcnUVbdo'}
        mapMarker={dataLocation}
        handleLocationSearch={handleLocationSearch}
      />
    </div>
  );
};

export default MapInformationContainer;
