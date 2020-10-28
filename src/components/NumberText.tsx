import React from 'react';
import numeral from 'numeral';

const PageSearchBar: React.FC<{ children: number }> = ({
  children,
  ...props
}) => {
  return (
    <span {...props}>
      {children !== 0 ? numeral(children).format('0,0.00') : 0}
    </span>
  );
};

export default PageSearchBar;
