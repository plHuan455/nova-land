import React, {
  useState,
  useMemo,
  useCallback,
  useEffect,
} from 'react';
import { useQuery } from 'react-query';

import Leadership, { LeadershipDetailProps } from 'components/templates/Leadership';
import {
  getLeadershipCategoryService,
  getLeadershipService,
} from 'services/Introduction';
import { useAppSelector } from 'store/hooks';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { getImageURL } from 'utils/functions';

interface LeadershipContainerProps {
  title: string;
  hasButtonViewAll: boolean;
}

const LeadershipContainer: React.FC<LeadershipContainerProps> = ({
  ...props
}) => {
  const [indexActive, setIndexActive] = useState(0);
  const [isViewMore, setIsViewMore] = useState(false);
  const language = useAppSelector((state) => state.system.language);
  const [currentLeader, setCurrentLeader] = useState<LeadershipDetailProps>({
    gender: '',
    name: '',
    position: '',
    imgSrc: '',
    achievement: '',
    slogan: '',
  });

  const { data: categoryListData, isLoading: isLoadingCate } = useQuery(
    ['getLeadershipCategory', language], () => getLeadershipCategoryService(),
    {
      ...DEFAULT_QUERY_OPTION,
    },
  );

  const { data: leaderData, isLoading } = useQuery(
    ['getLeadershipData', indexActive, language], () => getLeadershipService({
      leadership_category_slug: categoryListData && categoryListData[indexActive]?.slug,
    }),
    {
      ...DEFAULT_QUERY_OPTION,
      enabled: !!categoryListData,
    },
  );

  const leaderShipDataList = useMemo(() => {
    if (leaderData && leaderData?.length > 0) {
      return leaderData?.map((e) => ({
        gender: e.gender,
        name: e.name,
        position: e.position,
        imgSrc: getImageURL(e.thumbnail),
        achievement: e.achievement,
        slogan: e.quotation,
      }));
    }
    return [];
  }, [leaderData]);

  const leaderShipData = isViewMore ? leaderShipDataList : leaderShipDataList.slice(0, 3);

  useEffect(() => {
    if (leaderShipDataList) {
      setCurrentLeader(leaderShipDataList[0]);
    }
  }, [leaderShipDataList]);

  const handleChangeTab = (index: number) => {
    setIsViewMore(false);
    setIndexActive(index);
  };

  const handleChangeLeader = useCallback((index: number) => {
    if (leaderShipDataList) {
      setCurrentLeader(leaderShipDataList[index]);
    }
  }, [leaderShipDataList]);

  return (
    <div className="p-aboutUs_leadership">
      <Leadership
        {...props}
        tabCategoryLeadership={categoryListData || []}
        handleChangeTab={handleChangeTab}
        loading={isLoadingCate || isLoading}
        tabDataLeaderShip={leaderShipData || []}
        handleClickViewAll={() => setIsViewMore(!isViewMore)}
        hasButtonViewAll={leaderShipDataList.length > 3}
        isViewMore={isViewMore}
        handleChangeLeader={handleChangeLeader}
        currentLeader={currentLeader}
        leaderShipList={leaderShipDataList}
      />
    </div>
  );
};

export default LeadershipContainer;
