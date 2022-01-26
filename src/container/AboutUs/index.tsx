import React, { useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';

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

import { getLeadershipService, getPrizesService, getProjectsService } from 'services/Introduction';
import { getLeadershipCategoryAction, getRealEstatesAction } from 'store/Introduction';
import { useAppSelector } from 'store/hooks';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
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
  const dispatch = useDispatch();
  const { realEstatesList, leadershipCategory } = useAppSelector((state) => state.intro);

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

  const [indexLeadershipCategoryActive, setIndexLeadershipCategoryActive] = useState(0);

  const [indexPrize, setIndexPrize] = useState(0);
  console.log(indexPrize);
  const listBanner = useMemo(() => banners.map((item) => ({
    src: getImageURL(item.data.imageDesktop),
    srcTablet: getImageURL(item.data.imageTablet),
    srcMobile: getImageURL(item.data.imageMobile),
  })), [banners]);

  const dataVisionMission = useMemo(() => [
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
    image: getImageURL(item.imageBackground),
  })), [developmentHistoryBlock]);

  const ecoSystemsData = useMemo(() => novaEcosystemBlock.items.map((item) => ({
    fieldImgSrc: getImageURL(item.imageDefault),
    brandList: [
      { imgSrc: getImageURL(item.imageHover) },
    ],
    href: item.link.url,
  })), [novaEcosystemBlock]);

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

  const { data: projectDataHighlight } = useQuery(
    'getProjectsDataFilterByHighlight', () => getProjectsService({
      highlight: true,
    }), {
      ...DEFAULT_QUERY_OPTION,
    },
  );

  const outStandingProjectData = useMemo(() => projectDataHighlight?.map((item) => ({
    imgSrc: getImageURL(item.thumbnail),
    title: item.name,
    href: item.link,
  })), [projectDataHighlight]);

  const { data: leadership } = useQuery(
    ['getLeadership', leadershipCategory, indexLeadershipCategoryActive], () => getLeadershipService({
      leadership_category_slug: leadershipCategory[indexLeadershipCategoryActive].slug,
    }),
  );

  const leadershipListData = useMemo(() => leadershipCategory.map((item) => (
    {
      titleTab: item.name,
      dataTab: leadership?.map((e) => ({
        gender: e.gender,
        name: e.name,
        position: e.position,
        imgSrc: getImageURL(e.thumbnail),
        achievement: e.achievement,
        slogan: e.quotation,
      })) || [],
    }
  )), [leadership, leadershipCategory]);

  const { data: prizesList } = useQuery(
    'getPrizesData', () => getPrizesService(), {
      ...DEFAULT_QUERY_OPTION,
    },
  );

  const tabsData = useMemo(() => prizesList?.map((item) => (
    {
      year: '2017',
      awardList: [{
        src: getImageURL(item.thumbnail),
        alt: item.name,
        desc: item.name,
        awardYear: String(item.yearId.year),
      },
      ],
    }
  )), [prizesList]);

  useEffect(() => {
    dispatch(getRealEstatesAction());
    dispatch(getLeadershipCategoryAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
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
        investmentSectorList={investmentSectorData}
      />
      <TransportationContainer
        imgSrc={getImageURL(transportationInfrastructureBlock.image)}
        title={transportationInfrastructureBlock.titleSection}
        desc={transportationInfrastructureBlock.description}
      />
      <DevelopmentHistoryContainer
        title={developmentHistoryBlock.titleSection}
        description={developmentHistoryBlock.description}
        list={developHistoryList}
      />
      <OutstandingProjectContainer
        title={projectsBlock.titleSection}
        outstandingProjectList={outStandingProjectData || []}
      />
      <ProjectListMapContainer />
      <EcoSystemContainer
        title={novaEcosystemBlock.titleSection}
        desc={novaEcosystemBlock.description}
        dataList={ecoSystemsData}
      />
      <LeadershipContainer
        title={leaderBlock.titleSection}
        tabDataLeadership={leadershipListData || []}
        hasButtonViewAll
        handleChangeTab={(index) => setIndexLeadershipCategoryActive(index)}
      />
      <AwardListContainer
        title={prizeBlock.titleSection}
        desc={prizeBlock.description}
        tabsData={tabsData || []}
        handleActiveTab={(index) => setIndexPrize(index)}
      />
    </>
  );
};

export default AboutUSContainer;
