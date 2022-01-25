import React, { useState, useRef, ChangeEvent } from 'react';

import Checkbox from 'components/atoms/Checkbox';
import Icon from 'components/atoms/Icon';
import Text from 'components/atoms/Text';
import mapModifiers from 'utils/functions';

interface FilterGroupItem {
  id: string;
  name: string;
  content: string;
}

export interface FilterGroupProps {
  title: string;
  dataFilterGroup?: FilterGroupItem[];
  handleOnChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FilterGroup: React.FC<FilterGroupProps> = ({
  title, dataFilterGroup, handleOnChange,
}) => {
  const [active, setActive] = useState(false);
  const collapseItemRef = useRef<HTMLDivElement>(null);

  return (
    <div className={mapModifiers('o-filterGroup', active && 'active')}>
      <div className="o-filterGroup_wrapTitle u-mb-lg-12 u-mb-8">
        <div className="o-filterGroup_wrapTitle_title">
          <Text modifiers={['14x20', '600', 'jet']}>
            {title}
          </Text>
        </div>
        <div className="o-filterGroup_wrapTitle-icon" onClick={() => setActive(!active)}>
          <Icon
            size="24"
            iconName={active ? 'collapse' : 'expand'}
          />
        </div>
      </div>
      <div
        style={{
          maxHeight: active ? collapseItemRef?.current?.clientHeight : 0,
        }}
        className="o-filterGroup_wrapperContent"
      >
        <div ref={collapseItemRef} className="o-filterGroup_wrapperContent_content">
          {
            dataFilterGroup && dataFilterGroup.map((item, index) => (
              <div className="o-filterGroup_wrapperContent_item" key={`FilterGroup-${index.toString()}`}>
                <Checkbox
                  {...item}
                  onChange={(e) => handleOnChange && handleOnChange(e)}
                >
                  {item.content}
                </Checkbox>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default FilterGroup;
