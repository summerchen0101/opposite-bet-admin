import React from 'react'
import { Button } from 'antd'
import { FormattedMessage } from 'react-intl'

const CreateButton: React.FC<{ onClick: () => any }> = ({ onClick }) => {
  return (
    <Button style={{ float: 'right' }} onClick={onClick}>
      <FormattedMessage id="button.add" defaultMessage="新增" />
    </Button>
  )
}

export default CreateButton
