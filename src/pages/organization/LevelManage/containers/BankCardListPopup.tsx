import { IconLink, PopupConfirm, PopupModal } from '@/components'
import { addKeyToArrayItem, toDateTime } from '@/utils/transfer'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Button, Space, Table } from 'antd'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'

const BankCardListPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('bankCardList')
  const [bankCardFormVisible, setBankCardFormVisible] = usePopupProvider(
    'bankCardForm',
  )

  const columns = [
    {
      title: '戶名',
      render: (_, row) => '陳大明',
    },
    {
      title: '帳戶',
      render: (_, row) => '12312-44221-222',
    },
    {
      title: '銀行名稱',
      render: (_, row) => '(822)中國信託',
    },
    {
      title: '分行',
      render: (_, row) => '南屯分行',
    },
    {
      title: '更新人員/時間',
      render: (_, row) => (
        <>
          summer <br />
          {toDateTime(Date.now())}
        </>
      ),
      width: 200,
    },
    {
      title: '操作',
      render: (_, row) => (
        <Space>
          <IconLink icon={<EditOutlined />} label="編輯" />
          <PopupConfirm>
            <IconLink icon={<DeleteOutlined />} label="刪除" />
          </PopupConfirm>
        </Space>
      ),
    },
  ]
  const data = [...Array(10)]

  return (
    <PopupModal
      visible={visible}
      onCancel={() => setVisible(false)}
      title={
        <div>
          银行卡管理
          <Button
            className="float-right mr-3"
            type="primary"
            onClick={() => setBankCardFormVisible(true)}
          >
            新增
          </Button>
        </div>
      }
      width={800}
    >
      <Table
        dataSource={addKeyToArrayItem(data)}
        columns={addKeyToArrayItem(columns)}
        size="small"
        bordered
        scroll={{ x: 900 }}
        pagination={{ pageSize: 8 }}
      />
    </PopupModal>
  )
}

export default BankCardListPopup
