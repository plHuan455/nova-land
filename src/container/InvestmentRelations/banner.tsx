import React from 'react';

import img from 'assets/images/banner3.png';
import Animate from 'components/organisms/Animate';
import Banner from 'components/organisms/Banner';

const BannerContainer: React.FC = () => (
  <Animate type="goUp">
    <div className="p-investmentRelations_Banner">
      <Banner src={img} />
    </div>
  </Animate>
);

export default BannerContainer;
