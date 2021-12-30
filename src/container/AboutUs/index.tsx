import React from 'react';

import listDevelopmentHistory from 'assets/dataDummy/developmentHistory';
import { ecoCardList } from 'assets/dataDummy/ecoSystems';
import investmentSectorData from 'assets/dataDummy/investmentSector';
import dataOutstandingProjectCard from 'assets/dataDummy/outstandingProject';
import img from 'assets/images/Banner/banner_home.png';
import bannerImg from 'assets/images/banner2.png';
import imgFieldActivity from 'assets/images/img_field_activity.png';
import Banner from 'components/organisms/Banner';
import DevelopmentHistory from 'components/templates/DevelopmentHistory';
import EcoSystems from 'components/templates/EcoSystems';
import FieldActivity from 'components/templates/FieldActivity';
import InvestmentSector from 'components/templates/InvestmentSector';
import OutstandingProject from 'components/templates/OutstandingProject';
import TransportationInfrastructure from 'components/templates/TransportationInfrastructure';
import VisionMissionValue from 'components/templates/VisionMissionValue';
import { dataList } from 'components/templates/VisionMissionValue/index.stories';

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
    <div className="p-aboutUSContainer_fieldActivity">
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
    </div>
    <div className="p-aboutUSContainer_">
      {/* 15.01 */}
    </div>
    <div />
  </div>
);

export default AboutUSContainer;
