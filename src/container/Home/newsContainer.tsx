import React from 'react';

import tabDataHomeNewsList from 'assets/dataDummy/homeNews';
import HomeNews from 'components/templates/HomeNews';
import Section from 'components/templates/Section';

export interface NewsTypes {
  button: {
    url: string;
    text: string;
    target: string;
  },
  titleSection: string;
}

interface NewsBlock {
  blocks: NewsTypes;
}

const NewsContainer: React.FC<NewsBlock> = ({
  blocks,
}) => (
  <div className="p-home_news">
    <Section>
      <HomeNews
        title={blocks.titleSection}
        href={blocks.button.url}
        target={blocks.button.target}
        nameButton={blocks.button.text}
        tabDataHomeNews={tabDataHomeNewsList}
      />
    </Section>
  </div>
);

export default NewsContainer;
