import { Story, Meta } from '@storybook/react';
import React from 'react';

import ProjectList from '.';

import project1 from 'assets/images/LogoProject/project1.png';
import project2 from 'assets/images/LogoProject/project2.png';
import project3 from 'assets/images/LogoProject/project3.png';
import project4 from 'assets/images/LogoProject/project4.png';
import project5 from 'assets/images/LogoProject/project5.png';
import project6 from 'assets/images/LogoProject/project6.png';
import project7 from 'assets/images/LogoProject/project7.png';

export default {
  title: 'Components/templates/ProjectList',
  component: ProjectList,
  argTypes: {},
} as Meta;

const listLogo = [project1, project2, project3, project4, project5, project6, project7];

const dataDumy = [
  {
    title: 'các dự án Khu trung tâm',
    listLogo,
  },
  {
    title: 'các dự án Khu Đông',
    listLogo,
  },
  {
    title: 'các dự án Khu Nam',
    listLogo,
  },
];

export const normal: Story = () => (
  <ProjectList
    dataProjectList={dataDumy}
  />
);
