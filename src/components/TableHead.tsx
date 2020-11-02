import React from 'react';
import { IColumn } from './types';
interface IProps {
  columns: IColumn[];
}
const Component: React.FC<IProps> = ({ columns }) => {
  return (
    <thead style={{ backgroundColor: '#fafafa' }}>
      <tr>
        {columns.map((t, i) => (
          <th key={i} style={{ width: t.width }}>
            {t.title}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default Component;
