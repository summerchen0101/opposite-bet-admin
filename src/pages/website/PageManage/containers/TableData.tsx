import { ColorText } from '@/components'
import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import { toDateTime } from '@/utils/transfer'
import { EditFilled } from '@ant-design/icons'
import { Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { Page } from '../API/types'
import { selectTableData, useTypedSelector } from '../selectors'
import { usePopupProvider } from '../context/PopupProvider'
import { useAPIService } from '../service'

const columns: ColumnsType<Page> = [
  {
    title: '名稱',
    render: (_, row) => row.title,
    width: 150,
  },
  {
    title: '代碼',
    render: (_, row) => row.code,
    width: 150,
  },
  {
    title: '狀態',
    render: (_, row) => {
      if (row.is_active) {
        return <ColorText green>啟用</ColorText>
      }
      return <ColorText red>停用</ColorText>
    },
    width: 100,
  },
  {
    title: '更新人員/時間',
    render: (_, row) => (
      <>
        {row.editor} <br />
        {toDateTime(row.updated_at)}
      </>
    ),
    width: 200,
  },
  {
    title: '操作',
    fixed: ('right' as unknown) as boolean,
    render(_, row) {
      const [, setVisible] = usePopupProvider('editForm')
      const { getFormData } = useAPIService()
      const handleEdit = async (id: number) => {
        await getFormData(id)
        setVisible(true)
      }
      return (
        <Space size="small">
          <IconLink
            icon={<EditFilled />}
            label="編輯"
            onClick={() => handleEdit(row.id)}
          />
        </Space>
      )
    },
    width: 80,
  },
]

const TableData: React.FC = () => {
  const data = useTypedSelector(selectTableData)
  return <TableSets columns={columns} data={data} pagination={null} />
}

export default TableData
