import React from 'react';

import Heading from 'components/atoms/Heading';
import Text from 'components/atoms/Text';
import Carousel from 'components/organisms/Carousel';
import Container from 'components/organisms/Container';

interface EcoSystemsProps { }

const EcoSystems: React.FC<EcoSystemsProps> = () => (
  <div className="t-ecoSystems">
    <Container>
      <div className="t-ecoSystems_title">
        <Heading modifiers={['32x48', '700', 'fontNoto', 'arsenic', 'uppercase']}>HỆ SINH THÁI NOVA</Heading>
      </div>
      <div className="t-ecoSystems_desc">
        <Text modifiers={['400', 'center', 'davysGrey']}>
          Hệ sinh thái Nova Group, mang những tinh hoa Văn Hóa, Ẩm Thực, Giáo
          Dục, Vui Chơi - Giải Trí, Du Lịch Nghỉ Dưỡng, Chăm Sóc Sức Khỏe, Y Tế
          hàng đầu thế giới và Việt Nam về hội tụ tại quần thể các dự án của
          Novaland nhằm phục vụ sự tiện nghi và thịnh vượng cho cộng đồng cư
          dân, tăng giá trị cho các sản phẩm bất động sản và hiệu quả cho các
          nhà đầu tư.
        </Text>
      </div>
      <div className="t-ecoSystems_brands">
        <Carousel>
          a
        </Carousel>
      </div>
    </Container>
  </div>
);

EcoSystems.defaultProps = {};

export default EcoSystems;
