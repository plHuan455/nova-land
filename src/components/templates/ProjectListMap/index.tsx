/* eslint-disable react/require-default-props */
import GoogleMapReact from 'google-map-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Text from 'components/atoms/Text';
import Pulldown, { OptionType } from 'components/molecules/Pulldown';
import Container from 'components/organisms/Container';

export interface ItemBranch {
  id: number;
  point: {
    x: number;
    y: number;
  };
}

interface InfoProps {
  provinceOptions: OptionType[];
  projectOptions: OptionType[];
  valueProvince: OptionType|null;
  valueProject: OptionType|null;
  handleChangeProvince: (value: OptionType) => void;
  handleChangeProject: (value: OptionType) => void;
}

export const ProjectListMapInfo:React.FC<InfoProps> = ({
  provinceOptions,
  projectOptions,
  valueProvince,
  valueProject,
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
    </div>
  );
};

export interface MapContactProps {
  lat?: number;
  lng?: number;
}

const MapContact: React.FC<MapContactProps> = () => (
  <div className="t-mapInformation_marker">
    <Icon iconName="marker" size="40" />
  </div>
);

export type TypeMapMarker = {
  lat: number;
  lng: number;
};
interface MapProps {
  mapMarker?: TypeMapMarker;
  mapAPIkey: string;
}

export const ProjectListMapGround:React.FC<MapProps> = ({
  mapMarker,
  mapAPIkey,
}) => (
  <div className="t-projectListMap_map">
    {mapMarker && (
      <div className="t-projectListMap_map_wrapper">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: `${mapAPIkey}&libraries=places,geometry`,
          }}
          defaultCenter={{
            lat: mapMarker.lat || 0,
            lng: mapMarker.lng || 0,
          }}
          defaultZoom={10}
          options={{
            zoomControl: true,
            mapTypeControl: false,
            fullscreenControl: true,
            panControl: true,
          }}
          center={{
            lat: mapMarker.lat || 0,
            lng: mapMarker.lng || 0,
          }}
        >
          <MapContact
            lat={mapMarker.lat || 0}
            lng={mapMarker.lng || 0}
          />
        </GoogleMapReact>
      </div>
    )}
  </div>
);

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
