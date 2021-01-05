import { PopupModal, PopupTable, TableSets } from '@/components'
import Table, { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'

const AliasAccountPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('aliasAccount')

  const columns: ColumnsType<{ id: number }> = [
    { title: '帳號/名稱', render: (_, row) => 'cntd01 [陳]' },
    { title: '失敗次數', render: (_, row) => 0 },
    {
      title: '最後登入',
      render: (_, row) => (
        <>
          2020-12-24 05:00:12
          <br />
          149.222.22.111
        </>
      ),
    },
  ]

  return (
    <PopupModal
      visible={visible}
      title="子帳號列表"
      onCancel={() => setVisible(false)}
      footer={false}
      width={700}
    >
      <PopupTable
        columns={columns}
        data={[...Array(5)].map((t, i) => ({ id: i }))}
      />
    </PopupModal>
  )
}

export default AliasAccountPopup
