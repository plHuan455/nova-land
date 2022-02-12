import React from 'react';

import GallerySlide, { GallerySlideProps } from 'components/templates/GallerySlide';
import Section from 'components/templates/Section';

interface GallerySlideContainerProps extends GallerySlideProps {}

const GallerySlideContainer: React.FC<GallerySlideContainerProps> = ({ ...props }) => (
  <div className="p-contact_gallerySlide">
    <Section>
      <GallerySlide
        {...props}
      />
    </Section>
  </div>
);

export default GallerySlideContainer;
