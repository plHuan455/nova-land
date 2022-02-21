import React from 'react';

import Loading from 'components/atoms/Loading';
import Container from 'components/organisms/Container';
import { Tab, Tabs } from 'components/organisms/Tabs';
import TableCategory, { TableCategoryProps } from 'components/templates/TableCategory';

export interface TitleTabType {
  id: number;
  year: string;
}

export interface CorporateGovernanceProps {
  loading?: boolean;
  dataGeneral: TableCategoryProps[];
  dataTabGeneral: TitleTabType[];
  tabActive: number;
  handleChangeTab?: (e: number) => void;
}

const CorporateGovernance: React.FC<CorporateGovernanceProps> = ({
  loading, dataGeneral, dataTabGeneral, tabActive, handleChangeTab,
}) => (
  <div className="t-corporateGovernance">
    <Container>
      <div className="t-corporateGovernance_wrapper">
        <Tabs variableMutate={tabActive}>
          {dataTabGeneral.map((item, index) => (
            <Tab
              size="20x28"
              key={`tab-${index.toString()}`}
              label={item.year}
              active={index === tabActive}
              handleClick={() => handleChangeTab && handleChangeTab(index)}
            />
          ))}
        </Tabs>
        <div className="t-corporateGovernance_divider" />
        {(() => {
          if (loading) return <Loading isShow />;
          if (dataGeneral.length > 0) {
            return (
              <div className="t-corporateGovernance_content">
                {dataGeneral.map((ele, idx) => (
                  <div className="t-corporateGovernance_item" key={`corporateGovernance-${idx.toString()}`}>
                    <TableCategory
                      {...ele}
                    />
                  </div>
                ))}
              </div>
            );
          }
          return null;
        })()}
      </div>
    </Container>
  </div>
);

export default CorporateGovernance;
