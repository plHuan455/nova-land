import React, { useState } from 'react';

import Icon from 'components/atoms/Icon';
import Text from 'components/atoms/Text';
import FilterGroup, { FilterGroupProps } from 'components/organisms/FilterGroup';
import mapModifiers from 'utils/functions';

interface FilterGroupRecruitmentProps {
  titleMain: string;
  dataFilterList: FilterGroupProps[];
  onClickReset?: () => void;
}

const FilterGroupRecruitment: React.FC<FilterGroupRecruitmentProps> = ({
  titleMain,
  dataFilterList,
  onClickReset,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="t-filterGroupRecruitment_mbFilter"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon iconName="filter" size="16" />
        <div className="t-filterGroupRecruitment_mbFilter_title u-ml-4">
          <Text modifiers={['20x28', '600', 'capitalize', 'white']}>
            {titleMain}
          </Text>
        </div>
      </div>
      <div className={mapModifiers('t-filterGroupRecruitment', isOpen && 'open')}>
        <div className="t-filterGroupRecruitment_mbClose u-mb-10" onClick={() => setIsOpen(false)}>
          <Icon iconName="closeWhite" size="16" />
        </div>
        <div className="t-filterGroupRecruitment_top">
          <Text modifiers={['20x28', '600', 'capitalize']}>
            {titleMain}
          </Text>
          <div className="t-filterGroupRecruitment_top_reset" onClick={onClickReset}>
            <Text modifiers={['14x22', '300', 'underline', 'spanishGray']}>
              Thiết lập lại
            </Text>
          </div>
        </div>
        <div className="t-filterGroupRecruitment_bottom u-mt-lg-31 u-mt-20">
          {dataFilterList.map((item, index) => (
            <div className="t-filterGroupRecruitment_item" key={`filterGroup-${index.toString()}`}>
              <FilterGroup
                {...item}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

FilterGroupRecruitment.defaultProps = {
  onClickReset: undefined,
};

export default FilterGroupRecruitment;
