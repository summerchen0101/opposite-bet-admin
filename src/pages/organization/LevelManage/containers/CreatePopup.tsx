import { getLevelName } from '@/utils/transfer'
import { Modal } from 'antd'
import React from 'react'
import { useLevelProvider } from '../context/LevelProvider'
import { usePopupProvider } from '../context/PopupProvider'
import CreateForm from './CreateForm'

const CreatePopup: React.FC = () => {
  const [value, setValue] = usePopupProvider('createForm')
  const { currentLevel } = useLevelProvider()
  return (
    <Modal
      title={<>新增{getLevelName(currentLevel)}</>}
      visible={value}
      onOk={() => setValue(false)}
      onCancel={() => setValue(false)}
    >
      <CreateForm />
    </Modal>
  )
}

export default CreatePopup
