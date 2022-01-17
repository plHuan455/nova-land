import React from 'react';

import Button from 'components/atoms/Button';
import Divider from 'components/atoms/Divider';
import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Link from 'components/atoms/Link';
import Tag from 'components/atoms/Tag';
import Text from 'components/atoms/Text';
import InfoNews from 'components/molecules/InfoNews';
import Container, { CustomCol, CustomRow } from 'components/organisms/Container';

interface NewsType {
  id: string;
  title: string;
  content: string;
  createDate: string;
  status: string;
  imageNews: string;
  numberView: string;
  author: string;
  href: string;
  titleBtn?: string;
  newsTypes: Array<string>;
}
interface NewsDetailProps {
  newsDetail: NewsType;
  relatedNews: Array<NewsType>;
}

const NewsDetail: React.FC<NewsDetailProps> = ({ newsDetail, relatedNews }) => (
  <Container>
    <div className="t-newsdetail">
      <CustomRow>
        <CustomCol sm="12" md="12" lg="8">
          <Heading modifiers={['52x65', '600', 'jet']} type="h1">{newsDetail.title}</Heading>
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
            <Text modifiers={['16x24', 'davysGrey']} content={newsDetail.content} />
            <div className="t-newsdetail_viewbtn">
              <Button>{newsDetail.titleBtn}</Button>
            </div>
            <Divider />
            <div className="t-newsdetail_typesnews">
              <div className="t-newsdetail_typesnews-list">
                {newsDetail.newsTypes.map((item, idx) => (
                  <Tag key={`type-${idx.toString()}`}>{item}</Tag>
                ))}
              </div>
              <div className="t-newsdetail_typesnews-social">
                <Link href="/#">
                  <Icon iconName="facebookShare" size="71x25" />
                </Link>
                <Link href="/#">
                  <Icon iconName="zaloShare" size="71x25" />
                </Link>
              </div>
            </div>
          </div>
        </CustomCol>
        <CustomCol sm="12" md="12" lg="4">
          <Text modifiers={['14x22', '700', 'jet']}>Các tin mới nhất</Text>
          <div className="t-newsdetail_relatednews">
            {relatedNews.slice(0, 3).map((item, idx) => (
              <>
                <InfoNews
                  key={`news-${item.id}`}
                  imageSrc={item.imageNews}
                  title={item.title}
                  status={item.status}
                  href={item.href}
                />
                {(idx + 1) !== relatedNews.slice(0, 3).length && (
                  <Divider />
                )}
              </>
            ))}
          </div>
        </CustomCol>
      </CustomRow>
    </div>
  </Container>
);

NewsDetail.defaultProps = {
};

export default NewsDetail;
