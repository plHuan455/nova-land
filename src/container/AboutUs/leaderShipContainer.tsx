import React, { useEffect, useState } from 'react';

import Leadership, { dataTabsLeadershipType } from 'components/templates/Leadership';
import { getLeadershipCategoryService, getLeadershipService } from 'services/Introduction';
import { LeadershipCategoryDataTypes } from 'services/Introduction/type';
import { getImageURL } from 'utils/functions';

interface LeadershipContainerProps {
  title: string;
  hasButtonViewAll: boolean;
}

const LeadershipContainer: React.FC<LeadershipContainerProps> = ({
  ...props
}) => {
  const [indexLeadershipCategoryActive, setIndexLeadershipCategoryActive] = useState(0);
  const [leaderShipCategory, setLeaderShipCategory] = useState<LeadershipCategoryDataTypes[]>([]);
  const [leaderShipData, setLeaderShipData] = useState<dataTabsLeadershipType[]>();
  const [isLoading, setLoading] = useState(false);

  const getLeadershipList = async () => {
    try {
      setLoading(true);
      const categoryList = await getLeadershipCategoryService();
      setLeaderShipCategory(categoryList);
      if (categoryList.length) {
        const leaderShipRes = await getLeadershipService({
          leadership_category_slug: categoryList[indexLeadershipCategoryActive].slug,
        });

        const convertData = categoryList.map((item) => ({
          titleTab: item.name,
          dataTab:
          leaderShipRes?.map((e) => ({
            gender: e.gender,
            name: e.name,
            position: e.position,
            imgSrc: getImageURL(e.thumbnail),
            achievement: e.achievement,
            slogan: e.quotation,
          })) || [],
        }));
        setLeaderShipData(convertData);
      }
    } catch {
      // Empty
    } finally {
      setLoading(false);
    }
  };

  const changeTab = async (index: number) => {
    setIndexLeadershipCategoryActive(index);
    try {
      setLoading(true);
      if (leaderShipCategory.length) {
        const leaderShipRes = await getLeadershipService({
          leadership_category_slug: leaderShipCategory[index].slug,
        });

        const convertData = leaderShipCategory.map((item) => ({
          titleTab: item.name,
          dataTab:
          leaderShipRes?.map((e) => ({
            gender: e.gender,
            name: e.name,
            position: e.position,
            imgSrc: getImageURL(e.thumbnail),
            achievement: e.achievement,
            slogan: e.quotation,
          })) || [],
        }));
        setLeaderShipData(convertData);
      }
    } catch {
      // Empty
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLeadershipList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="p-aboutUs_leadership">
      <Leadership
        {...props}
        tabDataLeadership={leaderShipData || []}
        handleChangeTab={changeTab}
        loading={isLoading}
      />
    </div>
  );
};

export default LeadershipContainer;
