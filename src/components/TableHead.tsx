import React from 'react';
type ColumnType = {
  title: string;
  dataIndex: string;
  width?: number | string;
  render?: (value: any, row: any) => any;
};
interface IProps {
  columns: ColumnType[];
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
