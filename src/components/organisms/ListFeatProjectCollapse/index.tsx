import React from 'react';

import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Collapses from 'components/organisms/Collapses';

type FeaturedProjectItemTypes = {
  title: string;
  src: string;
  content: string;
  href: string;
  target?: string;
};

interface ListFeatProjectCollapseProps {
  list: FeaturedProjectItemTypes[];
  indexActive: number;
  handleOnchange?: (idx: number) => void;
}

const ListFeatProjectCollapse: React.FC<ListFeatProjectCollapseProps> = ({
  list,
  indexActive,
  handleOnchange,
}) => (
  <div className="o-listFeatProjectCollapse">
    {list.map((item, idx) => (
      <>
        <div
          key={`project-${idx.toString()}`}
          className="o-listFeatProjectCollapse_item"
          onClick={() => handleOnchange && handleOnchange(idx)}
        >
          <Collapses
            title={item.title}
            active={indexActive === idx}
          >
            <div className="o-listFeatProjectCollapse_item-content">
              <Text modifiers={['davysGrey', '16x24', '400']}>
                {item.content}
              </Text>
            </div>
            <Link href={item.href} target={item.target || '_blank'}>
              <div className="o-listFeatProjectCollapse_item-wrapLink">
                <Icon iconName="arrowNextYellowBrown" size="14" />
                <Text modifiers={['goldenBrown', '400']}>Xem thêm</Text>
              </div>
            </Link>
            <div className="o-listFeatProjectCollapse_item-img">
              <Image src={item.src} ratio="507x370" />
            </div>
          </Collapses>
          <div className="o-listFeatProjectCollapse_item-line" />
        </div>
      </>
    ))}
  </div>
);

ListFeatProjectCollapse.defaultProps = {
  handleOnchange: undefined,
};

export default ListFeatProjectCollapse;
