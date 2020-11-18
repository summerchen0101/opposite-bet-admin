import { SearchInput } from '@/components'
import React from 'react'
import { selectSearchDataIp, useTypedSelector } from '../selectors'

const IpSearch: React.FC = () => {
  const ip = useTypedSelector(selectSearchDataIp)
  return <SearchInput placeholder="允許登入IP" defaultValue={ip} />
}

export default IpSearch
