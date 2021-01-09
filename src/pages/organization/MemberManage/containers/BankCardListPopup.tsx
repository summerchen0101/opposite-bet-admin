import { IconLink, PopupConfirm, PopupModal } from '@/components'
import { addKeyToArrayItem, toDateTime } from '@/utils/transfer'
import {
  DeleteOutlined,
  EditOutlined,
  FileSearchOutlined,
} from '@ant-design/icons'
import { Button, Popover, Space, Table } from 'antd'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'

const BankCardListPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('bankCardList')
  const [, setBankCardFormVisible] = usePopupProvider('bankCardForm')

  const columns = [
    {
      title: '銀行名稱/分行',
      render: (_, row) => (
        <>
          (822)中國信託
          <br />
          南屯分行
        </>
      ),
    },
    {
      title: '戶名/帳號',
      render: (_, row) => (
        <>
          陳大明
          <br />
          12312-44221-222
        </>
      ),
    },
    {
      title: '帳戶狀態',
      render: (_, row) => '等待審核',
    },
    {
      title: '出金次數',
      render: (_, row) => 2,
    },
    {
      title: '出金總額',
      render: (_, row) => 2000,
    },
    {
      title: '備註(後台)',
      render: (_, row) => (
        <Popover content={<>123123</>}>
          <IconLink icon={<FileSearchOutlined />} />
        </Popover>
      ),
      width: 100,
    },
    {
      title: '備註(會員端)',
      render: (_, row) => (
        <Popover content={<>123123</>}>
          <IconLink icon={<FileSearchOutlined />} />
        </Popover>
      ),
      width: 100,
    },
    {
      title: '更新人員/時間',
      render: (_, row) => (
        <>
          summer <br />
          2020-12-10 16:22:20
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
  const data = [...Array(3)]

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
      footer={false}
    >
      <Table
        dataSource={addKeyToArrayItem(data)}
        columns={addKeyToArrayItem(columns)}
        size="small"
        bordered
        scroll={{ x: 1000 }}
        pagination={{ pageSize: 8 }}
      />
    </PopupModal>
  )
}

export default BankCardListPopup
