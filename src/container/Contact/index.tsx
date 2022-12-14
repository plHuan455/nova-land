import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

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
};

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
  socical: {
    icon: string,
    link: {
      url?: string,
      text: string,
      target: string,
    }
  }[];
  latitude: string;
  longtitude: string;
  description: string;
};

type Exchanges = {
  title: string;
};

export type ContactBlock = Location | Gallery | Exchanges;

const ContactContainer: React.FC<BasePageData<ContactBlock>> = ({
  blocks,
  seoData,
  openGraphData,
}) => {
  const { t } = useTranslation();
  const locationBlock = useMemo(
    () => getBlockData('section_location', blocks) as Location,
    [blocks],
  );
  const galleryBlock = useMemo(
    () => getBlockData('sectiob_gallery', blocks) as Gallery,
    [blocks],
  );
  const exchanges = useMemo(
    () => getBlockData('section_exchanges', blocks) as Exchanges,
    [blocks],
  );

  return (
    <>
      <HelmetContainer seoData={seoData} ogData={openGraphData} />
      <MapInformationContainer
        dataMarker={{
          lat: parseFloat(locationBlock.latitude),
          lng: parseFloat(locationBlock.longtitude),
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
            nameBtn: t('gallery.find_gallery'),
          },
        }}
      />
      <GallerySlideContainer
        title={galleryBlock.title}
        desc={galleryBlock.description}
        target={galleryBlock.button.target}
        nameBtn={galleryBlock.button.text}
        href={`${galleryBlock.button.url}/search/${galleryBlock.latitude},${galleryBlock.longtitude}`}
        imgList={galleryBlock.items}
        socialList={galleryBlock.socical}
      />
      <TransactionListContainer title={exchanges.title} />
    </>
  );
};

export default ContactContainer;
