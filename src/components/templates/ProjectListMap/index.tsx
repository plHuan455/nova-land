/* eslint-disable react/require-default-props */
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Link from 'components/atoms/Link';
import Loading from 'components/atoms/Loading';
import Text from 'components/atoms/Text';
import Pulldown, { OptionType } from 'components/molecules/Pulldown';
import Container from 'components/organisms/Container';
import { checkExternalUrl } from 'utils/functions';

interface ImageMap {
  path: string;
  width: number;
  height: number;
}

export interface ItemBranch {
  id: number;
  point: {
    x: number;
    y: number;
  };
}

interface ItemProject {
  title: string;
  href: string;
  target?: string;
}

interface InfoProps {
  provinceOptions: OptionType[];
  projectOptions: OptionType[];
  valueProvince: OptionType|null;
  valueProject: OptionType|null;
  listProject: ItemProject[];
  handleChangeProvince: (value: OptionType) => void;
  handleChangeProject: (value: OptionType) => void;
}

export const ProjectListMapInfo:React.FC<InfoProps> = ({
  provinceOptions,
  projectOptions,
  valueProvince,
  valueProject,
  listProject,
  handleChangeProvince,
  handleChangeProject,
}) => {
  const { t } = useTranslation();

  return (
    <div className="t-projectListMap_info">
      <div className="t-projectListMap_info_select">
        <Text content={t('map.province_city')} modifiers={['18x28', 'jet', '600']} />
        <div className="t-projectListMap_info_pulldown">
          <Pulldown
            options={provinceOptions}
            value={valueProvince}
            placeholder={t('map.select_province_city')}
            handleChange={handleChangeProvince}
            isSecondary
          />
        </div>
      </div>
      <div className="t-projectListMap_info_select">
        <Text content={t('map.project')} modifiers={['18x28', 'jet', '600']} />
        <div className="t-projectListMap_info_pulldown">
          <Pulldown
            options={projectOptions}
            value={valueProject}
            placeholder={t('map.select_project')}
            handleChange={handleChangeProject}
            isSecondary
          />
        </div>
      </div>
      <div className="t-projectListMap_info_wrap-list">
        <Text content={t('map.project_list')} modifiers={['18x28', 'jet', '600']} />
        {listProject.length && (
        <ul className="t-projectListMap_info_list">
          {listProject.map((item, index) => (
            <li key={index.toString()}>
              <Link href={item.href} target={item.target} useExternal={checkExternalUrl(item.href)}>
                <div className="t-projectListMap_info_item">
                  <Text content={item.title} modifiers={['16x24', 'jet', '300']} />
                  <Icon iconName="greyArrowRight" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
        )}
      </div>
    </div>
  );
};

interface MapProps {
  image: ImageMap;
  listPoint: ItemBranch[];
  loading?: boolean;
}

export const ProjectListMapGround:React.FC<MapProps> = ({
  image,
  listPoint,
  loading,
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

  // const paddingBottomMap = useMemo(() => ((image.height / image.width) * 100),
  //   [image.height, image.width]);

  return (
    <div className="t-projectListMap_map">
      <div
        className="t-projectListMap_map_img"
        // style={{ paddingBottom: `${paddingBottomMap}%` }}
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
      <div className="t-projectListMap_map_loading">{loading && (<Loading isShow />)}</div>
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
      <Heading content={title} modifiers={['32x48', 'jet', 'fontCalibri', '700', 'center']} />
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
