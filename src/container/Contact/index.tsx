/* eslint-disable */
import React, { useMemo } from 'react';

import GallerySlideContainer from './gallerySlideContainer';
import MapInformationContainer from './mapInformationContainer';
import TransactionListContainer from './transactionListContainer';

import HelmetContainer from 'container/helmet';
import { getBlockData } from 'utils/functions';

type Location = {
  email: string;
  phone: string;
  address: string;
  latitude: string;
  longtitude: string;
  galleryName: string;
  buildingName: string;
  galleryPhone: string;
  locationName: string;
  galleryAddress: string;
}

type Gallery = {
  items: {
    image: string;
  }[];
  title: string;
  button: {
    url: string;
    text: string;
    target: string;
  };
  latitude: string;
  longtitude: string;
  description: string;
}

type Exchanges = {
  title: string;
}

export type ContactBlock = Location | Gallery | Exchanges;

const ContactContainer: React.FC<BasePageData<ContactBlock>> = ({
  blocks,
  seoData,
  openGraphData,
}) => {
  const locationBlock = useMemo(() => getBlockData('section_location', blocks) as Location, [blocks]);
  const galleryBlock = useMemo(() => getBlockData('sectiob_gallery', blocks) as Gallery, [blocks]);
  const exchanges = useMemo(() => getBlockData('section_exchanges', blocks) as Exchanges, [blocks]);

  return (
    <>
      <HelmetContainer
        seoData={seoData}
        ogData={openGraphData}
      />
      <MapInformationContainer
        dataMarker={{
          lat: locationBlock?.latitude ?  parseFloat(locationBlock.latitude) : 0,
          lng: locationBlock?.longtitude ? parseFloat(locationBlock.longtitude) : 0,
          dataMarker: {
            title: locationBlock.locationName,
            dataCard: [
              {
                branchName: locationBlock.buildingName,
                informationDetail: {
                  iconLocation: 'location',
                  location: locationBlock.address,
                  iconEmail: 'email',
                  email: locationBlock.email,
                  iconPhone: 'phoneContact',
                  phone: locationBlock.phone,
                },
              },
              {
                branchName: locationBlock.galleryName,
                informationDetail: {
                  iconLocation: 'location',
                  location: locationBlock.galleryAddress,
                  iconPhone: 'phone',
                  phone: locationBlock.galleryPhone,
                },
              },
            ],
            nameBtn: 'Tìm gallery gần nhất',
          },
        }}
      />
      <TransactionListContainer
        title={exchanges.title}
      />
    </>
  );
};

export default ContactContainer;
