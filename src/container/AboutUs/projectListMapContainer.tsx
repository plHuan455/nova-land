import React, { useState } from 'react';

import dataDummy from 'assets/dataDummy/projectListMap';
import img from 'assets/images/bg_project_list_map.svg';
import { OptionType } from 'components/molecules/Pulldown';
import ProjectListMap, { ProjectListMapGround, ProjectListMapInfo } from 'components/templates/ProjectListMap';
import Section from 'components/templates/Section';

const projectOptions = (_province:OptionType|null) => {
  if (_province?.value === '1') return dataDummy.projectHCM;
  if (_province?.value === '2') return dataDummy.projectHN;
  return [];
};

const ProjectListMapContainer: React.FC = () => {
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
    <div className="p-aboutUs_projectListMap">
      <Section>
        <ProjectListMap title="Dự Án">
          <ProjectListMapInfo
            listProject={dataDummy.listProject}
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
            image={{
              path: img,
              width: 373,
              height: 593,
            }}
            listPoint={listPoint()}
          />
        </ProjectListMap>
      </Section>
    </div>
  );
};

export default ProjectListMapContainer;
