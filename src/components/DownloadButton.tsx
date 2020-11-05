import { DownloadOutlined } from '@ant-design/icons'
import React from 'react'
import IconButton from './IconButton'

const DownloadButton: React.FC<{ onClick?: () => any }> = ({ onClick }) => {
  return (
    <IconButton label="匯出" onClick={onClick} icon={<DownloadOutlined />} />
  )
}

export default DownloadButton
