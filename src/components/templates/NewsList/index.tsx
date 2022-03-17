import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Link from 'components/atoms/Link';
import Loading from 'components/atoms/Loading';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';
import { HomeNewsCardProps, HomeNewsCard } from 'components/templates/HomeNews';

interface NewsListProps {
  title: string;
  dataNewsList: HomeNewsCardProps[];
  btnName: string;
  isFetching?: boolean;
  href?: string;
  handleShowMore?: () => void;
}

const NewsList: React.FC<NewsListProps> = ({
  title,
  dataNewsList,
  btnName,
  isFetching,
  href,
  handleShowMore,
}) => {
  const { t } = useTranslation();

  return (
    <div className="t-newsList">
      <Container>
        {!isFetching ? (
          <>
            <div className="u-mb-lg-40 u-mb-sm-30 u-mb-20">
              <Heading modifiers={['32x48', '700', 'uppercase', 'jet', 'center', 'fontCalibri']}>
                {title}
              </Heading>
            </div>
            {
                dataNewsList.length && dataNewsList.length > 0 ? (
                  <>
                    <div className="t-newsList_wrapper">
                      {dataNewsList.map((item, index) => (
                        <div className="t-newsList_wrapper_content">
                          <div className="t-newsList_wrapper_titleMobile">
                            <Link href={item.href}>
                              <Text
                                modifiers={['16x24', '600', 'arsenic', 'capitalize']}
                                content={item.title.toLocaleLowerCase()}
                              />
                            </Link>
                          </div>
                          <div className="t-newsList_wrapper_item" key={`newsList-${index.toString()}`}>
                            <HomeNewsCard
                              {...item}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="t-newsList_button">
                      {href ? (
                        <Link href={href} target="_self">
                          <Button modifiers="outlineSpanishGray">
                            {btnName}
                          </Button>
                        </Link>
                      ) : (
                        <Button modifiers="outlineSpanishGray" onClick={handleShowMore}>
                          {btnName}
                        </Button>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="t-newsList_empty">
                    <Text modifiers={['center', '20x28']}>{t('news.no_news')}</Text>
                  </div>
                )
              }
          </>
        ) : <Loading variant="fullScreen" />}
      </Container>
    </div>
  );
};

NewsList.defaultProps = {
  handleShowMore: undefined,
  isFetching: false,
  href: undefined,
};

export default NewsList;
