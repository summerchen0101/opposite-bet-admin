import {
  getLevelCode,
  getLevelName,
  getParentLevelCodes,
} from '@/utils/transfer'
import { Breadcrumb } from 'antd'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link, useHistory, useLocation, useRouteMatch } from 'react-router-dom'
import { useLevelProvider } from '../context/LevelProvider'
import { HomeOutlined, ArrowLeftOutlined } from '@ant-design/icons'
import { IconLink } from '@/components'
import { LevelCode } from '@/lib/enums'
import { LevelManage, LevelManageAliasTable } from '../../routes'
import LevelBreadcrumb from './LevelBreadcrumb'
const TableTitle: React.FC = () => {
  const { currentLevel, parentLevel } = useLevelProvider()
  const { path } = useRouteMatch()
  const alias = LevelManageAliasTable.path === path
  // const currentLevelNum = parseInt(currentLevel)
  const location = useLocation()
  const history = useHistory()
  return (
    <>
      {currentLevel === LevelCode.Vendor && (
        <h3>{getLevelName(currentLevel)}列表</h3>
      )}
      <LevelBreadcrumb />
      {alias && (
        <>
          <IconLink
            icon={<ArrowLeftOutlined />}
            onClick={() => history.goBack()}
          />
          <h3 className="d-inline-block ml-2">{alias} 子帳號</h3>
        </>
      )}
    </>
  )
}

export default TableTitle
