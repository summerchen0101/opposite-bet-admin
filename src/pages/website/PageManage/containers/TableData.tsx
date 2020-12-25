import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import Text from '@/components/Text'
import { EditFilled } from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'

const columns = [
  {
    title: '名稱',
    render: (_, row) => row.name,
  },
  {
    title: '代碼',
    render: (_, row) => 'xxx',
    width: 80,
  },
  {
    title: '顯示平台',
    width: 110,
    render: (_, row) => {
      const [, setVisible] = usePopupProvider('preview')
      return <a onClick={() => setVisible(true)}>手機</a>
    },
  },
  {
    title: '狀態',
    render: (_, row) => <Text color="success">啟用</Text>,
    width: 100,
  },
  {
    title: '更新人員/時間',
    render: (_, row) => (
      <>
        summer <br />
        2020-12-17 17:22:10
      </>
    ),
    width: 200,
  },
  {
    title: '操作',
    fixed: ('right' as unknown) as boolean,
    render(_, row) {
      const [, setVisible] = usePopupProvider('editForm')
      return (
        <Space size="small">
          <IconLink
            icon={<EditFilled />}
            label="編輯"
            onClick={() => setVisible(true)}
          />
        </Space>
      )
    },
    width: 80,
  },
]

const data = [
  { id: 1, name: '關於我們' },
  { id: 2, name: '聯絡我們' },
  { id: 3, name: '頁尾' },
]
const TableData: React.FC = () => {
  return <TableSets columns={columns} data={data} pagination={false} />
}

export default TableData
