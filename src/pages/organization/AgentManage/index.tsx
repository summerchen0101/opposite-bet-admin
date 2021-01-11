import { Dashboard } from '@/components'
import { useReducerInjector } from '@/utils/hooks'
import React, { useEffect } from 'react'
import PageHeader from './components/PageHeader'
import AliasAccountPopup from './containers/AliasAccountPopup'
import CreatePopup from './containers/CreatePopup'
import MemberCreatePopup from '@/pages/organization/MemberManage/containers/CreatePopup'
import MemberPercentPopup from '@/pages/organization/MemberManage/containers/PercentCreatePopup'
import EditPopup from './containers/EditPopup'
import InvitedFormPopup from './containers/InvitatedFormPopup'
import PercentCreatePopup from './containers/PercentCreatePopup'
import PercentEditPopup from './containers/PercentEditPopup'
import SearchBar from './containers/SearchBar'
import TableData from './containers/TableData'
import PopupProvider from './context/PopupProvider'
import MemberPopupProvider from '@/pages/organization/MemberManage/context/PopupProvider'
import reducer, { moduleName } from './reducer'
import { useAPIService } from './service'

const MarqueePage: React.FC = () => {
  useReducerInjector(moduleName, reducer)
  const { getTableData } = useAPIService()

  useEffect(() => {
    getTableData()
  }, [])
  return (
    <Dashboard>
      <PopupProvider>
        <MemberPopupProvider>
          <PageHeader />
          <SearchBar />
          <TableData />
          <CreatePopup />
          <EditPopup />
          <InvitedFormPopup />
          <AliasAccountPopup />
          <PercentCreatePopup />
          <PercentEditPopup />
          <MemberCreatePopup />
          <MemberPercentPopup />
        </MemberPopupProvider>
      </PopupProvider>
    </Dashboard>
  )
}

export default MarqueePage
