import DeleteConfirmTip from '@/components/DeleteConfirmTip';
import IconLink from '@/components/IconLink';
import TableSets from '@/components/TableSets';
import { DeleteOutlined, FilterFilled, EditFilled } from '@ant-design/icons';
import { Checkbox, Space } from 'antd';
import React from 'react';

const columns = [
  {
    title: '分類',
    dataIndex: 'category',
    allowFiltered: true,
    width: 100,
  },
  {
    title: '類別',
    dataIndex: 'type',
    allowFiltered: true,
    width: 120,
  },
  {
    title: '語系',
    dataIndex: 'language',
    allowFiltered: true,
    width: 120,
  },
  {
    title: '狀態',
    dataIndex: 'status',
    allowFiltered: true,
    width: 120,
  },
  {
    title: '更新人員',
    dataIndex: 'operator',
    allowFiltered: true,
    width: 120,
  },
  {
    title: () => (
      <>
        <Space size="small">
          <Checkbox defaultChecked={false} />
          操作(0)
        </Space>
        <IconLink
          icon={<FilterFilled />}
          style={{ float: 'right', marginTop: 4 }}
        />
      </>
    ),
    key: 'control',
    fixed: ('right' as unknown) as boolean,
    render: (text, record) => {
      return (
        <>
          <Checkbox defaultChecked={false} />
          <Space size="small" style={{ float: 'right' }}>
            <IconLink icon={<EditFilled />} />
            <DeleteConfirmTip>
              <IconLink icon={<DeleteOutlined />} />
            </DeleteConfirmTip>
          </Space>
        </>
      );
    },
    width: 80,
  },
];

const data = [];
for (let i = 1; i <= 50; i++) {
  data.push({
    key: i,
    category: '全場反波膽',
    type: '會員',
    language: '簡中',
    status: '啟動',
    operator: 'flora',
    operatorAt: '2019-07-01 10:54:36',
  });
}
const TableData: React.FC = () => {
  return <TableSets columns={columns} data={data} />;
};

export default TableData;
