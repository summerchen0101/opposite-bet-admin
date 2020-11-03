import { Table as AntTable } from 'antd';
import { ColumnType } from 'antd/lib/table';
import React, { useEffect, useState } from 'react';

interface IProps {
  data: any[];
  columns: ColumnType<any>[];
}
const Table: React.FC<IProps> = ({ data, columns }) => {
  const [columnsWithKey, setColumnsWithKey] = useState([]);
  useEffect(() => {
    setColumnsWithKey(
      columns.map((t) => ({
        ...t,
        key: t.key ?? t.dataIndex,
      })),
    );
  }, []);
  return (
    <AntTable
      size="small"
      dataSource={data}
      columns={columnsWithKey}
      scroll={{ x: 1000 }}
      sticky={{ offsetHeader: -24 }}
      pagination={{ pageSize: 30 }}
    />
  );
};

export default Table;
