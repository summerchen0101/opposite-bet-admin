import { SearchInput } from '@/components'
import React from 'react'
import { useDispatch } from 'react-redux'
import { selectSearchDataAccount, useTypedSelector } from '../selectors'
import { setSearchAccount } from '../reducer'

const AccountSearch: React.FC = () => {
  const account = useTypedSelector(selectSearchDataAccount)
  const dispatch = useDispatch()
  const onChange = (e) => dispatch(setSearchAccount(e.target.value))
  return (
    <SearchInput
      placeholder="管理者帳號"
      defaultValue={account}
      onChange={onChange}
    />
  )
}

export default AccountSearch
