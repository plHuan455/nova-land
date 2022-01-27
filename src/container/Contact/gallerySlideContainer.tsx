import React from 'react';

import imgGallerySlide from 'assets/images/img_gallery_slide.png';
import GallerySlide from 'components/templates/GallerySlide';
import Section from 'components/templates/Section';

const GallerySlideContainer: React.FC = () => (
  <div className="p-contact_gallerySlide">
    <Section>
      <GallerySlide
        title="Novaland Gallery"
        desc="Trung tâm giới thiệu các dự án trọng điểm của Novaland cùng
        hệ sinh thái dịch vụ và tiện ích NovaGroup"
        target="_blank"
        href="/"
        imgList={[imgGallerySlide, imgGallerySlide, imgGallerySlide, imgGallerySlide]}
      />
    </Section>
  </div>
);

export default GallerySlideContainer;
