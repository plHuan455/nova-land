import React from 'react';

import LeaderShipContainer from './leaderShipContainer';
import ProjectListMapContainer from './projectListMapContainer';

import tabsData from 'assets/dataDummy/awardList';
import listDevelopmentHistory from 'assets/dataDummy/developmentHistory';
import { ecoCardList } from 'assets/dataDummy/ecoSystems';
import investmentSectorData from 'assets/dataDummy/investmentSector';
import dataOutstandingProjectCard from 'assets/dataDummy/outstandingProject';
import img from 'assets/images/Banner/banner_home.png';
import img3 from 'assets/images/assist_destination.png';
import bannerImg from 'assets/images/banner2.png';
import imgFieldActivity from 'assets/images/img_field_activity.png';
import img2 from 'assets/images/infrastructure.png';
import img1 from 'assets/images/real_estate.png';
import Banner from 'components/organisms/Banner';
import AwardList from 'components/templates/AwardList';
import DevelopmentHistory from 'components/templates/DevelopmentHistory';
import EcoSystems from 'components/templates/EcoSystems';
import FieldActivity from 'components/templates/FieldActivity';
import InvestmentSector from 'components/templates/InvestmentSector';
import OutstandingProject from 'components/templates/OutstandingProject';
import TransportationInfrastructure from 'components/templates/TransportationInfrastructure';
import VisionMissionValue from 'components/templates/VisionMissionValue';

export const dataList = [
  {
    title: 'TẦM NHÌN',
    desc: 'Tập đoàn kinh tế hàng đầu trong các lĩnh vực',
    dataList: [
      {
        src: img1,
        title: 'Bất động sản',
      },
      {
        src: img2,
        title: 'Phát triển hạ tầng',
      },
      {
        src: img3,
        title: 'Kiến tạo điểm đến',
      },
    ],
  },
  {
    title: 'SỨ MỆNH',
    desc: 'Tập đoàn tập trung cho các giá trị cộng đồng',
    dataList: [
      {
        src: img1,
        title: 'Bất động sản',
      },
      {
        src: img2,
        title: 'Phát triển hạ tầng',
      },
      {
        src: img3,
        title: 'Kiến tạo điểm đến',
      },
    ],
  },
  {
    title: 'GIÁ TRỊ CỐT LÕI',
    desc: 'Chìa khoá của sự Thành Công',
    dataList: [
      {
        src: img1,
        title: 'Bất động sản',
      },
      {
        src: img2,
        title: 'Phát triển hạ tầng',
      },
      {
        src: img3,
        title: 'Kiến tạo điểm đến',
      },
    ],
  },
];

interface AboutUSContainerProps {
}

const AboutUSContainer: React.FC<AboutUSContainerProps> = () => (
  <div className="p-aboutUSContainer">
    <div className="p-aboutUSContainer_banner">
      <Banner src={img} />
    </div>
    <div className="p-aboutUSContainer_visionMission">
      <VisionMissionValue dataList={dataList} />
    </div>
    <div className="p-aboutUSContainer_fieldActivity pt-100">
      <FieldActivity
        title="LĨNH VỰC HOẠT ĐỘNG"
        imgSrc={imgFieldActivity}
      />
    </div>
    <div className="p-aboutUSContainer_investmentSector">
      <InvestmentSector
        title="BẤT ĐỘNG SẢN"
        investmentSectorList={investmentSectorData}
        isSmall
      />
    </div>
    <div className="p-aboutUSContainer_transportationInfrastructure">
      <TransportationInfrastructure
        imgSrc={bannerImg}
        title="HẠ TẦNG GIAO THÔNG"
        desc="Nâng cấp, phát triển hạ tầng giao thông tại nơi có dự án nhằm gia tăng tính kết nối vào hạ tầng giao thông trọng điểm quốc gia."
      />
    </div>
    <div className="p-aboutUSContainer_developmentHistory">
      <DevelopmentHistory
        list={listDevelopmentHistory}
        title="LỊCH SỬ PHÁT TRIỂN"
        description="Trên hành trình trở thành nhà Đầu tư - Phát triển bất động sản
      uy tín hàng đầu Việt Nam, bằng niềm đam mê, sự tập trung và kiên định thực hiện sứ mệnh của mình,
      Novaland đã và đang đa dạng  hóa sản phẩm ở trung tâm TPHCM,
      đô thị vệ tinh và đô thị du lịch nghỉ dưỡng ở các tỉnh thành trọng điểm,
      kiến tạo nên những cộng đồng tinh hoa, thu hút khách du lịch trong và ngoài nước."
      />
    </div>
    <div className="p-aboutUSContainer">
      <OutstandingProject
        title="DỰ ÁN NỔI BẬT"
        outstandingProjectList={dataOutstandingProjectCard}
      />
    </div>
    <div className="p-aboutUSContainer_">
      {/* 31.02 */}
      <ProjectListMapContainer />
    </div>
    <div className="p-aboutUSContainer_">
      <EcoSystems
        title="HỆ SINH THÁI NOVA"
        desc="Hệ sinh thái Nova Group, mang những tinh hoa Văn Hóa,
              Ẩm Thực, Giáo Dục, Vui Chơi - Giải Trí, Du Lịch Nghỉ Dưỡng,
              Chăm Sóc Sức Khỏe, Y Tế hàng đầu thế giới và Việt Nam
              về hội tụ tại quần thể các dự án của Novaland nhằm phục vụ
              sự tiện nghi và thịnh vượng cho cộng đồng cư dân,
              tăng giá trị cho các sản phẩm bất động sản và hiệu quả cho các nhà đầu tư."
        dataList={ecoCardList}
      />
    </div>
    <div className="p-aboutUSContainer_">
      {/* 10.01 */}
      <LeaderShipContainer />
    </div>
    <div className="p-aboutUSContainer_awardList">
      <AwardList
        title="GIẢI THƯỞNG"
        desc="Những thành tựu của Tập đoàn Novaland được ghi nhận, vinh danh qua nhiều giải thưởng, danh hiệu uy tín trong và ngoài nước; thể hiện nỗ lực không ngừng trong việc quy hoạch đồng bộ BĐS tại các vị trí chiến lược, kiến tạo cộng đồng nhân văn tiên tiến với môi trường sống tiện nghi, hiện đại, góp phần vào sự phát triển bền vững của xã hội."
        tabsData={tabsData}
      />
    </div>
    <div />
  </div>
);

export default AboutUSContainer;
