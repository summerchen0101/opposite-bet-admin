import PopupModal from '@/components/PopupModal'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'

const PreviewPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('preview')
  return (
    <PopupModal
      visible={visible}
      title="關於我們(手機預覽)"
      onCancel={() => setVisible(false)}
      footer={false}
    >
      <p>...</p>
    </PopupModal>
  )
}

export default PreviewPopup
