import { ColorText, IconLink, TableSets, PopupConfirm } from '@/components'
import { IPBlockTypeOpts, platformTypeOpts, yesNoOpts } from '@/lib/options'
import { toDateTime, toOptionName } from '@/utils/transfer'
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
  EditFilled,
} from '@ant-design/icons'
import { Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { BlackIp } from '../API/types'
import { usePopupProvider } from '../context/PopupProvider'
import { selectTableData, useTypedSelector } from '../selectors'
import { useAPIService } from '../service'

const columns: ColumnsType<BlackIp> = [
  {
    title: '訂單編號',
    render: (_, row) => '12321',
    width: 100,
  },
  {
    title: '帳號/名稱',
    render: (_, row) => 'apple[果]',
    width: 150,
  },
  {
    title: '提領類型',
    render: (_, row) => '會員銀行卡提款',
    width: 120,
  },
  {
    title: '提領金額',
    render: (_, row) => 1000,
    width: 120,
  },
  {
    title: '建立時間',
    render: (_, row) => '2020-12-12 22:00:22',
    width: 180,
  },
  {
    title: '狀態',
    dataIndex: 'status',
    width: 120,
    render: (_, row) => '待審核',
  },
  {
    title: '備註',
    render: (_, row) => '-',
    width: 120,
  },
  {
    title: '審核人員/時間',
    render: (_, row) => (
      <>
        summer <br />
        2020-12-12 22:00:22
      </>
    ),
    width: 200,
  },
  {
    title: '財務',
    render(_, row) {
      const [, setVisible] = usePopupProvider('createForm')
      const { getFormData } = useAPIService()
      const handleEdit = async (id: number) => {
        await getFormData(id)
        setVisible(true)
      }
      return (
        <Space size="small">
          <IconLink
            icon={<EditFilled />}
            label="審核"
            onClick={() => handleEdit(row.id)}
          />
        </Space>
      )
    },
    width: 80,
  },
  {
    title: '風控',
    render(_, row) {
      const [, setVisible] = usePopupProvider('createForm')
      const { getFormData } = useAPIService()
      const handleEdit = async (id: number) => {
        await getFormData(id)
        setVisible(true)
      }
      return (
        <Space size="small">
          <IconLink
            icon={<EditFilled />}
            label="審核"
            onClick={() => handleEdit(row.id)}
          />
        </Space>
      )
    },
    width: 100,
  },
]

const TableData: React.FC = () => {
  // const data = useTypedSelector(selectTableData)
  const data = [{ id: 1 }]
  return <TableSets columns={columns} data={data} scroll={{ x: 1300 }} />
}

export default TableData
