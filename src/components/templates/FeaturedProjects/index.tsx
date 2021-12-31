import React, { useState } from 'react';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Container from 'components/organisms/Container';
import ListFeatProjectCollapse from 'components/organisms/ListFeatProjectCollapse';

export type FeaturedProjectTypes = {
  title: string;
  src: string;
  content: string;
  href: string;
  target?: string;
};

interface FeaturedProjectsProps {
  title: string;
  featuredProjectList: FeaturedProjectTypes[];
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  title,
  featuredProjectList,
}) => {
  const [activeCollapse, setActiveCollapse] = useState<number>(0);
  return (
    <div className="t-featuredProjects">
      <Container>
        <div className="t-featuredProjects_wrapper">
          <Heading modifiers={['32x48', 'jet', '800', 'fontNoto', 'center']}>
            {title}
          </Heading>
        </div>
        {featuredProjectList.length > 0 && (
          <div className="t-featuredProjects_collapseList">
            <div className="t-featuredProjects_collapseList_left">
              <ListFeatProjectCollapse
                list={featuredProjectList}
                handleOnchange={(idx) => setActiveCollapse(idx)}
              />
            </div>
            <div className="t-featuredProjects_collapseList_right">
              <Image
                src={featuredProjectList[activeCollapse].src}
                ratio="547x410"
              />
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

FeaturedProjects.defaultProps = {};

export default FeaturedProjects;
