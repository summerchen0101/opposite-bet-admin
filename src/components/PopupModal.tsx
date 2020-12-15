import React from 'react'
import { Modal } from 'antd'
import { ModalProps } from 'antd/lib/modal'

const PopupModal: React.FC<ModalProps> = ({
  title,
  visible,
  children,
  onCancel,
  ...props
}) => {
  return (
    <Modal
      title={title}
      visible={visible}
      destroyOnClose
      onCancel={onCancel}
      centered
      {...props}
    >
      {children}
    </Modal>
  )
}
export default PopupModal
