import { ColorText, IconLink, TableSets, PopupConfirm } from '@/components'
import { IPBlockTypeOpts, platformTypeOpts, yesNoOpts } from '@/lib/options'
import { toDateTime, toOptionName } from '@/utils/transfer'
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
  EditFilled,
  ContactsOutlined,
  CopyOutlined,
} from '@ant-design/icons'
import { Button, Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { Merchant } from '../API/types'
import { usePopupProvider } from '../context/PopupProvider'
import { selectTableData, useTypedSelector } from '../selectors'
import { useAPIService } from '../service'

const columns: ColumnsType<Merchant> = [
  {
    title: '前綴',
    width: 120,
    render: (_, row) => 'abc',
  },
  {
    title: '品牌名稱',
    width: 120,
    render: (_, row) => 'AG',
  },
  {
    title: '語系',
    width: 120,
    render: (_, row) => '簡中',
  },
  {
    title: '幣別',
    width: 120,
    render: (_, row) => '人民幣',
  },
  {
    title: '額度(萬)',
    width: 120,
    render: (_, row) => '100',
  },
  {
    title: 'API KEY',
    width: 120,
    render: (_, row) => <IconLink icon={<CopyOutlined />} />,
  },
  {
    title: '白名單',
    width: 120,
    render: (_, row) => {
      const [, setVisible] = usePopupProvider('whiteList')
      return <a onClick={() => setVisible(true)}>3</a>
    },
  },
  {
    title: '狀態',
    width: 120,
    render: (_, row) => {
      if (row.is_active) {
        return <ColorText green>啟用</ColorText>
      }
      return <ColorText red>停用</ColorText>
    },
  },
  {
    title: '建立時間',
    width: 200,
    render: (_, row) => '2020-12-13 20:33:01',
  },
  {
    title: '更新人員/時間',
    width: 200,
    render: (_, row) => (
      <>
        summer <br />
        2020-12-13 20:33:01
      </>
    ),
  },
  {
    title: '操作',
    render(_, row) {
      const [, setVisible] = usePopupProvider('editForm')
      const [, setContactVisible] = usePopupProvider('contactCreate')
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
            label="編輯"
            onClick={() => handleEdit(row.id)}
          />
          <IconLink
            icon={<ContactsOutlined />}
            label="聯絡資訊"
            onClick={() => setContactVisible(true)}
          />
          <PopupConfirm onConfirm={() => onDelete(row.id)}>
            <IconLink icon={<DeleteOutlined />} label="刪除" />
          </PopupConfirm>
        </Space>
      )
    },
    width: 100,
  },
]

const TableData: React.FC = () => {
  // const data = useTypedSelector(selectTableData)
  const data = [{ id: 1 }]
  return <TableSets columns={columns} data={data} scroll={{ x: 1500 }} />
}

export default TableData
