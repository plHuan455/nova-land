/* eslint-disable no-unused-vars */
import React, {
  useCallback, useMemo, useRef, useState,
} from 'react';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Carousel from 'components/organisms/Carousel';
import Container from 'components/organisms/Container';
import { Tab, TabPanel, Tabs } from 'components/organisms/Tabs';
import { ProjectsTypes } from 'services/project/types';

export interface ItemBranch {
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

const Map = React.forwardRef<HTMLDivElement, MapProps>(({
  image,
  listPoint,
  idProjectActive,
  fnItem,
}, ref) => {
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
        ref={ref}
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
});

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
            <Image src={x.thumbnail} ratio="257x64" alt={x.name} />
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

  const findCategoryActive = useCallback(
    (id?: number, list?: CategoryBranch[]) => {
      if (!list?.length || !id) return undefined;
      return list?.find((x) => x.id === id);
    },
    [],
  );

  const scaleImage = useCallback((x:number, y:number) => {
    if (!image || !ref.current) return;
    const percentX = (x / image.width) * 100;
    const percentY = (y / image.height) * 100;
    ref.current.style.transformOrigin = `${percentX}% ${percentY}%`;
    ref.current.style.transform = 'scale(2.5)';
  }, [image]);

  const fnItem = useMemo(() => ({
    onMouseEnter: (item: ProjectsTypes) => {
      console.log(item);
      console.log('listCategory', listCategory);
      const find = listCategory?.find((x) => x.listPoint[0].projects.includes(item.id));
      console.log(find);
      if (find) {
        scaleImage(find.listPoint[0].point.x, find.listPoint[0].point.y);
      }
      setIdProjectActive(item.id);
    },
    onMouseLeave: () => {
      if (ref.current) {
        ref.current.style.transformOrigin = '';
        ref.current.style.transform = '';
      }
      setIdProjectActive(0);
    },
  }), [listCategory, scaleImage]);

  const ref = useRef<HTMLDivElement|null>(null);

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
              ref={ref}
              idProjectActive={idProjectActive}
              image={image}
              listPoint={findCategoryActive(idActive, listCategory)?.listPoint}
              // fnItem={{
              //   onMouseEnter: (item: ProjectsTypes) => { console.log(item); },
              //   onMouseLeave: (item: ProjectsTypes) => { console.log(item); },
              //   onClick: (item: ProjectsTypes) => { console.log(item); },
              // }}
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
