import login from './login'
import logout from './logout'
import checkLogin from './checkLogin'
import * as permission from './permission'

import * as adminRole from '@/pages/admin/AdminRole/API'
import * as adminAccount from '@/pages/admin/AdminAccount/API'
import * as menuManage from '@/pages/admin/MenuManage/API'
import * as announceManage from '@/pages/announce/AnnounceManage/API'
import * as Marquee from '@/pages/announce/Marquee/API'
import * as Banner from '@/pages/website/Carousel/API'
import * as Message from '@/pages/announce/Message/API'
import * as Activity from '@/pages/promote/PromoteAcitivity/API'
import * as Country from '@/pages/sport/Country/API'
import * as Sport from '@/pages/sport/Sport/API'
import * as Game from '@/pages/sport/Game/API'
import * as League from '@/pages/sport/League/API'
import * as Team from '@/pages/sport/Team/API'
import * as Section from '@/pages/sport/Section/API'
import * as Play from '@/pages/sport/Play/API'
import * as Page from '@/pages/website/PageManage/API'
import * as Faq from '@/pages/website/Faq/API'
import * as FaqCategory from '@/pages/website/Faq/API/category'
import * as BlackIp from '@/pages/system/BlackIp/API'
import * as BlockArea from '@/pages/system/BlockArea/API'
import * as MemberTag from '@/pages/organization/MemberTag/API'
import * as PlaySetting from '@/pages/sport/PlaySetting/API'

const API = {
  login,
  logout,
  checkLogin,
  permission,
  adminRole,
  adminAccount,
  announceManage,
  menuManage,
  Marquee,
  Banner,
  Activity,
  Message,
  Country,
  Sport,
  Game,
  League,
  Team,
  Section,
  Play,
  Page,
  Faq,
  FaqCategory,
  BlackIp,
  BlockArea,
  MemberTag,
  PlaySetting,
}

export default API
