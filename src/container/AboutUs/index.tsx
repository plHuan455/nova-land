import React, { useMemo } from 'react';

import AwardListContainer from './awardListContainer';
import DevelopmentHistoryContainer from './developmentHistoryContainer';
import EcoSystemContainer from './ecoSystemContainer';
import FieldActivityContainer from './fieldActivityContainer';
import HeroBannerContainer from './heroBannerContainer';
import InvestmentSectorContainer from './investmentSectorContainer';
import LeadershipContainer from './leaderShipContainer';
import OutStandingNumbersContainer from './outStandingNumbersContainer';
import OutstandingProjectContainer from './outstandingProjectContainer';
import ProjectListMapContainer from './projectListMapContainer';
import TransportationContainer from './transportationContainer';
import VisionMissionValueContainer from './visionMissionValueContainer';

import HelmetContainer from 'container/helmet';
import { getBlockData, getImageURL } from 'utils/functions';

type Icon = {
  icon: string,
  textIcon: string,
}

type IntroductionItem = {
  title: string,
  icon1: Icon,
  icon2: Icon,
  icon3: Icon,
  description: string
}

type Introduction = {
  role: IntroductionItem,
  vision: IntroductionItem,
  mission: IntroductionItem,
}

type Numbers = {
  items: {
    textNumber: string,
    descriptionNumber: string,
  }[],
  titleSection: string,
}

type FieldActivity = {
  image: string,
  titleSection: string,
}

type RealEstate = {
  titleSection: string,
}

type TransportationInfrastructure = {
  image: string,
  description: string,
  titleSection: string,
}

type DevelopmentHistory = {
  items: {
    imageTime: string,
    textTimes: string,
    description: string,
    imageBackground: string,
  }[],
  description: string,
  titleSection: string,
  title: string;
}

type Projects = {
  titleSection: string,
}

type NovaEcosystem = {
  items: {
    link: {
      url: string,
      text: string,
      target: string,
    },
    imageHover: string,
    imageDefault: string,
  }[],
  description: string,
  titleSection: string,
}

type Leader = {
  titleSection: string
}

type Prize = {
  description: string,
  titleSection: string,
}

export type AboutUsBlock = Introduction | Numbers |
  FieldActivity | RealEstate | TransportationInfrastructure |
  DevelopmentHistory | Projects | NovaEcosystem | Leader | Prize;

const AboutUSContainer: React.FC<BasePageData<AboutUsBlock>> = ({
  banners,
  blocks,
}) => {
  const introductionBlock = useMemo(() => getBlockData('introduction', blocks) as Introduction, [blocks]);
  const numbersBlock = useMemo(() => getBlockData('numbers', blocks) as Numbers, [blocks]);
  const fieldActivityBlock = useMemo(() => getBlockData('field_activity', blocks) as FieldActivity,
    [blocks]);
  const realEstateBlock = useMemo(() => getBlockData('real_estate', blocks) as RealEstate,
    [blocks]);
  const transportationInfrastructureBlock = useMemo(() => getBlockData('transportation_infrastructure', blocks) as TransportationInfrastructure,
    [blocks]);
  const developmentHistoryBlock = useMemo(() => getBlockData('development_history', blocks) as DevelopmentHistory,
    [blocks]);
  const projectsBlock = useMemo(() => getBlockData('project', blocks) as Projects,
    [blocks]);
  const novaEcosystemBlock = useMemo(() => getBlockData('nova_ecosystem', blocks) as NovaEcosystem,
    [blocks]);
  const leaderBlock = useMemo(() => getBlockData('leader', blocks) as Leader,
    [blocks]);
  const prizeBlock = useMemo(() => getBlockData('prize', blocks) as Prize,
    [blocks]);
  const featurProjectsBlock = useMemo(() => getBlockData('featured_projects', blocks) as Projects,
    [blocks]);

  const listBanner = useMemo(() => banners.map((item) => ({
    src: getImageURL(item.data.imageDesktop),
    srcTablet: getImageURL(item.data.imageTablet),
    srcMobile: getImageURL(item.data.imageMobile),
  })), [banners]);

  const dataVisionMission = useMemo(() => [
    {
      title: introductionBlock.mission.title,
      desc: introductionBlock.mission.description,
      dataList: [
        {
          src: getImageURL(introductionBlock.mission.icon1.icon),
          title: introductionBlock.mission.icon1.textIcon,
        },
        {
          src: getImageURL(introductionBlock.mission.icon2.icon),
          title: introductionBlock.mission.icon2.textIcon,
        },
        {
          src: getImageURL(introductionBlock.mission.icon3.icon),
          title: introductionBlock.mission.icon3.textIcon,
        },
      ],
    },
    {
      title: introductionBlock.role.title,
      desc: introductionBlock.role.description,
      dataList: [
        {
          src: getImageURL(introductionBlock.role.icon1.icon),
          title: introductionBlock.role.icon1.textIcon,
        },
        {
          src: getImageURL(introductionBlock.role.icon2.icon),
          title: introductionBlock.role.icon2.textIcon,
        },
        {
          src: getImageURL(introductionBlock.role.icon3.icon),
          title: introductionBlock.role.icon3.textIcon,
        },
      ],
    },
    {
      title: introductionBlock.vision.title,
      desc: introductionBlock.vision.description,
      dataList: [
        {
          src: getImageURL(introductionBlock.vision.icon1.icon),
          title: introductionBlock.vision.icon1.textIcon,
        },
        {
          src: getImageURL(introductionBlock.vision.icon2.icon),
          title: introductionBlock.vision.icon2.textIcon,
        },
        {
          src: getImageURL(introductionBlock.vision.icon3.icon),
          title: introductionBlock.vision.icon3.textIcon,
        },
      ],
    },
  ], [introductionBlock]);

  const numbersList = useMemo(() => numbersBlock.items.map((item) => ({
    number: item.textNumber,
    desc: item.descriptionNumber,
  })), [numbersBlock]);

  const developHistoryList = useMemo(() => developmentHistoryBlock.items.map((item) => ({
    year: item.textTimes,
    description: item.description,
    image: getImageURL(item.imageTime),
    imgBackground: getImageURL(item.imageBackground),
  })), [developmentHistoryBlock]);

  const ecoSystemsData = useMemo(() => novaEcosystemBlock.items.map((item) => ({
    fieldImgSrc: getImageURL(item.imageDefault),
    brandImage: getImageURL(item.imageHover),
    href: item.link.url,
  })), [novaEcosystemBlock]);

  return (
    <>
      <HelmetContainer />
      <HeroBannerContainer
        list={listBanner}
      />
      <VisionMissionValueContainer dataList={dataVisionMission} />
      <OutStandingNumbersContainer
        title={numbersBlock.titleSection}
        dataList={numbersList}
      />
      <FieldActivityContainer
        title={fieldActivityBlock.titleSection}
        imgSrc={getImageURL(fieldActivityBlock.image)}
      />
      <InvestmentSectorContainer
        isSmall
        title={realEstateBlock.titleSection}
      />
      <TransportationContainer
        imgSrc={getImageURL(transportationInfrastructureBlock.image)}
        title={transportationInfrastructureBlock.titleSection}
        desc={transportationInfrastructureBlock.description}
      />
      <DevelopmentHistoryContainer
        title={developmentHistoryBlock.title}
        description={developmentHistoryBlock.description}
        list={developHistoryList}
      />
      <OutstandingProjectContainer
        title={featurProjectsBlock.titleSection}
      />
      <ProjectListMapContainer title={projectsBlock.titleSection} />
      <EcoSystemContainer
        title={novaEcosystemBlock.titleSection}
        desc={novaEcosystemBlock.description}
        dataList={ecoSystemsData}
      />
      <LeadershipContainer
        title={leaderBlock.titleSection}
        hasButtonViewAll
      />
      <AwardListContainer
        title={prizeBlock.titleSection}
        desc={prizeBlock.description}
      />
    </>
  );
};

export default AboutUSContainer;
