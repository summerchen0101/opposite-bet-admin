import { PopupTable } from '@/components'
import PopupModal from '@/components/PopupModal'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'

interface TableItem {
  id: number
  level: string
}

const DetailPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('detail')
  const handleCancel = () => {
    setVisible(false)
  }
  const columns: ColumnsType<TableItem> = [
    { title: '階層', render: (_, row) => row.level },
    { title: '佔成', render: (_, row) => '-' },
    { title: '返水', render: (_, row) => '-' },
    { title: '結果', render: (_, row) => '-' },
  ]
  const data: TableItem[] = [
    { id: 1, level: '廠商(abc)' },
    { id: 2, level: '股東(eee)' },
    { id: 3, level: '總代(fefre)' },
    { id: 4, level: '代理(aaa)' },
    { id: 5, level: '會員(kathy)' },
  ]
  return (
    <PopupModal
      visible={visible}
      title="注單 IBT15057189171000000189"
      onCancel={() => handleCancel()}
      footer={false}
      width={600}
    >
      <PopupTable columns={columns} data={data} />
    </PopupModal>
  )
}

export default DetailPopup
