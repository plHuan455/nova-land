import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';

// import investmentSectorData from 'assets/dataDummy/investmentSector';
import Animate from 'components/organisms/Animate';
import InvestmentSector from 'components/templates/InvestmentSector';
import Section from 'components/templates/Section';
import { getRealEstatesAction } from 'store/home';
import { useAppSelector } from 'store/hooks';
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
  const dispatch = useDispatch();
  const { realEstatesList } = useAppSelector((state) => state.home);
  const investmentSectorData = useMemo(() => realEstatesList?.map((item) => (
    {
      title: item.name,
      desc: item.description,
      thumbnail: getImageURL(item.thumbnail),
      href: item.slug,
      imgLogo: getImageURL(item.icon),
      imgLogoHover: getImageURL(item.iconHover),
      isSmall: true,
      btnText: 'Tìm Hiểu Thêm',
    }
  )), [realEstatesList]);

  useEffect(() => {
    dispatch(getRealEstatesAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Animate type="goUp">
      <div className="p-home_investSector">
        <Section>
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
