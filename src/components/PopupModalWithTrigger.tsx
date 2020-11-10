import React, { useState } from 'react'
import { Modal } from 'antd'

interface IProps {
  title: React.ReactNode
  content: (
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
  ) => JSX.Element
  trigger: (
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
  ) => JSX.Element
}

const PopupModalWithTrigger: React.FC<IProps> = ({
  title,
  content,
  trigger,
}) => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      {trigger(setVisible)}
      <Modal
        title={title}
        visible={visible}
        footer={null}
        destroyOnClose
        onCancel={() => setVisible(false)}
      >
        {content(setVisible)}
      </Modal>
    </>
  )
}
export default PopupModalWithTrigger
