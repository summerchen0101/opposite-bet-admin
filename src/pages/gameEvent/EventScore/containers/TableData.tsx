import DeleteConfirmTip from '@/components/DeleteConfirmTip'
import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import { DeleteOutlined, FilterFilled } from '@ant-design/icons'
import { Checkbox, Space, Switch } from 'antd'
import React from 'react'

const columns = [
  {
    title: '比分',
    dataIndex: 'score',
    allowFiltered: true,
    width: '10%',
  },
  {
    title: '收益率',
    dataIndex: 'earningRate',
    allowFiltered: true,
    width: '10%',
  },
  {
    title: '可交易量',
    dataIndex: 'tradeMount',
    allowFiltered: true,
    width: '15%',
  },
  {
    title: '類別',
    dataIndex: 'type',
    allowFiltered: true,
    width: '13%',
  },
  {
    title: '0不全賠 1全賠',
    dataIndex: 'betRule',
    allowFiltered: true,
    width: '13%',
    render: (value) => (
      <Space>
        <span>0</span>
        <Switch defaultChecked={value === 1} />
        <span>1</span>
      </Space>
    ),
  },
  {
    title: '賽事',
    dataIndex: 'event',
    allowFiltered: true,
  },
  {
    title: () => <Checkbox />,
    dataIndex: 'selected',
    render: () => <Checkbox />,
  },
  {
    title: () => <IconLink icon={<FilterFilled />} />,
    render: () => (
      <DeleteConfirmTip>
        <IconLink icon={<DeleteOutlined />} />
      </DeleteConfirmTip>
    ),
  },
]

const data = []
for (let i = 1; i <= 50; i++) {
  data.push({
    key: i,
    score: '3:3',
    earningRate: '1.2',
    tradeMount: 90000,
    type: '全場波膽',
    betRule: 1,
    event: '普羅森斯 VS 比勒菲爾德',
  })
}
const Component: React.FC = () => {
  return <TableSets columns={columns} data={data} />
}

export default Component
