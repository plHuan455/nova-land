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
  shortDescription?: string;
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
  keyword: Array<string>;
  titleLatest : string;
  titleHot:string;
}

const NewsDetail: React.FC<NewsDetailProps> = ({
  newsDetail, relatedNews, keyword, titleLatest, titleHot,
}) => (
  <Container>
    <div className="t-newsdetail">
      <CustomRow>
        <CustomCol sm="12" md="12" lg="8">
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
          <Text modifiers={['14x22', '700', 'jet']}>{titleLatest}</Text>
          <div className="t-newsdetail_subinfo">
            {relatedNews.slice(0, 3).map((item, idx) => (
              <React.Fragment
                key={`news-${item.id}`}
              >
                <InfoNews
                  imageSrc={item.imageNews}
                  title={item.title}
                  status={item.status}
                  href={item.href}
                />
                {(idx + 1) !== relatedNews.slice(0, 3).length && (
                  <Divider />
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="t-newsdetail_hotnews">
            <Text modifiers={['14x22', '700', 'jet']}>{titleHot}</Text>
            <div className="t-newsdetail_subinfo">
              {relatedNews.slice(0, 5).map((item, idx) => (
                <React.Fragment
                  key={`news-${item.id}`}
                >
                  <InfoNews
                    imageSrc={item.imageNews}
                    title={item.title}
                    status={item.status}
                    href={item.href}
                  />
                  {(idx + 1) !== relatedNews.slice(0, 5).length && (
                    <Divider />
                  )}
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
        </CustomCol>
      </CustomRow>
    </div>
  </Container>
);

NewsDetail.defaultProps = {
};

export default NewsDetail;
