import { IconLink, PopupConfirm, TableSets } from '@/components'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { usePopupProvider } from '../../context/PopupProvider'
import { Button, Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React, { useEffect } from 'react'
import { Sport } from '../../API/sport/types'
import { useDataProvider } from '../../context/DataProvider'
import { useAPIService } from '../../service/sport'

const columns: ColumnsType<Sport> = [
  { title: '代碼', render: (_, row) => row.code, width: 150 },
  { title: '名稱', render: (_, row) => row.name, width: 150 },
  {
    title: '操作',
    render: (_, row) => {
      const [, setVisible] = usePopupProvider('editSport')
      const { getFormData } = useAPIService()
      const handleEdit = async (id: number) => {
        await getFormData(id)
        setVisible(true)
      }
      return (
        <IconLink
          icon={<EditOutlined />}
          label="編輯"
          onClick={() => handleEdit(row.id)}
        />
      )
    },
    width: 80,
  },
]
const SportTable: React.FC = () => {
  const [, setListVisible] = usePopupProvider('sportList')
  const [, setFormVisible] = usePopupProvider('createSport')
  const { getTableData } = useAPIService()
  const [list] = useDataProvider().sportList
  useEffect(() => {
    getTableData()
  }, [])
  return (
    <div>
      <h3 className="text-primary">
        體育
        <Space className="float-right">
          <Button
            size="small"
            type="primary"
            onClick={() => setFormVisible(true)}
          >
            體育新增
          </Button>
          <Button size="small" onClick={() => setListVisible(true)}>
            更多
          </Button>
        </Space>
      </h3>
      <TableSets
        columns={columns}
        data={list.slice(0, 3)}
        pagination={false}
        scroll={null}
      />
    </div>
  )
}

export default SportTable
