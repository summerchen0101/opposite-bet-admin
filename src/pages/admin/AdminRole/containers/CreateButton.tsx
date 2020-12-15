import API from '@/API'
import CreateButton from '@/components/CreateButton'
import useErrorHandler from '@/utils/hooks/useErrorHandler'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import { setPermissionOpts } from '../reducer'
import { useDispatch } from 'react-redux'

const Component: React.FC = () => {
  const { apiErr } = useErrorHandler()
  const [visible, setVisible] = usePopupProvider('createForm')
  const dispatch = useDispatch()
  const handleCreate = async () => {
    try {
      const res = await API.permission.options()
      dispatch(setPermissionOpts(res.data.permissions))
      setVisible(true)
    } catch (err) {
      apiErr(err)
    }
  }
  return <CreateButton onClick={() => handleCreate()} />
}

export default Component
