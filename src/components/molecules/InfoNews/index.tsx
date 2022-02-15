import React from 'react';

import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';

export interface InfoNewsProps {
  imageSrc: string;
  title: string;
  status: string;
  href: string;
}

const InfoNews: React.FC<InfoNewsProps> = ({
  imageSrc, title, status, href,
}) => (
  <div className="m-infonews">
    <div className="m-infonews_image">
      <Image ratio="1x1" src={imageSrc} alt="" />
    </div>
    <div className="m-infonews_content">
      <Link useExternal href={href}>
        <div className="m-infonews_title">
          <Text modifiers={['12x17', '400', 'jet']}>
            {title}
          </Text>
        </div>
      </Link>
      <Text modifiers={['12x17', '400', 'dimGray']}>{status}</Text>
    </div>
  </div>
);

InfoNews.defaultProps = {
};

export default InfoNews;
