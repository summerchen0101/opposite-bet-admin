import React from 'react'
import CreatePopup from '../containers/CreatePopup'
import InvitedFormPopup from '../containers/InvitatedFormPopup'
import PercentFormPopup from '../containers/PercentFormPopup'
import PwFormPopup from '../containers/PwFormPopup'
import TradeHistoryPopup from '../containers/TradeHistoryPopup'
import DepositHistoryPopup from '../containers/DepositHistoryPopup'
import WhiteListPopup from '../containers/WhiteListPopup'
import WithdrawHistoryPopup from '../containers/WithdrawHistoryPopup'
import PointFormPopup from '../containers/PointFormPopup'
import MemberCreatePopup from '../containers/MebmerCreatePopup'
import BankCardListPopup from '../containers/BankCardListPopup'
import BankCardFormPopup from '../containers/BankCardFormPopup'
import LoginHistoryPopup from '../containers/LoginHistoryPopup'
const Popups: React.FC = () => {
  return (
    <>
      <CreatePopup />
      <PercentFormPopup />
      <PwFormPopup />
      <InvitedFormPopup />
      <WhiteListPopup />
      <DepositHistoryPopup />
      <WithdrawHistoryPopup />
      <PointFormPopup />
      <TradeHistoryPopup />
      <MemberCreatePopup />
      <BankCardListPopup />
      <BankCardFormPopup />
      <LoginHistoryPopup />
    </>
  )
}

export default Popups
