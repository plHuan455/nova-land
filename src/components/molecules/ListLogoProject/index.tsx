import React from 'react';

import Text from 'components/atoms/Text';

export interface ListLogoProjectProps {
  title?: string;
  listLogo?: Array<string>;
}

const ListLogoProject: React.FC<ListLogoProjectProps> = ({ title, listLogo }) => (
  <div className="m-listLogoProject">
    <div className="m-listLogoProject_title">
      <Text modifiers={['24x32', '600', 'jet']}>{title}</Text>
    </div>
    <div className="m-listLogoProject_listLogo">
      {listLogo?.map((item, idx) => (
        <div className="m-listLogoProject_wraplogo" key={`logo-${idx.toString()}`}>
          <img src={item} alt="" />
        </div>
      ))}
    </div>
  </div>
);

ListLogoProject.defaultProps = {
};

export default ListLogoProject;
