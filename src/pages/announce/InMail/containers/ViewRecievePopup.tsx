import { ColorText } from '@/components'
import PopupModal from '@/components/PopupModal'
import { Form } from 'antd'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
const ViewRecievePopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('viewRecieve')
  const onCancel = () => {
    setVisible(false)
  }
  return (
    <PopupModal
      visible={visible}
      title="反水活動反水活動反水活動"
      onCancel={onCancel}
    >
      <p className="mb-1">
        <span className="bold">寄件人：</span> wahaha [客服]
      </p>
      <p className="mb-1">
        <span className="bold">收件人：</span> gogoro [代理]
      </p>
      <p className="mb-2">
        <span className="bold">發送時間：</span> 2020-05-08 08:00:88
      </p>
      <div>
        信件的內容信件的內容信件的內容,信件的內容信件的內容,
        信件的內容信件的內容信件的內容,信件的內容信件的內容,
        信件的內容信件的內容....
      </div>
    </PopupModal>
  )
}

export default ViewRecievePopup
