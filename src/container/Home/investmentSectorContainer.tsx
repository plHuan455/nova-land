import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import Animate from 'components/organisms/Animate';
import InvestmentSector from 'components/templates/InvestmentSector';
import Section from 'components/templates/Section';
import { useAppSelector } from 'store/hooks';
import { getRealEstatesAction } from 'store/project';
import { getImageURL } from 'utils/functions';

export interface InvestmentSectorTypes {
  titleSection: string;
}

interface InvestmentSectorBlock {
  blocks: InvestmentSectorTypes;
}

const InvestmentSectorContainer: React.FC<InvestmentSectorBlock> = ({
  blocks,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { realEstatesList } = useAppSelector((state) => state.project);
  const language = useAppSelector((state) => state.system.language);

  const investmentSectorData = useMemo(
    () => realEstatesList?.map((item) => ({
      title: item.name,
      desc: item.description,
      thumbnail: getImageURL(item.thumbnail),
      href: 'linh-vuc-hoat-dong',
      imgLogo: getImageURL(item.icon),
      imgLogoHover: getImageURL(item.iconHover),
      isSmall: true,
      btnText: t('general.learn_more'),
    })),
    [t, realEstatesList],
  );

  useEffect(() => {
    dispatch(getRealEstatesAction({}));
  }, [dispatch, language]);

  return (
    <Animate type="goUp">
      <div className="p-home_investSector">
        <Section modifiers="noPb">
          <InvestmentSector
            title={blocks.titleSection}
            investmentSectorList={investmentSectorData || []}
            isSmall
          />
        </Section>
      </div>
    </Animate>
  );
};

export default InvestmentSectorContainer;
