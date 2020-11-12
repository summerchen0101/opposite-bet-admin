import { Popconfirm } from 'antd'
import React from 'react'

interface PopupConfirmState {
  title?: string
  onConfirm?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void
  onCancel?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const PopupConfirm: React.FC<PopupConfirmState> = ({
  title = '請確認是否要刪除?請按下是進行刪除程序',
  onConfirm,
  onCancel,
  children,
}) => {
  return (
    <Popconfirm title={title} onConfirm={onConfirm} onCancel={onCancel}>
      {children}
    </Popconfirm>
  )
}

export default PopupConfirm
