/* eslint-disable react-hooks/rules-of-hooks */
import { Story, Meta } from '@storybook/react';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import ProjectListMap, { ProjectListMapGround, ProjectListMapInfo } from '.';

import dataDummy from 'assets/dataDummy/projectListMap';
import img from 'assets/images/bg_project_list_map.png';
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

  const listPoint = () => {
    const find = listProjectSelect.find((x) => String(x.id) === project?.value);
    if (find) return [{ id: find.id, point: find.point }];
    return listProjectSelect.map((x) => ({ id: x.id, point: x.point }));
  };

  return (
    <Router>
      <ProjectListMap title="Dự Án">
        <ProjectListMapInfo
          listProject={dataDummy.listProject}
          provinceOptions={dataDummy.provinceOptions}
          projectOptions={customProjectOptions}
          valueProvince={province}
          valueProject={project}
          hasButtonViewAll
          // eslint-disable-next-line no-console
          handleClickViewAll={() => console.log('see more')}
          handleChangeProvince={(value) => {
            setProvince(value);
            setProject(null);
          }}
          handleChangeProject={(value) => setProject(value)}
        />
        <ProjectListMapGround
          image={{
            path: img,
            width: 373,
            height: 593,
          }}
          listPoint={listPoint()}
        />
      </ProjectListMap>
    </Router>
  );
};
