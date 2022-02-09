import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Carousel from 'components/organisms/Carousel';
import Container from 'components/organisms/Container';
import { Tab, TabPanel, Tabs } from 'components/organisms/Tabs';
import { ProjectsTypes } from 'services/project/types';

interface ItemBranch {
  id: number;
  projects: number[];
  point: {
    x: number;
    y: number;
  };
  reference: {
    images: string;
  }
}

interface CategoryBranch {
  id: number;
  title: string;
  listPoint: ItemBranch[];
}

interface ImageMap {
  path: string;
  width: number;
  height: number;
}

interface MapProps {
  image: ImageMap;
  listPoint?: ItemBranch[];
  idProjectActive: number;
  fnItem?: {
    onMouseEnter?: (item: ItemBranch) => void;
    onMouseLeave?: (item: ItemBranch) => void;
    onClick?: (item: ItemBranch) => void;
  }
}

const Map: React.FC<MapProps> = ({
  image,
  listPoint,
  idProjectActive,
  fnItem,
}) => {
  const calculatorPosition = useCallback(
    (item: ItemBranch) => ({
      top: `${((item.point.y / image?.height) * 100)}%`,
      left: `${((item.point.x / image?.width) * 100)}%`,
      width: `${(23 / image?.width) * 100}%`,
      height: `${(30 / image?.height) * 100}%`,
    }),
    [image?.height, image?.width],
  );

  const paddingBottomMap = useMemo(() => ((image.height / image.width) * 100),
    [image.height, image.width]);

  return (
    <div className="t-projectMap_map">
      <div
        className="t-projectMap_map_img"
        style={{ paddingBottom: `${paddingBottomMap}%` }}
      >
        <img
          src={image.path}
          alt="map"
        />
        {listPoint?.map((item, index) => (
          <div
            onMouseEnter={() => fnItem?.onMouseEnter && fnItem.onMouseEnter(item)}
            onMouseLeave={() => fnItem?.onMouseLeave && fnItem.onMouseLeave(item)}
            onClick={() => fnItem?.onClick && fnItem.onClick(item)}
            className={`t-projectMap_map_area ${item.projects.includes(idProjectActive) ? 'active' : ''}`}
            key={`${index.toString()}`}
            style={{ ...calculatorPosition(item) }}
          />
        ))}
      </div>
    </div>
  );
};

interface InfoProps {
  title?: string;
  idActive?: number;
  listCategory?: CategoryBranch[];
  handleClick?: (id: number) => void;
  fnItem?: {
    onMouseEnter?: (item: ProjectsTypes) => void;
    onMouseLeave?: (item: ProjectsTypes) => void;
    onClick?: (item: ProjectsTypes) => void;
  };
  idProjectActive: number;
  projectDataList?: ProjectsTypes[];
}

const InfoMap: React.FC<InfoProps> = ({
  title,
  idActive,
  listCategory,
  handleClick,
  fnItem,
  idProjectActive,
  projectDataList,
}) => {
  const renderCarousel = () => {
    const settings = {
      dots: true,
      dotsClass: 'slick-dots o-carousel_dots',
      slidesToShow: 1,
      slidesToScroll: 1,
      rows: 2,
      slidesPerRow: 2,
      arrows: false,
      infinite: false,
      cssEase: 'ease-in-out',
      customPaging() {
        return (
          <span className="o-carousel_dot white" />
        );
      },
    };
    return (
      <Carousel settings={settings}>
        {projectDataList?.map((x, i) => (
          <div
            onMouseEnter={() => fnItem?.onMouseEnter && fnItem.onMouseEnter(x)}
            onMouseLeave={() => fnItem?.onMouseLeave && fnItem.onMouseLeave(x)}
            onClick={() => fnItem?.onClick && fnItem.onClick(x)}
            key={i.toString()}
            className={`t-projectMap_info_branch ${idProjectActive ? 'zoom-in' : ''} ${idProjectActive === x.id ? 'zoom-out' : ''}`}
          >
            <Image src={x.thumbnail} ratio="257x64" />
          </div>
        ))}
      </Carousel>
    );
  };
  return (
    <div className="t-projectMap_info">
      <div className="t-projectMap_info_wrap">
        <Heading type="h2" modifiers={['32x48', 'white', '500', 'fontNoto', 'center']} content={title} />
        <div className="t-projectMap_info_content">
          <Tabs variant="white" variableMutate={idActive}>
            {listCategory?.map((item, index) => (
              <Tab
                key={`tab-${index.toString()}`}
                label={item.title}
                active={item.id === idActive}
                handleClick={() => handleClick && handleClick(item.id)}
                size="20x28"
              />
            ))}
          </Tabs>
          <div className="t-projectMap_info_panel">
            {listCategory?.map((item, index) => (
              <TabPanel key={`tab-panel-${index.toString()}`} active={item.id === idActive}>
                <div className="t-projectMap_info_carousel">
                  {projectDataList && projectDataList.length > 0 ? (
                    renderCarousel()
                  ) : null}
                </div>
              </TabPanel>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface ProjectMapProps {
  listCategory?: CategoryBranch[];
  image?: ImageMap;
  textProject?: string;
  handleSelect: (id: number) => void;
  idActive: number;
  projectDataList?: ProjectsTypes[];
}

const ProjectMap: React.FC<ProjectMapProps> = ({
  image,
  listCategory,
  textProject,
  handleSelect,
  idActive,
  projectDataList,
}) => {
  const [idProjectActive, setIdProjectActive] = useState(0);

  useEffect(() => {
    if (listCategory?.length) {
      handleSelect(listCategory[0].id);
    }
  }, [handleSelect, listCategory]);

  const findCategoryActive = useCallback(
    (id?: number, list?: CategoryBranch[]) => {
      if (!list?.length || !id) return undefined;
      return list?.find((x) => x.id === id);
    },
    [],
  );

  const fnItem = useMemo(() => ({
    onMouseEnter: (item: ProjectsTypes) => setIdProjectActive(item.id),
    onMouseLeave: () => setIdProjectActive(0),
  }), []);

  return (
    <div className="t-projectMap">
      <Container>
        <div className="t-projectMap_wrap">
          <InfoMap
            title={textProject}
            idActive={idActive}
            listCategory={listCategory}
            handleClick={handleSelect}
            fnItem={fnItem}
            idProjectActive={idProjectActive}
            projectDataList={projectDataList}
          />
          {image && (
            <Map
              idProjectActive={idProjectActive}
              image={image}
              listPoint={findCategoryActive(idActive, listCategory)?.listPoint}
            // fnItem={fnItem}
            />
          )}
        </div>
      </Container>
    </div>
  );
};

ProjectMap.defaultProps = {
  listCategory: undefined,
  image: undefined,
  textProject: undefined,
  projectDataList: undefined,
};

Map.defaultProps = {
  listPoint: undefined,
  fnItem: undefined,
};

InfoMap.defaultProps = {
  title: undefined,
  idActive: undefined,
  handleClick: undefined,
  listCategory: undefined,
  fnItem: undefined,
  projectDataList: undefined,
};

export default ProjectMap;
