import React from 'react';
import ReactDOM from 'react-dom';

import ProjectList from '.';

import project1 from 'assets/images/LogoProject/project1.png';
import project2 from 'assets/images/LogoProject/project2.png';
import project3 from 'assets/images/LogoProject/project3.png';
import project4 from 'assets/images/LogoProject/project4.png';
import project5 from 'assets/images/LogoProject/project5.png';
import project6 from 'assets/images/LogoProject/project6.png';
import project7 from 'assets/images/LogoProject/project7.png';

const listLogo = [
  {
    imgSrc: project1,
    href: '',
    target: '',
  },
  {
    imgSrc: project2,
    href: '',
    target: '',
  },
  {
    imgSrc: project3,
    href: '',
    target: '',
  },
  {
    imgSrc: project4,
    href: '',
    target: '',
  },
  {
    imgSrc: project5,
    href: '',
    target: '',
  },
  {
    imgSrc: project6,
    href: '',
    target: '',
  },
  {
    imgSrc: project7,
    href: '',
    target: '',
  },
];

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

describe('<ProjectList />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProjectList
      dataProjectList={dataDumy}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
