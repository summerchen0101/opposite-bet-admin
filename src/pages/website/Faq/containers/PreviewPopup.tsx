import PopupModal from '@/components/PopupModal'
import { Device } from '@/lib/enums'
import { deviceOpts } from '@/lib/options'
import { Collapse } from 'antd'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import { selectEditData, useTypedSelector } from '../selectors'

const PreviewPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('preview')
  const data = useTypedSelector(selectEditData)
  if (!data) return <></>
  return (
    <PopupModal
      visible={visible}
      title={data.title}
      onCancel={() => setVisible(false)}
      footer={false}
    >
      <Collapse defaultActiveKey={[Device.PC, Device.Mobile]}>
        {deviceOpts.map((t, i) => (
          <Collapse.Panel header={t.label} key={t.value}>
            {t.value === Device.PC ? data.content : data.content_mobile}
          </Collapse.Panel>
        ))}
      </Collapse>
    </PopupModal>
  )
}

export default PreviewPopup
