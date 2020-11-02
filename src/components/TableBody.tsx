import React from 'react';
import { IColumn } from './types';

interface IProps {
  columns: IColumn[];
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
              if (!col.render) {
                return <td key={colIndex}>{row[col.dataIndex]}</td>;
              } else {
                return (
                  <td key={colIndex}>{col.render(row[col.dataIndex], row)}</td>
                );
              }
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default Component;
