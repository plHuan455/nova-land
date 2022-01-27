import React, { useEffect, useState } from 'react';

import AwardList, { TabsDataTypes } from 'components/templates/AwardList';
import { getPrizesService, getPrizeYearsService } from 'services/Introduction';
import { PrizeYearsType, PrizesType } from 'services/Introduction/type';
import { getImageURL } from 'utils/functions';

interface AwardListContainerProps {
  title: string;
  desc: string;
}

const AwardListContainer: React.FC<AwardListContainerProps> = ({
  ...props
}) => {
  const [awardListData, setAwardListData] = useState<TabsDataTypes[]>([]);
  const [loading, setLoading] = useState(false);

  const convertDataAwardList = (
    tabList: PrizeYearsType[],
    dataList: PrizesType[],
  ) => {
    if (tabList && dataList) {
      return tabList.map((item) => ({
        id: item.id,
        year: item.year,
        awardList: dataList.map((val) => ({
          src: getImageURL(val.thumbnail),
          alt: val.name,
          desc: val.name,
          awardYear: val.yearId.year,
        })),
      }));
    }
    return [];
  };

  const handleActiveTab = async (index: number) => {
    try {
      setLoading(true);
      const res = await getPrizeYearsService();
      const data = await getPrizesService({
        year_id: index,
      });
      const dataAwardList = convertDataAwardList(res, data);
      setAwardListData(dataAwardList);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const initPage = async () => {
      try {
        setLoading(true);
        const res = await getPrizeYearsService();
        const data = await getPrizesService({
          year_id: res[0].id,
        });
        const dataAwardList = convertDataAwardList(res, data);
        setAwardListData(dataAwardList);
      } finally {
        setLoading(false);
      }
    };

    initPage();
  }, []);

  return (
    <div className="p-aboutUs_awardList pt-100 pb-100">
      <AwardList
        {...props}
        tabsData={awardListData || []}
        handleActiveTab={handleActiveTab}
        loading={loading}
      />
    </div>
  );
};

export default AwardListContainer;
