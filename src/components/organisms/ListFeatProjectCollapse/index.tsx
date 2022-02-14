import React from 'react';

// import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Collapses from 'components/organisms/Collapses';
import { checkExternalUrl } from 'utils/functions';

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
      <div
        key={`o-listFeatProjectCollapse-${idx.toString()}`}
        className="o-listFeatProjectCollapse_item"
        onClick={() => handleOnchange && handleOnchange(idx)}
      >
        <Collapses
          title={item.title}
          active={indexActive === idx}
        >
          <div className="o-listFeatProjectCollapse_item-content">
            <Text modifiers={['16x24', 'davysGrey', '400']} content={item.content} />
          </div>
          <Link href={item.href} target={item.target || '_blank'} useExternal={checkExternalUrl(item.href)}>
            <div className="o-listFeatProjectCollapse_item-wrapLink">
              {/* <Icon iconName="arrowRightGolden" size="14" /> */}
              <Text modifiers={['camel', '500', 'underline']}>Xem thêm</Text>
            </div>
          </Link>
          <div className="o-listFeatProjectCollapse_item-img">
            <Image src={item.src} ratio="507x370" />
          </div>
        </Collapses>
        <div className="o-listFeatProjectCollapse_item-line" />
      </div>
    ))}
  </div>
);

ListFeatProjectCollapse.defaultProps = {
  handleOnchange: undefined,
};

export default ListFeatProjectCollapse;
