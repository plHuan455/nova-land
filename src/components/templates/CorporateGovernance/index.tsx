import React from 'react';

import Container from 'components/organisms/Container';
import { Tab, Tabs } from 'components/organisms/Tabs';
import TableCategory, { TableCategoryProps } from 'components/templates/TableCategory';

export interface TitleTabType {
  titleTab: string;
}

export interface CorporateGovernanceProps {
  dataGeneral: TableCategoryProps[];
  dataTabGeneral: TitleTabType[];
  tabActive: number;
  handleChangeTab?: (e: number) => void;
}

const CorporateGovernance: React.FC<CorporateGovernanceProps> = ({
  dataGeneral, dataTabGeneral, tabActive, handleChangeTab,
}) => (
  <div className="t-corporateGovernance">
    <Container>
      <div className="t-corporateGovernance_wrapper">
        <Tabs variableMutate={tabActive}>
          {dataTabGeneral.map((item, index) => (
            <Tab
              size="20x28"
              key={`tab-${index.toString()}`}
              label={item.titleTab}
              active={index === tabActive}
              handleClick={() => handleChangeTab && handleChangeTab(index)}
            />
          ))}
        </Tabs>
        <div className="t-corporateGovernance_divider" />
        {dataGeneral.length > 0 && (
          <div className="t-corporateGovernance_content">
            {dataGeneral.map((ele, idx) => (
              <div className="t-corporateGovernance_item" key={`corporateGovernance-${idx.toString()}`}>
                <TableCategory
                  {...ele}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </Container>
  </div>
);

export default CorporateGovernance;
