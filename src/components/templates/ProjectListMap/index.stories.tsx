/* eslint-disable react-hooks/rules-of-hooks */
import { Story, Meta } from '@storybook/react';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import ProjectListMap, { ProjectListMapGround, ProjectListMapInfo } from '.';

import dataDummy from 'assets/dataDummy/projectListMap';
import { OptionType } from 'components/molecules/Pulldown';

export default {
  title: 'Components/templates/ProjectListMap',
  component: ProjectListMap,
  argTypes: {},
} as Meta;

const projectOptions = (_province:OptionType|null) => {
  if (_province?.value === '1') return dataDummy.projectHCM;
  if (_province?.value === '2') return dataDummy.projectHN;
  return [];
};

export const normal: Story = () => {
  const [province, setProvince] = useState<OptionType|null>(null);
  const [project, setProject] = useState<OptionType|null>(null);
  const listProjectSelect = projectOptions(province);

  const customProjectOptions = listProjectSelect
    .map((x) => ({ value: String(x.id), label: x.label }));

  return (
    <Router>
      <ProjectListMap title="Dự Án">
        <ProjectListMapInfo
          provinceOptions={dataDummy.provinceOptions}
          projectOptions={customProjectOptions}
          valueProvince={province}
          valueProject={project}
          handleChangeProvince={(value) => {
            setProvince(value);
            setProject(null);
          }}
          handleChangeProject={(value) => setProject(value)}
        />
        <ProjectListMapGround
          mapAPIkey="AIzaSyAt4eV8aoSdhKXHQSQvJc7aSEGlcnUVbdo"
          mapMarker={{
            lat: 10.781241219776518,
            lng: 106.7415968021698,
          }}
        />
      </ProjectListMap>
    </Router>
  );
};
