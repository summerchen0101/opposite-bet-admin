import * as pages from '@/pages/payment'
import { MenuGenerator as MenuG } from '@/utils/menuGenerator'
import { PageGenerator as PageG } from '@/utils/pageGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'
import { DollarOutlined } from '@ant-design/icons'

const rootName = '金流管理'
const rootPath = '/payment'

// PAGES
export const DepositHistory = new PageG(
  '充值紀錄',
  `${rootPath}/deposit-history`,
  pages.DepositHistory,
)
export const WithdrawHistory = new PageG(
  '提領紀錄',
  `${rootPath}/withdraw-history`,
  pages.WithdrawHistory,
)
export const ManualPoint = new PageG(
  '人工加減碼',
  `${rootPath}/manual-point`,
  pages.ManualPoint,
)
export const BankAccountSetting = new PageG(
  '銀行帳戶',
  `${rootPath}/bank-account-setting`,
  pages.BankAccountSetting,
)
export const DepositAccount = new PageG(
  '充值帳戶管理',
  `${rootPath}/deposit-account`,
  pages.DepositAccount,
)
export const WithdrawAccount = new PageG(
  '提領帳戶管理',
  `${rootPath}/withdraw-account`,
  pages.WithdrawAccount,
)
export const ThirdPartyPayment = new PageG(
  '第三方支付管理',
  `${rootPath}/third-party`,
  pages.ThirdPartyPayment,
)
// ROUTERS
RouteG.create([
  DepositHistory,
  WithdrawHistory,
  BankAccountSetting,
  ManualPoint,
  DepositAccount,
  WithdrawAccount,
  ThirdPartyPayment,
])

// MENU
MenuG.createCategory(rootName, rootPath, DollarOutlined, [
  DepositHistory,
  WithdrawHistory,
  ManualPoint,
  DepositAccount,
  WithdrawAccount,
  ThirdPartyPayment,
])
