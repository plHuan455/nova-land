import React, { useMemo } from 'react';

import EcoSystemContainer, { EcoSystemTypes } from './ecoSystemContainer';
import FeaturedProjectsContainer, { FeaturedProjectsTypes } from './featuredProjectsContainer';
import HeroBannerContainer from './heroBannerContainer';
import InvestmentSectorContainer, { InvestmentSectorTypes } from './investmentSectorContainer';
import NewsContainer, { NewsTypes } from './newsContainer';
import OutStandingNumbersContainer, { OutStandingNumbersTypes } from './outStandingNumbersContainer';
import ProjectMapContainer, { ProjectMapTypes } from './projectMapContainer';
import ShareHolderRelationsContainer, { ShareHolderRelationsTypes } from './sharesHolderRelationsContainer';
import TransportationContainer, { TransportationTypes } from './transportationinfrastructureContainer';

import HelmetContainer from 'container/helmet';
import getBlockData from 'helpers/pageData';

export type HomeData =
  | OutStandingNumbersTypes
  | InvestmentSectorTypes
  | TransportationTypes
  | ProjectMapTypes
  | EcoSystemTypes
  | FeaturedProjectsTypes
  | ShareHolderRelationsTypes
  | NewsTypes;

const HomeContainer: React.FC<BasePageData<HomeData>> = ({
  blocks,
  banners,
}) => {
  const outStandingNumbersBlock = useMemo(
    () => getBlockData('numbers', blocks) as OutStandingNumbersTypes,
    [blocks],
  );

  const investmentSectorBlock = useMemo(
    () => getBlockData('real_estate', blocks) as InvestmentSectorTypes,
    [blocks],
  );

  const transportationBlock = useMemo(
    () => getBlockData('transportation_infrastructure', blocks) as TransportationTypes,
    [blocks],
  );

  const projectMapBlock = useMemo(
    () => getBlockData('project', blocks) as ProjectMapTypes,
    [blocks],
  );

  const ecoSystemBlock = useMemo(
    () => getBlockData('nova_ecosystem', blocks) as EcoSystemTypes,
    [blocks],
  );

  const featuredProjectsBlock = useMemo(
    () => getBlockData('featured_projects', blocks) as FeaturedProjectsTypes,
    [blocks],
  );

  const shareHolderRelationsBlock = useMemo(
    () => getBlockData('shareholders_relations', blocks) as ShareHolderRelationsTypes,
    [blocks],
  );

  const newsBlock = useMemo(
    () => getBlockData('news', blocks) as NewsTypes,
    [blocks],
  );

  return (
    <>
      <HelmetContainer />
      <HeroBannerContainer banners={banners} />
      <OutStandingNumbersContainer blocks={outStandingNumbersBlock} />
      <InvestmentSectorContainer blocks={investmentSectorBlock} />
      <TransportationContainer blocks={transportationBlock} />
      <ProjectMapContainer blocks={projectMapBlock} />
      <EcoSystemContainer blocks={ecoSystemBlock} />
      <FeaturedProjectsContainer blocks={featuredProjectsBlock} />
      <ShareHolderRelationsContainer blocks={shareHolderRelationsBlock} />
      <NewsContainer blocks={newsBlock} />
    </>
  );
};

export default HomeContainer;
