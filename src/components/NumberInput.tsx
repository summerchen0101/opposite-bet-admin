import { Input } from 'antd'
import { InputProps } from 'antd/lib/input'
import { InputState } from 'antd/lib/input/Input'
import React, { useEffect, useState } from 'react'
import numeral from 'numeral'
type Props = {
  value?: number
  onChange?: (value: number) => void
}

const NumberInput: React.FC<Props & InputProps> = ({
  value,
  onChange,
  ...rest
}) => {
  const [localValue, setLocalValue] = useState<number>()
  const handleChange = (e) => {
    const newValue = numeral(e.target.value).value()
    onChange(newValue)
    setLocalValue(newValue)
  }
  useEffect(() => {
    setLocalValue(value)
  }, [value])
  return <Input value={localValue} onChange={handleChange} {...rest} />
}

export default NumberInput
