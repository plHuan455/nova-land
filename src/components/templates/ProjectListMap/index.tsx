import React, { useCallback, useMemo } from 'react';
import { Container } from 'react-bootstrap';

import dataDummy from 'assets/dataDummy/projectListMap';
import img from 'assets/images/bg_project_list_map.png';
import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Pulldown, { OptionType } from 'components/molecules/Pulldown';

const dummyOption: OptionType[] = [
  { value: 'Quan1', label: 'Quan 1' },
  { value: 'Quan2', label: 'Quan 2' },
  { value: 'Quan3', label: 'Quan 3' },
  { value: 'Quan4', label: 'Quan 4' },
  { value: 'Quan5', label: 'Quan 5' },
  { value: 'Quan6', label: 'Quan 6' },
  { value: 'Quan7', label: 'Quan 7' },
  { value: 'Quan8', label: 'Quan 8' },
  { value: 'Quan9', label: 'Quan 9' },
];

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

interface InfoProps {
}
const Info:React.FC<InfoProps> = () => (
  <div className="t-projectListMap_info">
    <div className="t-projectListMap_info_select">
      <Text content="Tỉnh/Thành Phố" modifiers={['16x24', 'arsenic']} />
      <div className="t-projectListMap_info_pulldown">
        <Pulldown
          options={dummyOption}
          placeholder="Chọn Tỉnh / Thành Phố"
      // eslint-disable-next-line no-console
          handleChange={(value: OptionType) => console.log(value)}
        />
      </div>
    </div>
    <div className="t-projectListMap_info_select">
      <Text content="Dự Án" modifiers={['16x24', 'arsenic']} />
      <div className="t-projectListMap_info_pulldown">
        <Pulldown
          options={dummyOption}
          placeholder="Chọn Dự Án"
      // eslint-disable-next-line no-console
          handleChange={(value: OptionType) => console.log(value)}
        />
      </div>
    </div>
    <div className="t-projectListMap_info_wrap-list">
      <Text content="Danh Sách Dự Án" modifiers={['16x24', 'arsenic']} />
      <ul className="t-projectListMap_info_list">
        <li>
          <Link href="/">
            <div className="t-projectListMap_info_item">
              <Text content="Aqua City" modifiers={['16x24', 'taupeGray']} />
              <Icon iconName="arrowNextGrey" />
            </div>
          </Link>
        </li>
        <li>
          <Link href="/">
            <div className="t-projectListMap_info_item">
              <Text content="Aqua City" modifiers={['16x24', 'taupeGray']} />
              <Icon iconName="arrowNextGrey" />
            </div>
          </Link>
        </li>
        <li>
          <Link href="/">
            <div className="t-projectListMap_info_item">
              <Text content="Aqua City" modifiers={['16x24', 'taupeGray']} />
              <Icon iconName="arrowNextGrey" />
            </div>
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

interface MapProps {
  image: ImageMap;
  listPoint: ItemBranch[];
}

const Map:React.FC<MapProps> = ({
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

}
const ProjectListMap: React.FC<ProjectListMapProps> = () => (
  <div className="t-projectListMap">
    <Container>
      <Heading content="DỰ ÁN" modifiers={['32x48', 'jet', 'fontNoto', '700', 'center']} />
      <div className="t-projectListMap_content">
        <Info />
        <Map
          image={{
            path: img,
            width: 373,
            height: 593,
          }}
          listPoint={dataDummy.listPoint}
        />
      </div>
    </Container>
  </div>
);

ProjectListMap.defaultProps = {
};

export default ProjectListMap;
