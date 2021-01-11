import { PopupTable } from '@/components'
import PopupModal from '@/components/PopupModal'
import { Col, Descriptions, Form, Row } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import { useAPIService } from '../service'
import { FormData } from './DataForm'

const columns: ColumnsType<{ id: number }> = [
  {
    title: '動作描述',
    render: (_, row) => (
      <>
        [_username] 被修改
        <br />
        #01efp6affy81hph257pddbjsx0
      </>
    ),
  },
  {
    title: '異動前',
    render: (_, row) => (
      <>
        recycle_status
        <br />
        recycle_status：pause
      </>
    ),
  },
  {
    title: '異動後',
    render: (_, row) => (
      <>
        recycle_status
        <br />
        recycle_status：active
      </>
    ),
  },
  { title: 'IP', render: (_, row) => '45.32.19.229' },
  {
    title: '操作人員/時間',
    render: (_, row) => (
      <>
        summer <br />
        2020-09-16 14:25:42
      </>
    ),
    width: 200,
  },
]

const HistoryPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('history')
  return (
    <PopupModal
      visible={visible}
      title="公司帳戶修改紀錄"
      onCancel={() => setVisible(false)}
      footer={false}
      width={900}
    >
      <PopupTable
        columns={columns}
        data={[...Array(3)].map((_, id) => ({ id }))}
        scroll={{ x: 1000 }}
      />
    </PopupModal>
  )
}

export default HistoryPopup
