import * as pages from '@/pages/payment'
import { MenuGenerator as MenuG } from '@/utils/menuGenerator'
import { PageGenerator as PageG } from '@/utils/pageGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'
import { DollarOutlined } from '@ant-design/icons'

const rootName = '金流管理'
const rootPath = '/payment'

// PAGES
export const ThirdPartyDepositHistory = new PageG(
  '支付系統充值紀錄',
  `${rootPath}/third-party-deposit-history`,
  pages.ThirdPartyDepositHistory,
)
export const DepositHistory = new PageG(
  '會員充值紀錄',
  `${rootPath}/deposit-history`,
  pages.DepositHistory,
)
export const WithdrawHistory = new PageG(
  '會員出金紀錄',
  `${rootPath}/withdraw-history`,
  pages.WithdrawHistory,
)
export const OverView = new PageG(
  '申請總覽',
  `${rootPath}/overview`,
  pages.OverView,
)
export const MemberBankAcc = new PageG(
  '會員銀行帳戶',
  `${rootPath}/member-bank-acc`,
  pages.MemberBankAcc,
)
export const CompanyBankAcc = new PageG(
  '公司帳戶資料',
  `${rootPath}/company-bank-acc`,
  pages.CompanyBankAcc,
)
export const ManualOperator = new PageG(
  '人工加減碼',
  `${rootPath}/manual-operator`,
  pages.ManualOperator,
)
export const BankAccountSetting = new PageG(
  '銀行帳戶',
  `${rootPath}/bank-account-setting`,
  pages.BankAccountSetting,
)
export const ThirdPartyManage = new PageG(
  '線上支付系統',
  `${rootPath}/third-party-manage`,
  pages.ThirdPartyManage,
)
// ROUTERS
RouteG.create([
  DepositHistory,
  WithdrawHistory,
  BankAccountSetting,
  ThirdPartyDepositHistory,
  OverView,
  MemberBankAcc,
  CompanyBankAcc,
  ThirdPartyManage,
  ManualOperator,
])

// MENU
MenuG.createCategory(rootName, rootPath, DollarOutlined, [
  ThirdPartyDepositHistory,
  DepositHistory,
  WithdrawHistory,
  OverView,
  MemberBankAcc,
  CompanyBankAcc,
  ThirdPartyManage,
  ManualOperator,
])
