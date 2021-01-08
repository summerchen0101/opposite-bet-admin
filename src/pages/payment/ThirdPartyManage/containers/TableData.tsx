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
    title: '排序',
    render: (_, row) => 1,
    width: 80,
  },
  {
    title: '帳戶狀態/工具別名',
    render: (_, row) => (
      <>
        <ColorText green>啟用</ColorText>
        <br />
        數支富
      </>
    ),
    width: 80,
  },
  {
    title: '金流商/特店編號',
    render: (_, row) => (
      <>
        57PAY
        <br />
        ABDD231232
      </>
    ),
    width: 180,
  },
  {
    title: '輪替群組狀態',
    render: (_, row) => (
      <Space>
        <Switch checked />
        <Tooltip title="當前使用">
          <StarOutlined />
        </Tooltip>
      </Space>
    ),
    width: 150,
  },
  {
    title: '支付方式',
    render: (_, row) => (
      <>
        <p>
          <CheckOutlined style={{ color: 'green' }} /> ATM轉帳: 100 ~ 200000
        </p>
        <p>
          <CloseOutlined style={{ color: 'red' }} /> 超商代碼: 300 ~ 200000
        </p>
      </>
    ),
    width: 200,
  },
  {
    title: '輪替次數',
    render: (_, row) => '66',
    width: 120,
  },
  {
    title: <>充值總量/充值上限</>,
    render: (_, row) => (
      <Space>
        12,000 / 1,000,000 <Button size="small">清空</Button>
      </Space>
    ),
    width: 150,
  },
  {
    title: (
      <>
        會員負擔手續費 <br />
        廠商負擔手續費
      </>
    ),
    render: (_, row) => (
      <>
        80 <br />
        80
      </>
    ),
    width: 160,
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
    title: '最後充值金額',
    render: (_, row) => 250,
    width: 100,
  },
  {
    title: '最後充值記錄',
    render: (_, row) => (
      <>
        abccc
        <br />
        2020-12-11 12:33:22
      </>
    ),
    width: 180,
  },
  {
    title: '操作',
    render(_, row) {
      const [, setVisible] = usePopupProvider('createForm')
      const [, setDetailVisible] = usePopupProvider('detail')
      const [, setHistoryVisible] = usePopupProvider('history')
      const { getFormData, onDelete, changeActive } = useAPIService()
      const handleEdit = async (id: number) => {
        await getFormData(id)
        setVisible(true)
      }
      return (
        <Space size="small">
          {row.is_active ? (
            <IconLink
              icon={<CloseCircleOutlined />}
              label="停用"
              color="red"
              onClick={() => changeActive(row.id, false)}
            />
          ) : (
            <IconLink
              icon={<CheckCircleOutlined />}
              label="啟用"
              color="green"
              onClick={() => changeActive(row.id, true)}
            />
          )}
          <IconLink
            icon={<EditFilled />}
            label="審核"
            onClick={() => handleEdit(row.id)}
          />
          <IconLink
            icon={<FileSearchOutlined />}
            label="詳細"
            onClick={() => setDetailVisible(true)}
          />
          <IconLink
            icon={<HistoryOutlined />}
            label="修改記錄"
            onClick={() => setHistoryVisible(true)}
          />
        </Space>
      )
    },
    width: 100,
  },
]

const statusTypes = [
  { label: '預設', value: 1 },
  { label: '輪替分類一', value: 2 },
  { label: '封存區', value: 3 },
]

const TableData: React.FC = () => {
  // const data = useTypedSelector(selectTableData)
  const data = [{ id: 1 }]
  return (
    <Tabs defaultActiveKey="1" onChange={(key) => {}}>
      {statusTypes.map((t) => (
        <Tabs.TabPane tab={t.label} key={t.value}>
          <TableSets columns={columns} data={data} scroll={{ x: 1900 }} />
        </Tabs.TabPane>
      ))}
    </Tabs>
  )
}

export default TableData
