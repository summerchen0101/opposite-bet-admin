import { BasicSelector } from '@/components'
import {
  selectSearchData,
  selectSearchDataStatus,
  useTypedSelector,
} from '../selectors'
import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchAdminList, setSearchStatus } from '../reducer'

const options = [
  { label: '全部狀態', value: '' },
  { label: '未啟動', value: 0 },
  { label: '啟動', value: 1 },
  { label: '停用', value: 2 },
  { label: '凍結', value: 3 },
]
const StatusSelector: React.FC = () => {
  const status = useTypedSelector(selectSearchDataStatus)
  const dispatch = useDispatch()
  const onChange = (value) => {
    dispatch(setSearchStatus(value))
    const searchData = useTypedSelector(selectSearchData)
    dispatch(fetchAdminList(searchData))
  }
  return (
    <BasicSelector
      options={options}
      placeholder="狀態"
      value={status}
      onChange={onChange}
    />
  )
}

export default StatusSelector
