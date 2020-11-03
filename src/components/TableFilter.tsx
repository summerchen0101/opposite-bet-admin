import { Checkbox } from 'antd';
import React from 'react';
import styled from 'styled-components';

interface IProps {
  columns: any[];
  display: boolean;
}
const TableSets: React.FC<IProps> = ({ columns, display, children }) => {
  return (
    <div>
      {display && (
        <div className="filterBar">
          <Checkbox.Group
            options={columns}
            defaultValue={columns.map((t) => t.value)}
          />
        </div>
      )}
      {children}
    </div>
  );
};

export default styled(TableSets)`
  position: relative;
  .filterBar {
    background-color: rgba(255, 255, 255, 0.8);
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100%;
    margin-top: -35px;
    line-height: 40px;
    padding: 0 10px;
  }
`;
