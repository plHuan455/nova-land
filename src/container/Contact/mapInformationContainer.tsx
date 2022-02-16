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
  const [dataLocation, setDataLocation] = useState<TypeMapMarker | undefined>(dataMarker);
  const systemData = useAppSelector((state) => state.system.dataSystem);
  const language = useAppSelector((state) => state.system.language);
  const [isBack, setIsBack] = useState(false);

  const { data } = useQuery(
    ['getExchangesHighlight', language], () => getExchangesService({
      is_pinned: 'true',
    }), {
      ...DEFAULT_QUERY_OPTION,
    },
  );

  const handleLocationSearch = () => {
    try {
      if (navigator.geolocation && !isBack) {
        navigator.geolocation.getCurrentPosition(
          async (position: GeolocationPosition) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            const res = await getNearestExchangesService({
              longtitude: pos.lng,
              latitude: pos.lat,
            });
            const dtLocation = convertLocationData(res);
            setDataLocation(dtLocation);
            setIsBack(true);
          },
        );
      }
      if (isBack && dataMarkerDefault) {
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

  const dataMarkerDefault = useMemo(() => {
    if (data && data.data.length > 0) {
      return data.data.map((item) => ({
        lat: item.latitude,
        lng: item.longtitude,
        dataMarker: {
          title: dataMarker?.dataMarker?.title || '',
          dataCard: [
            {
              branchName: dataMarker?.dataMarker?.dataCard[0].branchName || '',
              informationDetail: {
                iconLocation: 'location' as IconName,
                location: dataMarker?.dataMarker?.dataCard[0].informationDetail.location || '',
                iconEmail: 'email' as IconName,
                email: dataMarker?.dataMarker?.dataCard[0].informationDetail.email || '',
                iconPhone: 'phoneContact' as IconName,
                phone: dataMarker?.dataMarker?.dataCard[0].informationDetail.phone || '',
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
    return [{
      lat: 0,
      lng: 0,
      dataMarker: undefined,
    }];
  }, [data, dataMarker]);

  useEffect(() => {
    if (dataMarkerDefault && dataMarkerDefault.length > 0) {
      setDataLocation(dataMarkerDefault[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, dataMarkerDefault, language]);

  return (
    <div className="p-contact_mapInformation">
      <MapInformation
        mapAPIkey={systemData?.gmapId || ''}
        mapMarker={dataLocation}
        handleLocationSearch={handleLocationSearch}
      />
    </div>
  );
};

export default MapInformationContainer;
