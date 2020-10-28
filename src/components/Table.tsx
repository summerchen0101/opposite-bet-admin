import React from 'react';
import styled from 'styled-components';

const TableWrapper = styled.table`
  font-size: 14px;
`;
const Component: React.FC = ({ children, ...props }) => {
  return (
    <TableWrapper className="table table-sm table-bordered" {...props}>
      {children}
    </TableWrapper>
  );
};

export default Component;
