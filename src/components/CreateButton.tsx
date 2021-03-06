import React from 'react'
import { Button } from 'antd'
import { FormattedMessage } from 'react-intl'

const CreateButton: React.FC<{
  onClick?: () => any
  style?: React.CSSProperties
}> = ({ onClick }) => {
  return (
    <Button type="primary" onClick={onClick}>
      <FormattedMessage id="button.add" defaultMessage="新增" />
    </Button>
  )
}

export default CreateButton
