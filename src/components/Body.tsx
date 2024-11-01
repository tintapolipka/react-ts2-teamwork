import React, { ReactNode } from 'react';

interface BodyProps {
  children?: ReactNode;
}

const Body: React.FC<BodyProps> = ({ children }) => {
  return <div className='container'>{children}</div>;
};

export default Body;