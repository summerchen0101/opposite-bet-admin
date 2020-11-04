import * as routes from '@/lib/routes'
import * as pages from '@/pages/payment'
import { MenuGenerator as MenuG } from '@/utils/menuGenerator'
import { PageGenerator as PageG } from '@/utils/pageGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'
import { DollarOutlined } from '@ant-design/icons'

// PAGES
export const BankDeposit = new PageG(
  '銀行轉帳',
  routes.BankDeposit,
  pages.BankDeposit,
)
export const ThirdPartyDeposit = new PageG(
  '第三方金流',
  routes.ThirdPartyDeposit,
  pages.ThirdPartyDeposit,
)
export const Withdrawal = new PageG(
  '提現紀錄',
  routes.Withdrawal,
  pages.Withdrawal,
)
export const ManualPayment = new PageG(
  '人工存提',
  routes.ManualPayment,
  pages.ManualPayment,
)
export const DepositSetting = new PageG(
  '充值設置',
  routes.DepositSetting,
  pages.DepositSetting,
)
export const WithdrawalSetting = new PageG(
  '提現設置',
  routes.WithdrawalSetting,
  pages.WithdrawalSetting,
)
export const BankAccountSetting = new PageG(
  '帳戶資料設置',
  routes.BankAccountSetting,
  pages.BankAccountSetting,
)
export const ThirdPartySetting = new PageG(
  '金流平台設置',
  routes.ThirdPartySetting,
  pages.ThirdPartySetting,
)

// ROUTERS
RouteG.create([
  BankDeposit,
  ThirdPartyDeposit,
  Withdrawal,
  ManualPayment,
  DepositSetting,
  WithdrawalSetting,
  BankAccountSetting,
  ThirdPartySetting,
])

// MENU
MenuG.createCategory('金流管理', routes.Payment, DollarOutlined, [
  BankDeposit,
  ThirdPartyDeposit,
  Withdrawal,
  ManualPayment,
  DepositSetting,
  WithdrawalSetting,
  BankAccountSetting,
  ThirdPartySetting,
])
