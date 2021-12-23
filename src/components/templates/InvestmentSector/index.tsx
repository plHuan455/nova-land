import React from 'react';

interface InvestmentSectorProps {
}

const InvestmentSector: React.FC<InvestmentSectorProps> = ({ children }) => (
  <div>{children}</div>
);

InvestmentSector.defaultProps = {
};

export default InvestmentSector;
