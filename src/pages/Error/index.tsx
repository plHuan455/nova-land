import React from 'react';

import ErrorContainer from 'container/Error';

const Error: React.FC = (props) => (
  <div className="p-error"><ErrorContainer {...props} /></div>
);

export default Error;
