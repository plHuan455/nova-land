import React from 'react';
import { Col, Row, ColProps } from 'react-bootstrap';

import mapModifiers from 'utils/functions';

interface ContainerProps {
  fullScreen?: boolean;
  noPaddingRight?: boolean;
  noPaddingLeft?: boolean;
}

export const CustomRow: React.FC = ({ children }) => (
  <Row className="o-container_row">{children}</Row>
);

export const CustomCol: React.FC<ColProps> = ({ children, ...props }) => (
  <Col className="o-container_col" {...props}>
    {children}
  </Col>
);

const Container: React.FC<ContainerProps> = ({
  fullScreen, noPaddingRight, noPaddingLeft, children,
}) => (
  <div className={`container ${mapModifiers('o-container',
    fullScreen && 'fullscreen',
    noPaddingRight && 'noPaddingRight',
    noPaddingLeft && 'noPaddingLeft')}`}
  >
    {children}

  </div>
);

Container.defaultProps = {
  fullScreen: false,
  noPaddingRight: false,
  noPaddingLeft: false,
};

export default Container;
