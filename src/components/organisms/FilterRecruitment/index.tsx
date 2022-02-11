import React, { useState } from 'react';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Text from 'components/atoms/Text';
import Pulldown, { OptionType } from 'components/molecules/Pulldown';
import Container from 'components/organisms/Container';

type RecruitmentFilterTypes = {
  location?: OptionType;
  position?: OptionType;
  department?: OptionType;
}
interface FilterRecruitmentProps {
  heading?: string;
  desc?: string;
  positionOptions?: OptionType[];
  locationOptions?: OptionType[];
  departmentOptions?: OptionType[];
  handleSubmit?: (data: RecruitmentFilterTypes) => void;
}

const FilterRecruitment: React.FC<FilterRecruitmentProps> = ({
  heading,
  desc,
  positionOptions,
  locationOptions,
  departmentOptions,
  handleSubmit,
}) => {
  const [optionGroup, setOptionGroup] = useState<RecruitmentFilterTypes>();
  const handleChangeFilter = (val: OptionType, key: 'position' | 'location' | 'department') => {
    setOptionGroup((prev) => ({
      ...prev,
      [key]: val,
    }));
  };

  return (
    <Container>
      <div className="t-filterRecruitment">
        <div className="t-filterRecruitment_heading">
          <Heading modifiers={['400', '64x83', 'center', 'fontNoto', 'white']} content={heading} />
        </div>
        <div className="t-filterRecruitment_desc">
          <Text modifiers={['300', '18x28', 'center', 'fontLexend', 'white']} content={desc} />
        </div>
        <div className="t-filterRecruitment_tab">
          {/* Find position ...  */}
          {
            positionOptions && positionOptions.length > 0
            && (
            <div className="t-filterRecruitment_tab_item">
              <div className="t-filterRecruitment_tab-pulldown">
                <Pulldown
                  isSecondary
                  options={positionOptions}
                  placeholder="Tìm kiếm theo chức vụ"
                  handleChange={(val: OptionType) => handleChangeFilter(val, 'position')}
                />
              </div>
            </div>
            )
          }
          {/* Find Location ...  */}
          {
            locationOptions && locationOptions.length > 0
            && (
            <div className="t-filterRecruitment_tab_item minimize">
              <div className="t-filterRecruitment_tab-pulldown">
                <Pulldown
                  isSecondary
                  options={locationOptions}
                  placeholder="Địa điểm"
                  handleChange={(val: OptionType) => handleChangeFilter(val, 'location')}
                />
              </div>
            </div>
            )
          }
          {/* Find Department ...  */}
          {
            departmentOptions && departmentOptions.length > 0
            && (
            <div className="t-filterRecruitment_tab_item minimize">
              <div className="t-filterRecruitment_tab-pulldown">
                <Pulldown
                  isSecondary
                  options={departmentOptions}
                  placeholder="Bộ phận"
                  handleChange={(val: OptionType) => handleChangeFilter(val, 'department')}
                />
              </div>
            </div>
            )
          }
          {/* Submit ...  */}
          <div className="t-filterRecruitment_tab_button">
            <Button size="h70" onClick={() => handleSubmit && optionGroup && handleSubmit(optionGroup)}>
              Tìm kiếm việc làm
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

FilterRecruitment.defaultProps = {
  heading: undefined,
  desc: undefined,
  positionOptions: undefined,
  locationOptions: undefined,
  departmentOptions: undefined,
  handleSubmit: undefined,
};

export default FilterRecruitment;
