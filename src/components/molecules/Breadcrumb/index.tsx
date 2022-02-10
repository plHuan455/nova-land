import React from 'react';

import Icon from 'components/atoms/Icon';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';

export type BreadcrumbPropsTypes = {
  pathName?: string;
  title: string;
};

interface BreadcrumbProps {
  breadcrumbs: BreadcrumbPropsTypes[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ breadcrumbs }) => (
  <div className="m-breadcrumb">
    <Container>
      <ul className="m-breadcrumb_wrapper">
        <li className="m-breadcrumb_home">
          <Link href={breadcrumbs[0].pathName}>
            <Icon iconName="home" size="16" />
          </Link>
        </li>
        {breadcrumbs.slice(1).map((item) => (
          <li className="m-breadcrumb_item" key={`${item.title}-${item.pathName}`}>
            <Link href={item.pathName}>
              <div className="m-breadcrumb_item_wrapper">
                <div className="u-ml-lg-8 u-mr-lg-8 u-ml-sm-6 u-mr-sm-6 u-mr-4 u-ml-4">
                  <Text modifiers={['12x17', '300', 'columbiaBlue']}>
                    /
                  </Text>
                </div>
                <div className="m-breadcrumb_item_label">
                  <Text modifiers={['12x17', '600', 'camel', 'capitalize']}>{item.title}</Text>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  </div>
);

export default Breadcrumb;
