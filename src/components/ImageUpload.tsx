import { LoadingOutlined, UploadOutlined } from '@ant-design/icons'
import { Button, Input, message, Upload } from 'antd'
import React, { useEffect, useRef, useState } from 'react'

function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!')
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
  }
  return isJpgOrPng && isLt2M
}

const ImageUpload: React.FC<{
  onChange?: (dataUrl: string) => void
  value?: string
}> = ({ onChange, value }) => {
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState('')
  const fileInput = useRef<HTMLInputElement>(null)
  useEffect(() => {
    setImageUrl(value)
  }, [value])
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true)
    const file = e.target.files[0]
    getBase64(file, (imageUrl) => {
      setImageUrl(imageUrl)
      onChange && onChange(imageUrl)
      setLoading(false)
    })
  }

  return (
    <>
      <input hidden ref={fileInput} type="file" onChange={handleChange} />
      {imageUrl && <img src={imageUrl} style={{ maxWidth: '50%' }} />}
      <Button
        icon={<UploadOutlined />}
        onClick={() => fileInput.current.click()}
      >
        上傳圖片 {loading && 'loading...'}
      </Button>
    </>
  )
}

export default ImageUpload
