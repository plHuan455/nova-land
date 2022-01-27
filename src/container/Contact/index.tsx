import React from 'react';

import GallerySlideContainer from './gallerySlideContainer';
import MapInformationContainer from './mapInformationContainer';
import TransactionListContainer from './transactionListContainer';

const ContactContainer: React.FC = () => (
  <>
    <MapInformationContainer />
    <GallerySlideContainer />
    <TransactionListContainer />
  </>
);

export default ContactContainer;
