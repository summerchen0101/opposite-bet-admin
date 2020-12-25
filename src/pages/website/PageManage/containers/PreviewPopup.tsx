import PopupModal from '@/components/PopupModal'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'

const PreviewPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('preview')
  return (
    <PopupModal
      visible={visible}
      title="手機預覽圖"
      onCancel={() => setVisible(false)}
      footer={false}
    >
      <div className="text-center">
        <img src="https://fakeimg.pl/350x600/" />
      </div>
    </PopupModal>
  )
}

export default PreviewPopup
