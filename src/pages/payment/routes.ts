import * as pages from '@/pages/payment'
import { MenuGenerator as MenuG } from '@/utils/menuGenerator'
import { PageGenerator as PageG } from '@/utils/pageGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'
import { DollarOutlined } from '@ant-design/icons'

const rootName = '金流管理'
const rootPath = '/payment'

// PAGES
export const DepositRecord = new PageG(
  '充值紀錄(depracated)',
  `${rootPath}/deposit-record`,
  pages.DepositRecord,
)
export const DepositHistory = new PageG(
  '充值紀錄',
  `${rootPath}/deposit-history`,
  pages.DepositHistory,
)
export const WithdrawRecord = new PageG(
  '提領紀錄',
  `${rootPath}/withdraw-record`,
  pages.WithdrawRecord,
)
export const ManualPayment = new PageG(
  '人工存提',
  `${rootPath}/manual`,
  pages.ManualPayment,
)
export const DepositSetting = new PageG(
  '充值設置',
  `${rootPath}/deposit-setting`,
  pages.DepositSetting,
)
export const WithdrawSetting = new PageG(
  '提領設置',
  `${rootPath}/withdraw-setting`,
  pages.WithdrawSetting,
)
export const BankAccountSetting = new PageG(
  '銀行帳戶',
  `${rootPath}/bank-account-setting`,
  pages.BankAccountSetting,
)
// ROUTERS
RouteG.create([
  DepositRecord,
  DepositHistory,
  WithdrawRecord,
  ManualPayment,
  DepositSetting,
  WithdrawSetting,
  BankAccountSetting,
])

// MENU
MenuG.createCategory(rootName, rootPath, DollarOutlined, [
  DepositRecord,
  DepositHistory,
  WithdrawRecord,
  ManualPayment,
  DepositSetting,
  WithdrawSetting,
  BankAccountSetting,
])
