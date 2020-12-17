import { ColorText } from '@/components'
import PopupModal from '@/components/PopupModal'
import { Form } from 'antd'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
const ViewSentPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('viewSent')
  const onCancel = () => {
    setVisible(false)
  }
  return (
    <PopupModal
      visible={visible}
      title={
        <>
          <ColorText blue>[意見反應]</ColorText> 來自 gogoro[陳]
        </>
      }
      onCancel={onCancel}
    >
      <h3>我無法儲值</h3>
      <div>
        信件的內容信件的內容信件的內容 信件的內容信件的內容,
        信件的內容信件的內容....
      </div>
    </PopupModal>
  )
}

export default ViewSentPopup
