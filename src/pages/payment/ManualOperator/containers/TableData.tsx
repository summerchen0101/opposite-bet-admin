import { ColorText, IconLink, TableSets } from '@/components'
import {
  FileSearchOutlined,
  HistoryOutlined,
  EditFilled,
  CheckOutlined,
  CloseOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
  StarOutlined,
} from '@ant-design/icons'
import { Button, Popover, Space, Switch, Tabs, Tooltip } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { BlackIp } from '../API/types'
import { usePopupProvider } from '../context/PopupProvider'
import { useAPIService } from '../service'

const columns: ColumnsType<BlackIp> = [
  {
    title: '上層',
    render: (_, row) => (
      <>
        代理
        <br />
        apple[果]
      </>
    ),
    width: 150,
  },
  {
    title: '帳號/名稱',
    render: (_, row) => 'agent1(王)',
    width: 120,
  },
  {
    title: '調節類型',
    render: (_, row) => '人工加錢',
    width: 120,
  },
  {
    title: '金額',
    render: (_, row) => '1000',
    width: 120,
  },
  {
    title: '交易前餘額',
    render: (_, row) => '900',
    width: 120,
  },
  {
    title: '交易後餘額',
    render: (_, row) => '1900',
    width: 120,
  },
  {
    title: '狀態',
    render: (_, row) => <ColorText green>成功</ColorText>,
    width: 120,
  },
  {
    title: '備註',
    render: (_, row) => (
      <Popover content={<>123123</>}>
        <IconLink icon={<FileSearchOutlined />} />
      </Popover>
    ),
    width: 80,
  },
  {
    title: '操作人員/時間',
    render: (_, row) => (
      <>
        abccc
        <br />
        2020-12-11 12:33:22
      </>
    ),
    width: 180,
  },
  // {
  //   title: '操作',
  //   render(_, row) {
  //     const [, setVisible] = usePopupProvider('createForm')
  //     const { getFormData, onDelete, changeActive } = useAPIService()
  //     const handleEdit = async (id: number) => {
  //       await getFormData(id)
  //       setVisible(true)
  //     }
  //     return (
  //       <Space size="small">
  //         <IconLink
  //           icon={<EditFilled />}
  //           label="編輯"
  //           onClick={() => handleEdit(row.id)}
  //         />
  //       </Space>
  //     )
  //   },
  //   width: 100,
  // },
]

const TableData: React.FC = () => {
  // const data = useTypedSelector(selectTableData)
  const data = [{ id: 1 }]
  return <TableSets columns={columns} data={data} scroll={{ x: 1200 }} />
}

export default TableData
