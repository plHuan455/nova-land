import GoogleMapReact from 'google-map-react';
import React, { useState } from 'react';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Icon, { IconName } from 'components/atoms/Icon';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';
import mapModifiers from 'utils/functions';

export interface ContactInformationItems {
  branchName: string;
  informationDetail: {
    iconLocation: IconName;
    location: string;
    iconEmail?: IconName;
    email?: string;
    iconPhone: IconName;
    phone: string;
  };
}

export interface MapInformationCardProps {
  title: string;
  dataCard: ContactInformationItems[];
  nameBtn?: string;
  handleClose?: (e: boolean) => void;
  handleLocationSearch?: () => void;
}

export const MapInformationCard: React.FC<MapInformationCardProps> = ({
  title,
  dataCard,
  nameBtn,
  handleClose,
  handleLocationSearch,
}) => (
  <div className="t-mapInformationCard">
    <div
      className="t-mapInformationCard_mbClose"
      onClick={() => handleClose && handleClose(false)}
    >
      <Icon iconName="closeWhite" size="16" />
    </div>
    <div className="t-mapInformationCard_title">
      <Heading modifiers={['24x30', '600', 'darkMidnightBlue', 'uppercase']}>
        {title}
      </Heading>
    </div>
    {dataCard?.length > 0 && (
      <div className="t-mapInformationCard_wrapper">
        {dataCard.map((item, index) => (
          <div
            className="t-mapInformationCard_item u-mt-lg-30 u-mt-15"
            key={`mapInformationCard-${index.toString()}`}
          >
            <Text
              modifiers={['18x28', '600', 'darkMidnightBlue', 'capitalize']}
            >
              {item.branchName}
            </Text>
            <div className="t-mapInformationCard_location u-mt-8">
              <div className="u-pt-2">
                <Icon
                  iconName={item.informationDetail.iconLocation}
                  size="20"
                />
              </div>
              <div className="t-mapInformationCard_content u-ml-8">
                <Text modifiers={['16x24', '300', 'dimGray']}>
                  {item.informationDetail.location}
                </Text>
              </div>
            </div>
            {item.informationDetail.email && (
              <div className="t-mapInformationCard_email u-mt-8">
                <div className="u-pt-2">
                  <Icon
                    iconName={item.informationDetail.iconEmail || 'email'}
                    size="20"
                  />
                </div>
                <div className="t-mapInformationCard_content u-ml-8">
                  <Link
                    href={`mailto:${item.informationDetail.email}`}
                    useExternal
                  >
                    <Text modifiers={['16x24', '300', 'dimGray', 'underline']}>
                      {item.informationDetail.email}
                    </Text>
                  </Link>
                </div>
              </div>
            )}
            <div className="t-mapInformationCard_phone u-mt-8">
              <div className="u-pt-2">
                <Icon
                  iconName={item.informationDetail.iconPhone || 'phoneContact'}
                  size="20"
                />
              </div>
              <div className="t-mapInformationCard_content u-ml-8">
                <Link href={`tel:${item.informationDetail.phone}`} useExternal>
                  <Text
                    modifiers={['16x24', '300', 'dimGray']}
                    content={item.informationDetail.phone}
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
    <div className="t-mapInformationCard_btn u-mt-lg-30 u-mt-15">
      <Button modifiers="primary" type="button" onClick={handleLocationSearch}>
        <Text modifiers={['18x28', '600', 'center']}>
          {nameBtn || 'Tìm gallery gần nhất'}
        </Text>
      </Button>
    </div>
  </div>
);

export type TypeMapMarker = {
  lat: number;
  lng: number;
  dataMarker?: MapInformationCardProps;
};

export interface MapInformationProps {
  mapMarker?: TypeMapMarker;
  mapAPIkey: string;
  handleLocationSearch?: () => void;
}

export interface MapContactProps {
  lat?: number;
  lng?: number;
  handleClick: () => void;
}

const MapContact: React.FC<MapContactProps> = ({ handleClick }) => (
  <div className="t-mapInformation_marker" onClick={handleClick}>
    <Icon iconName="marker" size="40" />
  </div>
);

const MapInformation: React.FC<MapInformationProps> = ({
  mapMarker,
  mapAPIkey,
  handleLocationSearch,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = (e: boolean) => {
    setIsOpen(e);
  };

  return (
    <div className="t-mapInformation">
      {mapMarker?.dataMarker && (
        <Container>
          <div
            className={mapModifiers(
              't-mapInformation_card',
              isOpen && 'isOpen',
            )}
          >
            <MapInformationCard
              {...mapMarker?.dataMarker}
              handleClose={handleClose}
              handleLocationSearch={handleLocationSearch}
            />
          </div>
        </Container>
      )}
      {mapMarker && (
        <div className="t-mapInformation_wrapper">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: `${mapAPIkey}&libraries=places,geometry`,
            }}
            defaultCenter={{
              lat: mapMarker.lat || 0,
              lng: mapMarker.lng || 0,
            }}
            defaultZoom={13}
            options={{
              zoomControl: true,
              mapTypeControl: false,
              fullscreenControl: true,
              panControl: true,
            }}
            center={{
              lat: mapMarker.lat || 0,
              lng: mapMarker.lng || 0,
            }}
          >
            <MapContact
              lat={mapMarker.lat || 0}
              lng={mapMarker.lng || 0}
              handleClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          </GoogleMapReact>
        </div>
      )}
    </div>
  );
};

export default MapInformation;
