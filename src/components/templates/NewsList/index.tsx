import React from 'react';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Loading from 'components/atoms/Loading';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';
import { HomeNewsCardProps, HomeNewsCard } from 'components/templates/HomeNews';

interface NewsListProps {
  title: string;
  dataNewsList: HomeNewsCardProps[];
  btnName: string;
  isFetching?: boolean;
  handleShowMore?: () => void;
}

const NewsList: React.FC<NewsListProps> = ({
  title,
  dataNewsList,
  btnName,
  isFetching,
  handleShowMore,
}) => (
  <div className="t-newsList">
    <Container>
      {!isFetching ? (
        <>
          <div className="u-mb-lg-40 u-mb-sm-30 u-mb-20">
            <Heading modifiers={['32x48', '500', 'uppercase', 'jet', 'center', 'fontNoto']}>
              {title}
            </Heading>
          </div>
          <div className="t-newsList_wrapper">
            {
              dataNewsList.length && dataNewsList.length > 0 ? (
                <>
                  {dataNewsList.map((item, index) => (
                    <div className="t-newsList_item" key={`newsList-${index.toString()}`}>
                      <HomeNewsCard
                        {...item}
                      />
                    </div>
                  ))}
                  <div className="t-newsList_button">
                    <Button modifiers="outlineSpanishGray" onClick={handleShowMore}>
                      {btnName}
                    </Button>
                  </div>
                </>
              ) : (
                <div className="t-newsList_empty">
                  <Text modifiers={['center', '20x28']}>Không có tin tức</Text>
                </div>
              )
            }
            { }
          </div>
        </>
      ) : <Loading variant="fullScreen" />}
    </Container>
  </div>
);

NewsList.defaultProps = {
  handleShowMore: undefined,
  isFetching: false,
};

export default NewsList;
