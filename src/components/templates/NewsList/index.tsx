import React from 'react';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Container from 'components/organisms/Container';
import { HomeNewsCardProps, HomeNewsCard } from 'components/templates/HomeNews';

interface NewsListProps {
  title: string;
  dataNewsList: HomeNewsCardProps[];
  btnName: string;
  handleShowMore?: () => void;
}

const NewsList: React.FC<NewsListProps> = ({
  title,
  dataNewsList,
  btnName,
  handleShowMore,
}) => (
  <div className="t-newsList">
    <Container>
      <div className="u-mb-lg-40 u-mb-sm-30 u-mb-20">
        <Heading modifiers={['32x48', '500', 'uppercase', 'jet', 'center', 'fontNoto']}>
          {title}
        </Heading>
      </div>
      <div className="t-newsList_wrapper">
        {
          dataNewsList.map((item, index) => (
            <div className="t-newsList_item" key={`newsList-${index.toString()}`}>
              <HomeNewsCard
                {...item}
              />
            </div>
          ))
        }
        <div className="t-newsList_button">
          <Button modifiers="outlineSpanishGray" onClick={handleShowMore}>
            {btnName}
          </Button>
        </div>
      </div>
    </Container>
  </div>
);

NewsList.defaultProps = {
  handleShowMore: undefined,
};

export default NewsList;
