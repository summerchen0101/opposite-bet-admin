import React from 'react'
import { Modal } from 'antd'
import { ModalProps } from 'antd/lib/modal'

interface IProps {
  onCancel?: () => void
}

const PopupModal: React.FC<IProps & ModalProps> = ({
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
      footer={null}
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
