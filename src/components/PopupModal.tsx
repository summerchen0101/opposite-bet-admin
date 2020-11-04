import React from 'react'
import { Modal } from 'antd'

interface IProps {
  title: React.ReactNode
  visible: boolean
}

const PopupModal: React.FC<IProps> = ({ title, children, visible }) => {
  return (
    <Modal
      title={title}
      visible={visible}
      footer={null}
      destroyOnClose
      closable={false}
    >
      {children}
    </Modal>
  )
}
export default PopupModal
