import React, { useState } from 'react';

import Container from '../Container';
import { Tab, TabPanel, Tabs } from '../Tabs';

import Heading from 'components/atoms/Heading';
import Text from 'components/atoms/Text';
import Pulldown from 'components/molecules/Pulldown';
import mapModifiers from 'utils/functions';

const dummyData = [
  {
    label: 'Tin Tập Đoàn',
    content: 'Content 1',
  },
  {
    option: [
      {
        label: 'abc',
        value: 'abc',
        id: 'abc',
      },
      {
        label: 'abc',
        value: 'abc',
        id: 'abc',
      },
      {
        label: 'abc',
        value: 'abc',
        id: 'abc',
      },
      {
        label: 'abc',
        value: 'abc',
        id: 'abc',
      },
    ],
    content: 'Content 2',
    isPulldown: true,
    placeholder: 'Địa điểm',
  },
  {
    option: [
      {
        label: 'abc',
        value: 'abc',
        id: 'abc',
      },
      {
        label: 'abc',
        value: 'abc',
        id: 'abc',
      },
      {
        label: 'abc',
        value: 'abc',
        id: 'abc',
      },
      {
        label: 'abc',
        value: 'abc',
        id: 'abc',
      },
    ],
    content: 'Content 3',
    isPulldown: true,
    placeholder: 'Bộ phận',
  },
  {
    label: 'Tin Dự án',
    content: 'Content 4',
  },
];
interface FilterRecruitmentProps {
  heading?: string;
  desc?: string;
}

const FilterRecruitment: React.FC<FilterRecruitmentProps> = ({
  heading,
  desc,
}) => {
  const [indexActive, setIndexActive] = useState(0);
  return (
    <div className="t-filterRecruitment">
      <div className="t-filterRecruitment_heading">
        <Heading modifiers={['400', '64x83', 'center', 'fontNoto', 'white']} content={heading} />
      </div>
      <div className="t-filterRecruitment_desc">
        <Text modifiers={['300', '18x28', 'center', 'fontLexend', 'white']} content={desc} />
      </div>
      <div className="t-filterRecruitment_tab">
        <Container>
          <Tabs variableMutate={indexActive}>
            {
              dummyData.map((item, index) => (
                <div className={mapModifiers('t-filterRecruitment_tab-items', indexActive === index && 'active')}>
                  {item.isPulldown
                    ? (
                      <div className="t-filterRecruitment_tab-pulldown">
                        <Pulldown
                          isSecondary
                          options={item.option}
                          placeholder={item.placeholder}
                          handleChange={() => setIndexActive(index)}
                        />
                      </div>
                    )
                    : (
                      <Tab
                        key={`tab-${index.toString()}`}
                        label={item.label}
                        active={index === indexActive}
                        handleClick={() => setIndexActive(index)}
                      />
                    )}
                </div>
              ))
            }
          </Tabs>
          {
            dummyData.map((item, index) => (
              <TabPanel key={`tab-panel-${index.toString()}`} active={index === indexActive}>
                {item.content}
              </TabPanel>
            ))
          }
        </Container>
      </div>
    </div>
  );
};

FilterRecruitment.defaultProps = {
  heading: undefined,
  desc: undefined,
};

export default FilterRecruitment;