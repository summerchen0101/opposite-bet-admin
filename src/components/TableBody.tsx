import React from 'react';
type ColumnType = {
  title: string;
  dataIndex: string;
  width?: number | string;
  render?: (value: any, row: any) => any;
};
interface IProps {
  columns: ColumnType[];
  title?: string;
  data: any[];
}
const Component: React.FC<IProps> = ({ columns, title, data }) => {
  return (
    <tbody>
      {title && (
        <tr>
          <th colSpan={columns.length}>{title}</th>
        </tr>
      )}
      {data.map((row, rowIndex) => {
        return (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => {
              return (
                <td key={colIndex}>
                  {col.render
                    ? col.render(row[col.dataIndex], data)
                    : row[col.dataIndex]}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default Component;
