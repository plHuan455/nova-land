import React, { useState } from 'react';

import Container from 'components/organisms/Container';
import { Tab, TabPanel, Tabs } from 'components/organisms/Tabs';
import TableCategory, { TableCategoryProps } from 'components/templates/TableCategory';

export interface dataTabsType {
  titleTab: string;
  dataTab: TableCategoryProps[];
}

interface CorporateGovernanceProps {
  dataGeneral: dataTabsType[];
}

const CorporateGovernance: React.FC<CorporateGovernanceProps> = ({ dataGeneral }) => {
  const [indexActive, setIndexActive] = useState(0);

  return (
    <div className="t-corporateGovernance">
      <Container>
        <div className="t-corporateGovernance_wrapper">
          <Tabs variableMutate={indexActive}>
            {dataGeneral.map((item, index) => (
              <Tab
                size="20x28"
                key={`tab-${index.toString()}`}
                label={item.titleTab}
                active={index === indexActive}
                handleClick={() => setIndexActive(index)}
              />
            ))}
          </Tabs>
          <div className="t-corporateGovernance_divider" />
          {dataGeneral.map((ele, idx) => (
            <TabPanel key={`corporateGovernance-${idx.toString()}`} active={idx === indexActive}>
              <div className="t-corporateGovernance_content">
                {ele.dataTab.length > 0 && ele.dataTab.map((val, stt) => (
                  <div
                    className="t-corporateGovernance_item"
                    key={`corporateGovernance-table-${stt.toString()}`}
                  >
                    <TableCategory
                      {...val}
                    />
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CorporateGovernance;
