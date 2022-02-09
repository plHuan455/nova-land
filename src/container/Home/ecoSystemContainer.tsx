import React, { useMemo } from 'react';

import Animate from 'components/organisms/Animate';
import EcoSystems from 'components/templates/EcoSystems';
import { getImageURL } from 'utils/functions';

interface EcoSystemItem {
  link: {
    url: string;
    text: string;
    target: string;
  };
  imageHover: string;
  imageDefault: string;
}

export interface EcoSystemTypes {
  items: EcoSystemItem[];
  description: string;
  titleSection: string;
}

interface EcoSystemBlock {
  blocks: EcoSystemTypes;
}

const EcoSystemContainer: React.FC<EcoSystemBlock> = ({
  blocks,
}) => {
  const convertData = useMemo(() => {
    if (blocks.items) {
      return blocks.items.map((item) => ({
        fieldImgSrc: getImageURL(item.imageDefault),
        brandImage: getImageURL(item.imageHover),
        href: item.link.url,
        target: item.link.target,
      }));
    }
    return [];
  }, [blocks]);

  return (
    <Animate type="goUp">
      <div className="p-home_ecoSystem">
        <EcoSystems
          title={blocks.titleSection}
          desc={blocks.description}
          dataList={convertData}
        />
      </div>
    </Animate>
  );
};

export default EcoSystemContainer;
