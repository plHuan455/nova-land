import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import InvestmentSector from 'components/templates/InvestmentSector';
import Section from 'components/templates/Section';
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
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const language = useAppSelector((state) => state.system.language);
  const { realEstatesList } = useAppSelector((state) => state.project);
  const [isLoading, setLoading] = useState(false);

  const investmentSectorData = useMemo(
    () => realEstatesList?.map((item) => ({
      title: item.name,
      desc: item.description,
      thumbnail: getImageURL(item.thumbnail),
      href: item.link?.url,
      imgLogo: getImageURL(item.icon),
      imgLogoHover: getImageURL(item.iconHover),
      isSmall: true,
      btnText: t('general.learn_more'),
      target: item.link?.target,
    })),
    [t, realEstatesList],
  );

  useEffect(() => {
    setLoading(true);
    dispatch(getRealEstatesAction({}))
      .unwrap()
      .finally(() => setLoading(false));
  }, [dispatch, language]);

  return (
    <div className="p-aboutUs_investmentSector">
      <Section>
        <InvestmentSector
          {...props}
          investmentSectorList={investmentSectorData || []}
          loading={isLoading}
        />
      </Section>
    </div>
  );
};

export default InvestmentSectorContainer;
