import React from 'react'
import { Modal } from 'antd'

interface IProps {
  title: React.ReactNode
  visible: boolean
  onCancel?: () => void
}

const PopupModal: React.FC<IProps> = ({
  title,
  children,
  visible,
  onCancel,
}) => {
  return (
    <Modal
      title={title}
      visible={visible}
      footer={null}
      destroyOnClose
      onCancel={onCancel}
    >
      {children}
    </Modal>
  )
}
export default PopupModal
