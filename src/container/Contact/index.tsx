import React from 'react';

import GallerySlideContainer from './gallerySlideContainer';
import MapInformationContainer from './mapInformationContainer';
import TransactionListContainer from './transactionListContainer';

import HelmetContainer from 'container/helmet';

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

const ContactContainer: React.FC = () => (
  <>
    <HelmetContainer />
    <MapInformationContainer />
    <GallerySlideContainer />
    <TransactionListContainer />
  </>
);

export default ContactContainer;
