/* eslint-disable react/require-default-props */
import React, { useState } from 'react';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Loading from 'components/atoms/Loading';
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
  handleOnChange?: (index: number) => void;
  loading?: boolean;
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  title,
  featuredProjectList,
  handleOnChange = () => { },
  loading,
}) => {
  const [indexActive, setIndexActive] = useState(0);

  const handleOnchange = (index: number) => {
    if (index !== indexActive) {
      setIndexActive(index);
    }
    handleOnChange(index);
  };

  return (
    <div className="t-featuredProjects">
      <Container>
        <Heading modifiers={['32x48', 'jet', '700', 'fontCalibri', 'center', 'uppercase']}>
          {title}
        </Heading>
        {loading ? <Loading isShow /> : featuredProjectList.length > 0 && (
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
                      ratio="582x438"
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

FeaturedProjects.defaultProps = {
  handleOnChange: undefined,
};

export default FeaturedProjects;
