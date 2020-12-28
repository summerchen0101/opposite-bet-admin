import { IconLink, PopupConfirm, TableSets } from '@/components'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { usePopupProvider } from '../../context/PopupProvider'
import { Button, Form, Select, Space } from 'antd'
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
interface SearchFormData {
  country_id: number
}
const SportTable: React.FC = () => {
  const [, setListVisible] = usePopupProvider('sportList')
  const [, setFormVisible] = usePopupProvider('createSport')
  const { getTableData } = useAPIService()
  const [list] = useDataProvider().sportList
  const [countryList] = useDataProvider().countryList
  useEffect(() => {
    getTableData()
  }, [])
  const [form] = Form.useForm()
  const onSearch = async () => {
    const f = (await form.validateFields()) as SearchFormData
    await getTableData({
      country_id: f.country_id,
    })
  }
  const countryOpts = countryList.map((t) => ({
    label: t.name,
    value: t.id,
  }))
  return (
    <div>
      <Space>
        <h3 className="text-primary">體育</h3>
        <Form layout="inline" form={form} size="small">
          <Form.Item name="country_id" initialValue={0}>
            <Select
              options={[{ label: '全部國家', value: 0 }, ...countryOpts]}
              onChange={onSearch}
              style={{ width: '130px' }}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={() => setFormVisible(true)}>
              體育新增
            </Button>
          </Form.Item>
          <Form.Item>
            <Button onClick={() => setListVisible(true)}>更多</Button>
          </Form.Item>
        </Form>
      </Space>
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
