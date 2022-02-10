import React from 'react';
import { TwitterShareButton, FacebookShareButton } from 'react-share';

import Divider from 'components/atoms/Divider';
import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Tag from 'components/atoms/Tag';
import Text from 'components/atoms/Text';
import InfoNews from 'components/molecules/InfoNews';
import Container from 'components/organisms/Container';

interface NewsType {
  id: string;
  title: string;
  shortDescription?: string;
  content: string;
  createDate: string;
  status?: string;
  imageNews?: string;
  numberView: string;
  author: string;
  href?: string;
  titleBtn?: string;
  newsTypes: Array<string>;
}
interface RelatedNewsType {
  id: string;
  title: string;
  content: string;
  status?: string;
  imageNews?: string;
  href?: string;
}
interface NewsDetailProps {
  newsDetail: NewsType;
  relatedNews: RelatedNewsType[];
  hightLightNews: RelatedNewsType[];
  keyword: Array<string>;
  titleLatest: string;
  titleHot: string;
}

const NewsDetail: React.FC<NewsDetailProps> = ({
  newsDetail, relatedNews, keyword, titleLatest, titleHot, hightLightNews,
}) => {
  const shareUrlTW = 'https://twitter.com';
  const shareUrlFB = 'https://www.facebook.com';
  return (
    <Container>
      <div className="t-newsdetail">
        <div className="t-newsdetail_leftSide">
          <Heading modifiers={['52x65', '600', 'jet', 'fontNoto']} type="h1">{newsDetail.title}</Heading>
          <div className="t-newsdetail_statistical">
            <Text modifiers={['12x17', '400', 'dimGray']}>{newsDetail.createDate}</Text>
            <div className="t-newsdetail_circle" />
            <Text modifiers={['12x17', '400', 'dimGray']}>{newsDetail.author}</Text>
            <div className="t-newsdetail_circle" />
            <div className="t-newsdetail_view">
              <Icon iconName="eyeOpen" size="14" />
              <Text modifiers={['12x17', '400', 'dimGray']}>{newsDetail.numberView}</Text>
            </div>
          </div>
          <div className="t-newsdetail_content">
            <div className="t-newsdetail_shortDesc">
              <Text modifiers={['18x28', '600', 'jet']} content={newsDetail.shortDescription} />
            </div>
            <Text type="div" modifiers={['16x24', 'davysGrey']} content={newsDetail.content} />
            <Divider />
            <div className="t-newsdetail_typesnews">
              <div className="t-newsdetail_typesnews-list">
                {newsDetail.newsTypes.map((item, idx) => (
                  <Tag key={`type-${idx.toString()}`}>{item}</Tag>
                ))}
              </div>
              <div className="t-newsdetail_typesnews-social">
                <FacebookShareButton className="t-newsdetail_typesnews-button" url={shareUrlTW}>
                  <Icon iconName="facebookShare" size="71x25" />
                </FacebookShareButton>
                <TwitterShareButton className="t-newsdetail_typesnews-button" url={shareUrlFB}>
                  <Icon iconName="zaloShare" size="71x25" />
                </TwitterShareButton>
              </div>
            </div>
          </div>
        </div>
        <div className="t-newsdetail_rightSide">
          <Text modifiers={['14x22', '700', 'jet']}>{titleLatest}</Text>
          <div className="t-newsdetail_subinfo">
            {relatedNews.map((item) => (
              <React.Fragment
                key={`news-${item.id}`}
              >
                <InfoNews
                  imageSrc={item.imageNews || ''}
                  title={item.title}
                  status={item.status || ''}
                  href={item.href || ''}
                />
                <Divider />
              </React.Fragment>
            ))}
          </div>
          <div className="t-newsdetail_hotnews">
            <Text modifiers={['14x22', '700', 'jet']}>{titleHot}</Text>
            <div className="t-newsdetail_subinfo">
              {hightLightNews.map((item, idx) => (
                <React.Fragment
                  key={`news-${idx.toString()}`}
                >
                  <InfoNews
                    imageSrc={item.imageNews || ''}
                    title={item.title}
                    status={item.status || ''}
                    href={item.href || ''}
                  />
                  <Divider />
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="t-newsdetail_keyword">
            <Text modifiers={['14x22', '700', 'jet']}>Từ khóa phổ biến</Text>
            <div className="t-newsdetail_listkey">
              {keyword.map((item, idx) => (
                <Tag key={`key-${idx.toString()}`}>{item}</Tag>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
NewsDetail.defaultProps = {
};

export default NewsDetail;
