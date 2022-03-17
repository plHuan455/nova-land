import React from 'react';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';
import mapModifiers, { checkExternalUrl } from 'utils/functions';

export interface LatestNewsCardProps {
  imgSrc: string;
  ratio?: Ratio;
  alt?: string;
  title: string;
  time?: string;
  href: string;
  heading?: string;
  fileName?: string;
  btnText?: string;
  handleSeeMore?: () => void;
  pdfImg?: string,
  hrefLink?:string,
  target?: string,
}

export const LatestNewsCard: React.FC<LatestNewsCardProps> = ({
  imgSrc,
  ratio,
  alt,
  title,
  time,
  href,
  heading,
  fileName,
  btnText,
  handleSeeMore,
  pdfImg,
  hrefLink,
  target,
}) => (
  <div className="t-latestNewsCard">
    {
      heading && (
        <div className="t-latestNewsCard_heading">
          <Heading modifiers={['700', '30x42', 'center', 'uppercase', 'jet', 'fontCalibri']}>{heading}</Heading>
        </div>
      )
    }
    <Link href={href}>
      <div className="t-latestNewsCard_wrapper">
        <div className="t-latestNewsCard_image">
          <Image
            src={imgSrc}
            ratio={ratio || '582x252'}
            alt={alt}
          />
        </div>
        <div className="t-latestNewsCard_layer" />
        <div className="t-latestNewsCard_content">
          <div className="t-latestNewsCard_content_title">
            <Heading modifiers={['24x30', '600', 'white', 'fontLexend']}>
              {title}
            </Heading>
          </div>
          <div className="mt-8">
            <Text modifiers={['12x17', '300', 'columbiaBlue']}>
              {time}
            </Text>
          </div>
        </div>
      </div>
    </Link>
    {
      fileName && (
        <Link href={hrefLink} target={target || '_blank'} useExternal={checkExternalUrl(hrefLink)}>
          <div className="t-latestNewsCard_file">
            <div className="t-latestNewsCard_icon">
              <Image ratio="1x1" alt="pdf" src={pdfImg || ''} />
            </div>
            <div className="t-latestNewsCard_fileName">
              <Heading modifiers={['jet', '400', '20x30']}>{fileName}</Heading>
            </div>
          </div>
        </Link>
      )
    }
    {
      btnText && (
        <div className="t-latestNewsCard_button" onClick={handleSeeMore}>
          <Link href={href} target={target || '_blank'} useExternal={checkExternalUrl(href)}>
            <Button modifiers="outlineSpanishGray">{btnText}</Button>
          </Link>
        </div>
      )
    }
  </div>
);

export interface LatestNewsProps {
  dataLatestNews: LatestNewsCardProps[];
  hasLine?: boolean;
}

const LatestNews: React.FC<LatestNewsProps> = ({ dataLatestNews, hasLine }) => (
  <div className={mapModifiers('t-latestNews', hasLine && 'hasLine')}>
    <Container>
      <div className="t-latestNews_wrapper">
        <div className="t-latestNews_left">
          <LatestNewsCard {...dataLatestNews[0]} />
        </div>
        <div className="t-latestNews_right">
          {dataLatestNews.slice(1).map((item, index) => (
            <div className="t-latestNews_right_item" key={`latestNews-${index.toString()}`}>
              <LatestNewsCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  </div>
);

export default LatestNews;
