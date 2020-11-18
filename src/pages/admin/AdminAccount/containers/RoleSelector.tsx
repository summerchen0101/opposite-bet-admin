import { BasicSelector } from '@/components'
import {
  selectRoleOptions,
  selectSearchDataRole,
  useTypedSelector,
} from '../selectors'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearchRole } from '../reducer'

// const options = [{ label: '全部角色', value: 'all' }]
const StatusSelector: React.FC = () => {
  const role = useTypedSelector(selectSearchDataRole)
  const dispatch = useDispatch()
  const onChange = (value) => dispatch(setSearchRole(value))
  const options = useTypedSelector(selectRoleOptions)
  return (
    <BasicSelector
      options={options}
      placeholder="管理者角色"
      value={role}
      onChange={onChange}
    />
  )
}

export default StatusSelector
