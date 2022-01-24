import React from 'react';

import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Animate from 'components/organisms/Animate';

export interface InfoType {
  imgSrc: string;
  content: string;
}

interface InfoProductProps {
  title?: string;
  imgSrc?: string;
  listInfo?: Array<InfoType>;
}

const InfoProduct: React.FC<InfoProductProps> = ({ title, imgSrc, listInfo }) => (
  <Animate type="goUp">
    <div className="m-infoproduct">
      <div className="m-infoproduct_wrapcontent">
        <Text modifiers={['16x24', '400', 'jet']}>
          {title}
        </Text>
        <div className="m-infoproduct_info">
          {listInfo?.map((item, idx) => (
            <div className="m-infoproduct_detail" key={`info-${idx.toString()}`}>
              <div className="m-infoproduct_imgdetail">
                <Image ratio="1x1" src={item.imgSrc} />
              </div>
              <Text modifiers={['16x24', '400', 'jet']}>
                {item.content}
              </Text>
            </div>
          ))}
        </div>
      </div>
      <div className="m-infoproduct_wrapimg">
        <Image ratio="612x340" src={imgSrc || ''} />
      </div>
    </div>
  </Animate>
);

InfoProduct.defaultProps = {
  title: undefined,
  imgSrc: undefined,
  listInfo: undefined,
};

export default InfoProduct;
