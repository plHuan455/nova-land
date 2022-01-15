import React, { useState } from 'react';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Container from 'components/organisms/Container';
import ListFeatProjectCollapse from 'components/organisms/ListFeatProjectCollapse';
import mapModifiers from 'utils/functions';

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
  const [indexActive, setIndexActive] = useState(0);

  const handleOnchange = (index: number) => {
    if (index !== indexActive) {
      setIndexActive(index);
    }
  };

  return (
    <div className="t-featuredProjects">
      <Container>
        <Heading modifiers={['32x48', 'jet', '500', 'fontNoto', 'center']}>
          {title}
        </Heading>
        {featuredProjectList.length > 0 && (
          <div className="t-featuredProjects_collapseList">
            <div className="t-featuredProjects_collapseList_left">
              <ListFeatProjectCollapse
                list={featuredProjectList}
                handleOnchange={handleOnchange}
                indexActive={indexActive}
              />
            </div>
            <div className="t-featuredProjects_collapseList_right">
              {
                featuredProjectList.map((item, index) => (
                  <div
                    className={mapModifiers('t-featuredProjects_collapseList_right_image', index === indexActive && 'show')}
                    key={`t-featuredProjects_collapseList_right_image-${index.toString()}`}
                  >
                    <Image
                      src={item.src}
                      ratio="547x410"
                    />
                  </div>
                ))
              }
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

FeaturedProjects.defaultProps = {};

export default FeaturedProjects;
