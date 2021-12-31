import React, { useCallback, useMemo } from 'react';
import { Container } from 'react-bootstrap';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Pulldown, { OptionType } from 'components/molecules/Pulldown';

interface ImageMap {
  path: string;
  width: number;
  height: number;
}

interface ItemBranch {
  id: number;
  point: {
    x: number;
    y: number;
  };
}

interface ItemProject {
  title: string;
  href: string;
}

interface InfoProps {
  provinceOptions: OptionType[];
  projectOptions: OptionType[];
  valueProvince: OptionType|null;
  valueProject: OptionType|null;
  listProject: ItemProject[];
  hasButtonViewAll: boolean;
  handleClickViewAll: () => void;
  handleChangeProvince: (value: OptionType) => void;
  handleChangeProject: (value: OptionType) => void;
}

export const ProjectListMapInfo:React.FC<InfoProps> = ({
  provinceOptions,
  projectOptions,
  valueProvince,
  valueProject,
  listProject,
  hasButtonViewAll,
  handleClickViewAll,
  handleChangeProvince,
  handleChangeProject,
}) => (
  <div className="t-projectListMap_info">
    <div className="t-projectListMap_info_select">
      <Text content="Tỉnh/Thành Phố" modifiers={['16x24', 'arsenic']} />
      <div className="t-projectListMap_info_pulldown">
        <Pulldown
          options={provinceOptions}
          value={valueProvince}
          placeholder="Chọn Tỉnh / Thành Phố"
          handleChange={handleChangeProvince}
        />
      </div>
    </div>
    <div className="t-projectListMap_info_select">
      <Text content="Dự Án" modifiers={['16x24', 'arsenic']} />
      <div className="t-projectListMap_info_pulldown">
        <Pulldown
          options={projectOptions}
          value={valueProject}
          placeholder="Chọn Dự Án"
          handleChange={handleChangeProject}
        />
      </div>
    </div>
    <div className="t-projectListMap_info_wrap-list">
      <Text content="Danh Sách Dự Án" modifiers={['16x24', 'arsenic']} />
      {listProject.length && (
      <ul className="t-projectListMap_info_list">
        {listProject.map((item, index) => (
          <li key={index.toString()}>
            <Link href={item.href}>
              <div className="t-projectListMap_info_item">
                <Text content={item.title} modifiers={['16x24', 'taupeGray']} />
                <Icon iconName="arrowNextGrey" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
      )}
      {hasButtonViewAll && (
        <div className="t-projectListMap_info_btn">
          <Button onClick={handleClickViewAll} modifiers="with-icon" iconName="arrowDownBrown">
            Xem Tất Cả Dự Án
          </Button>
        </div>
      )}
    </div>
  </div>
);

interface MapProps {
  image: ImageMap;
  listPoint: ItemBranch[];
}

export const ProjectListMapGround:React.FC<MapProps> = ({
  image,
  listPoint,
}) => {
  const calculatorPosition = useCallback(
    (item: ItemBranch) => ({
      top: `${((item.point.y / image.height) * 100)}%`,
      left: `${((item.point.x / image.width) * 100)}%`,
      width: `${(19 / image.width) * 100}%`,
      height: `${(24.5 / image.height) * 100}%`,
    }),
    [image.height, image.width],
  );

  const paddingBottomMap = useMemo(() => ((image.height / image.width) * 100),
    [image.height, image.width]);

  return (
    <div className="t-projectListMap_map">
      <div
        className="t-projectListMap_map_img"
        style={{ paddingBottom: `${paddingBottomMap}%` }}
      >
        <img
          src={image.path}
          alt="map"
        />
        {listPoint?.map((item, index) => (
          <div
            className="t-projectListMap_map_area "
            key={`${index.toString()}`}
            style={{ ...calculatorPosition(item) }}
          />
        ))}
      </div>
    </div>
  );
};

interface ProjectListMapProps {
  title?: string;
}

const ProjectListMap: React.FC<ProjectListMapProps> = ({
  title,
  children,
}) => (
  <div className="t-projectListMap">
    <Container>
      <Heading content={title} modifiers={['32x48', 'jet', 'fontNoto', '700', 'center']} />
      <div className="t-projectListMap_content">
        {children}
      </div>
    </Container>
  </div>
);

ProjectListMap.defaultProps = {
  title: undefined,
};

export default ProjectListMap;
