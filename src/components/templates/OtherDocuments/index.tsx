import React from 'react';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';

export interface dataType {
  pdfImg: string,
  fileName: string,
  href: string;
}

export interface OtherDocumentsProps {
  heading?: string,
  data?: dataType[],
  btnText?: string;
  btnHref?: string;
  target?: string;
}

const OtherDocuments: React.FC<OtherDocumentsProps> = ({
  heading,
  data,
  btnText,
  btnHref,
  target,
}) => (
  <div className="t-otherDocuments">
    <div className="t-otherDocuments_heading">
      <Heading modifiers={['700', '30x42', 'jet', 'center', 'uppercase', 'fontCalibri']} content={heading} />
    </div>
    <Container>
      <div className="t-otherDocuments_content">
        {
          data && data.map((item, idx) => (
            <Link
              key={idx.toString()}
              href={item.href}
              target="_blank"
              useExternal
            >
              <div className="t-otherDocuments_item">
                <div className="t-otherDocuments_icon">
                  <Image ratio="1x1" alt="pdf" src={item.pdfImg || ''} />
                </div>
                <div className="t-otherDocuments_fileName">
                  <Text modifiers={['jet', '400', '18x28', 'fontLexend']}>{item.fileName}</Text>
                </div>
              </div>
            </Link>
          ))
        }
        {
          btnText && (
            <div className="t-otherDocuments_button">
              <Link href={btnHref} target={target}>
                <Button modifiers="outlineSpanishGray">{btnText}</Button>
              </Link>
            </div>
          )
        }
      </div>
    </Container>
  </div>
);

export default OtherDocuments;
