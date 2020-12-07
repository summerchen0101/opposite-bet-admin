import * as pages from '@/pages/payment'
import { MenuGenerator as MenuG } from '@/utils/menuGenerator'
import { PageGenerator as PageG } from '@/utils/pageGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'
import { DollarOutlined } from '@ant-design/icons'

const rootName = '金流管理'
const rootPath = '/payment'

// PAGES
export const BankDeposit = new PageG(
  '銀行轉帳',
  `${rootPath}/bank-deposit`,
  pages.BankDeposit,
)
export const ThirdPartyDeposit = new PageG(
  '第三方金流',
  `${rootPath}/third-deposit`,
  pages.ThirdPartyDeposit,
)
export const WithdrawRecord = new PageG(
  '提現紀錄',
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
export const WithdrawalSetting = new PageG(
  '提現設置',
  `${rootPath}/withdraw-setting`,
  pages.WithdrawalSetting,
)
export const BankAccountSetting = new PageG(
  '帳戶資料設置',
  `${rootPath}/bank-account-setting`,
  pages.BankAccountSetting,
)
export const ThirdPartySetting = new PageG(
  '金流平台設置',
  `${rootPath}/third-setting`,
  pages.ThirdPartySetting,
)

// ROUTERS
RouteG.create([
  BankDeposit,
  ThirdPartyDeposit,
  WithdrawRecord,
  ManualPayment,
  DepositSetting,
  WithdrawalSetting,
  BankAccountSetting,
  ThirdPartySetting,
])

// MENU
MenuG.createCategory(rootName, rootPath, DollarOutlined, [
  BankDeposit,
  ThirdPartyDeposit,
  WithdrawRecord,
  ManualPayment,
  DepositSetting,
  WithdrawalSetting,
  BankAccountSetting,
  ThirdPartySetting,
])
