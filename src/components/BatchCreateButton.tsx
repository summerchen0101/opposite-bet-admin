import React from 'react'
import { Button } from 'antd'
import { FormattedMessage } from 'react-intl'

const BatchCreateButton: React.FC<{ onClick?: () => any }> = ({ onClick }) => {
  return (
    <Button type="primary" onClick={onClick}>
      <FormattedMessage id="button.batchAdd" defaultMessage="批次新增" />
    </Button>
  )
}

export default BatchCreateButton
