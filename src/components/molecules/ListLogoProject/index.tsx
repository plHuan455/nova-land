import React from 'react';

import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import { checkExternalUrl } from 'utils/functions';

export interface ListLogoProjectProps {
  title?: string;
  listLogo?: {
    imgSrc: string;
    href: string;
    target: string;
  }[];
}

const ListLogoProject: React.FC<ListLogoProjectProps> = ({
  title,
  listLogo,
}) => (
  <div className="m-listLogoProject">
    <div className="m-listLogoProject_title">
      <Text modifiers={['24x32', '600', 'jet', 'capitalize']}>{title}</Text>
    </div>
    <div className="m-listLogoProject_listLogo">
      {listLogo?.map((item, idx) => (
        <div className="m-listLogoProject_item">
          <Link key={`logo-${idx.toString()}`} href={item.href} target={item.target} useExternal={checkExternalUrl(item.href)}>
            <div className="m-listLogoProject_wraplogo">
              <img src={item.imgSrc} alt="" />
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

ListLogoProject.defaultProps = {
};

export default ListLogoProject;
