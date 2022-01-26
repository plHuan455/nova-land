import React from 'react';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';

export interface dataType {
  pdfImg: string,
  fileName: string,
}

export interface OtherDocumentsProps {
  heading?: string,
  data?: dataType[],
  btnText?: string;
  handleSeeMore?: () => void;
}

const OtherDocuments: React.FC<OtherDocumentsProps> = ({
  heading,
  data,
  btnText,
  handleSeeMore,
}) => (
  <div className="t-otherDocuments">
    <div className="t-otherDocuments_heading">
      <Heading modifiers={['600', '30x42', 'jet', 'center', 'uppercase', 'fontNoto']} content={heading} />
    </div>
    <Container>
      <div className="t-otherDocuments_content">
        {
          data && data.map((item, idx) => (
            <div key={idx.toString()} className="t-otherDocuments_item">
              <div className="t-otherDocuments_icon">
                <Image ratio="1x1" alt="pdf" src={item.pdfImg || ''} />
              </div>
              <div className="t-otherDocuments_fileName">
                <Text modifiers={['jet', '400', '18x28', 'fontLexend']}>{item.fileName}</Text>
              </div>
            </div>
          ))
        }
        <div className="t-otherDocuments_button" onClick={handleSeeMore}>
          <Button modifiers="outlineSpanishGray">{btnText}</Button>
        </div>
      </div>
    </Container>
  </div>
);

export default OtherDocuments;
