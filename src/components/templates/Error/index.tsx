/* eslint-disable react/require-default-props */

import React, { useMemo } from 'react';

import error404Img from 'assets/images/errors/error-404.png';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';
import Section from 'components/templates/Section';
import { checkExternalUrl } from 'utils/functions';

export interface ErrorProps {
  statusCode: number;
  titlePage?: string;
  description?: string;
  btnHomeText: string;
  linkButton?: string;
  targetButton?: string;
}

const Error: React.FC<ErrorProps> = ({
  statusCode,
  titlePage,
  description,
  btnHomeText,
  linkButton,
  targetButton,
}) => {
  const { title, desc, imgSrc } = useMemo(() => {
    switch (statusCode) {
      case 403:
        return {
          imgSrc: error404Img,
          title: titlePage || 'Rất tiếc, Quý Khách không thể truy cập trang này.',
          desc:
            description || 'Vui lòng trở về trang chủ hoặc liên hệ với chúng tôi để được hỗ trợ.',
        };
      case 500:
        return {
          imgSrc: error404Img,
          title: titlePage || 'Lỗi máy chủ nội bộ ',
          desc:
            description || 'Rất tiếc, một vài lỗi không mong muốn đã xảy ra, </br> chúng tôi đang cố gắng khắc phục sự cố. Quý Khách xin vui lòng thử lại sau.',
        };
      case 503:
        return {
          imgSrc: error404Img,
          title: titlePage || 'Rất tiếc, hệ thống đang được bảo trì',
          desc:
            description || 'Trang thông tin Quý Khách tìm kiếm đang trong quá trình bảo trì, </br> vui lòng thử lại sau.',
        };

      default:
        return {
          imgSrc: error404Img,
          title: titlePage || 'Rất tiếc, chúng tôi không tìm thấy trang này',
          desc:
            description || 'Vui lòng trở về trang chủ hoặc liên hệ với chúng tôi để được hỗ trợ.',
        };
    }
  }, [description, statusCode, titlePage]);
  return (
    <div className="t-error">
      <Section>
        <Container>
          <div className="t-error_imgError">
            <Image ratio="641x211" src={imgSrc} alt="imageError" />
          </div>
          <div className="t-error_wrapContent">
            <Heading modifiers={['jet', '30x37-5', '600', 'center']}>
              {title}
            </Heading>
            <div className="t-error_desc">
              <Text modifiers={['jet', '20x28', '400', 'center']}>
                {desc}
              </Text>
            </div>
            <div className="t-error_btn">
              <Link
                useExternal={checkExternalUrl(linkButton)}
                href={linkButton}
                target={targetButton}
              >
                <Button>
                  <Text modifiers={['700', '18x28']}>{btnHomeText}</Text>
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Error;
