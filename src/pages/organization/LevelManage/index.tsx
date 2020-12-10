import Dashboard from '@/components/Dashboard'
import { useReducerInjector } from '@/utils/hooks'
import React from 'react'
import PageHeader from './components/PageHeader'
import CreatePopup from './containers/CreatePopup'
import InvitedFormPopup from './containers/InvitatedFormPopup'
import PercentFormPopup from './containers/PercentFormPopup'
import PwFormPopup from './containers/PwFormPopup'
import SearchForm from './containers/SearchForm'
import TableData from './containers/TableData'
import TradeHistoryPopup from './containers/TradeHistoryPopup'
import DepositHistoryPopup from './containers/DepositHistoryPopup'
import WhiteListPopup from './containers/WhiteListPopup'
import LevelProvider from './context/LevelProvider'
import PopupProvider from './context/PopupProvider'
import reducer, { moduleName } from './reducer'
import WithdrawHistoryPopup from './containers/WithdrawHistoryPopup'
import PointFormPopup from './containers/PointFormPopup'

const Manager: React.FC = () => {
  useReducerInjector(moduleName, reducer)

  return (
    <Dashboard>
      <PopupProvider>
        <LevelProvider>
          <PageHeader />
          <SearchForm />
          <TableData />
          <CreatePopup />
          <PercentFormPopup />
          <PwFormPopup />
          <InvitedFormPopup />
          <WhiteListPopup />
          <DepositHistoryPopup />
          <WithdrawHistoryPopup />
          <PointFormPopup />
          <TradeHistoryPopup />
        </LevelProvider>
      </PopupProvider>
    </Dashboard>
  )
}

export default Manager
