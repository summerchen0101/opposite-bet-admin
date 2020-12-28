import { PopupModal } from '@/components'
import { IconLink, PopupConfirm, TableSets } from '@/components'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { addKeyToArrayItem } from '@/utils/transfer'
import { Button, Space, Table } from 'antd'
import React, { useEffect } from 'react'
import { usePopupProvider } from '../../context/PopupProvider'
import { useDataProvider } from '../../context/DataProvider'
import { ColumnsType } from 'antd/lib/table'
import { Sport } from '../../API/types'
import { useAPIService } from '../../service/country'

const SportListPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('countryList')
  const [, setCreateVisible] = usePopupProvider('createSport')
  const [list] = useDataProvider().list
  const columns: ColumnsType<Sport> = [
    { title: '代碼', render: (_, row) => row.code },
    { title: '名稱', render: (_, row) => row.name },
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

  return (
    <PopupModal
      visible={visible}
      zIndex={1}
      title={
        <>
          地區列表
          <Space className="float-right mr-3">
            <Button
              size="small"
              type="primary"
              onClick={() => setCreateVisible(true)}
            >
              新增
            </Button>
          </Space>
        </>
      }
      onCancel={() => setVisible(false)}
      footer={false}
    >
      <Table
        columns={addKeyToArrayItem(columns)}
        dataSource={addKeyToArrayItem(list)}
        size="small"
        bordered
      />
    </PopupModal>
  )
}

export default SportListPopup
