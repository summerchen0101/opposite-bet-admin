import PopupModal from '@/components/PopupModal'
import { messageTypeOpts } from '@/lib/options'
import { toDateTime, toOptionName } from '@/utils/transfer'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import { selectEditData, useTypedSelector } from '../selectors'
const ViewPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('viewMessage')
  const data = useTypedSelector(selectEditData)
  const onCancel = () => {
    setVisible(false)
  }

  if (!data) return <></>

  const targetType = toOptionName(messageTypeOpts, data.member_type)
  return (
    <PopupModal
      visible={visible}
      title={data.title}
      onCancel={onCancel}
      footer={false}
    >
      <p className="mb-1">
        <span className="bold">寄件人：</span> {data.sender}
      </p>
      <p className="mb-1">
        <span className="bold">收件人：</span>
        {data.is_all
          ? `全部${targetType}`
          : `[${targetType}] ${data.receiver_accs}`}
      </p>
      <p className="mb-2">
        <span className="bold">發送時間：</span> {toDateTime(data.created_at)}
      </p>
      <div className="mb-2">{data.content}</div>
    </PopupModal>
  )
}

export default ViewPopup
