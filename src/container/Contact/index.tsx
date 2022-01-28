import React from 'react';

import GallerySlideContainer from './gallerySlideContainer';
import MapInformationContainer from './mapInformationContainer';
import TransactionListContainer from './transactionListContainer';

import HelmetContainer from 'container/helmet';

const ContactContainer: React.FC = () => (
  <>
    <HelmetContainer />
    <MapInformationContainer />
    <GallerySlideContainer />
    <TransactionListContainer />
  </>
);

export default ContactContainer;
