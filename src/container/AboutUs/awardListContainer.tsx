import React, { useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import AwardList from 'components/templates/AwardList';
import { getPrizesService } from 'services/Introduction';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { getImageURL } from 'utils/functions';

interface AwardListContainerProps {
  title: string;
  desc: string;
}

const AwardListContainer: React.FC<AwardListContainerProps> = ({
  ...props
}) => {
  const [indexPrize, setIndexPrize] = useState(0);

  console.log(indexPrize);
  const { data: prizesList } = useQuery(
    'getPrizesData',
    () => getPrizesService(),
    {
      ...DEFAULT_QUERY_OPTION,
    },
  );

  const tabsData = useMemo(
    () => prizesList?.map((item) => ({
      year: '2017',
      awardList: [
        {
          src: getImageURL(item.thumbnail),
          alt: item.name,
          desc: item.name,
          awardYear: String(item.yearId.year),
        },
      ],
    })),
    [prizesList],
  );
  return (
    <div className="p-aboutUs_awardList pt-100 pb-100">
      <AwardList
        {...props}
        tabsData={tabsData || []}
        handleActiveTab={(index) => setIndexPrize(index)}
      />
    </div>
  );
};

export default AwardListContainer;
