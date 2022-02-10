import React, { useEffect, useMemo, useState } from 'react';

import InvestmentSector from 'components/templates/InvestmentSector';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getRealEstatesAction } from 'store/project';
import { getImageURL } from 'utils/functions';

export interface InvestmentSectorContainerProps {
  title: string;
  isSmall?: boolean;
}

const InvestmentSectorContainer: React.FC<InvestmentSectorContainerProps> = ({
  ...props
}) => {
  const dispatch = useAppDispatch();
  const { realEstatesList } = useAppSelector((state) => state.project);
  const [isLoading, setLoading] = useState(false);

  const investmentSectorData = useMemo(
    () => realEstatesList?.map((item) => ({
      title: item.name,
      desc: item.description,
      thumbnail: getImageURL(item.thumbnail),
      href: item.slug,
      imgLogo: getImageURL(item.icon),
      imgLogoHover: getImageURL(item.iconHover),
      isSmall: true,
      btnText: 'Tìm Hiểu Thêm',
    })),
    [realEstatesList],
  );

  useEffect(() => {
    if (!realEstatesList) {
      setLoading(true);
      dispatch(getRealEstatesAction({}))
        .unwrap()
        .finally(() => setLoading(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="p-aboutUs_investmentSector pt-100">
      <InvestmentSector
        {...props}
        investmentSectorList={investmentSectorData || []}
        loading={isLoading}
      />
    </div>
  );
};

export default InvestmentSectorContainer;
