import { IconLink, PopupConfirm, TableSets } from '@/components'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { usePopupProvider } from '../../context/PopupProvider'
import { Button, Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React, { useEffect } from 'react'
import { Country } from '../../API/country/types'
import { useDataProvider } from '../../context/DataProvider'
import { useAPIService } from '../../service/country'

const columns: ColumnsType<Country> = [
  { title: '代碼', render: (_, row) => row.code, width: 150 },
  { title: '名稱', render: (_, row) => row.name, width: 150 },
  {
    title: '操作',
    render: (_, row) => {
      const [, setVisible] = usePopupProvider('editCountry')
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
const AreaTable: React.FC = () => {
  const [, setListVisible] = usePopupProvider('countryList')
  const [, setFormVisible] = usePopupProvider('createCountry')
  const { getTableData } = useAPIService()
  const [list] = useDataProvider().list
  useEffect(() => {
    getTableData()
  }, [])
  return (
    <div>
      <h3 className="text-primary">
        地區
        <Space className="float-right">
          <Button
            size="small"
            type="primary"
            onClick={() => setFormVisible(true)}
          >
            地區新增
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

export default AreaTable
