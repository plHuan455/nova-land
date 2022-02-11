import React, { useState } from 'react';
import { useQuery } from 'react-query';

import dataCorporateGovernanceList from 'assets/dataDummy/corporateGovernance';
import CorporateGovernance from 'components/templates/CorporateGovernance';
import { getDocumentYearService } from 'services/documents';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';

const CorporateGovernanceTableContainer: React.FC = () => {
  const [indexActive, setIndexActive] = useState(0);

  const handleChangeTab = (e: number) => {
    setIndexActive(e);
  };

  const { data: dataTitleTab } = useQuery(
    'getDocumentYear', () => getDocumentYearService(),
    {
      ...DEFAULT_QUERY_OPTION,
    },
  );

  return (
    <div className="p-corporateGovernance_corporateGovernanceTable">
      <CorporateGovernance
        dataGeneral={dataCorporateGovernanceList}
        dataTabGeneral={dataTitleTab || []}
        tabActive={indexActive}
        handleChangeTab={handleChangeTab}
      />
    </div>
  );
};

export default CorporateGovernanceTableContainer;
