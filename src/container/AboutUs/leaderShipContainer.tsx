import React, { useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import Leadership from 'components/templates/Leadership';
import { getLeadershipService } from 'services/Introduction';
import { useAppSelector } from 'store/hooks';
import { getImageURL } from 'utils/functions';

interface LeadershipContainerProps {
  title: string;
  hasButtonViewAll: boolean;
}

const LeadershipContainer: React.FC<LeadershipContainerProps> = ({
  ...props
}) => {
  const { leadershipCategory } = useAppSelector((state) => state.intro);
  const [indexLeadershipCategoryActive, setIndexLeadershipCategoryActive] = useState(0);
  const { data: leadership } = useQuery(
    ['getLeadership', leadershipCategory, indexLeadershipCategoryActive],
    () => getLeadershipService({
      leadership_category_slug:
          leadershipCategory[indexLeadershipCategoryActive].slug,
    }),
  );

  const leadershipListData = useMemo(
    () => leadershipCategory.map((item) => ({
      titleTab: item.name,
      dataTab:
          leadership?.map((e) => ({
            gender: e.gender,
            name: e.name,
            position: e.position,
            imgSrc: getImageURL(e.thumbnail),
            achievement: e.achievement,
            slogan: e.quotation,
          })) || [],
    })),
    [leadership, leadershipCategory],
  );

  return (
    <div className="p-aboutUs_leadership">
      <Leadership
        {...props}
        tabDataLeadership={leadershipListData || []}
        handleChangeTab={(index) => setIndexLeadershipCategoryActive(index)}
      />
    </div>
  );
};

export default LeadershipContainer;
