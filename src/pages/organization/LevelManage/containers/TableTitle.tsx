import {
  getLevelCode,
  getLevelName,
  getParentLevelCodes,
} from '@/utils/transfer'
import { Breadcrumb } from 'antd'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useLevelProvider } from '../context/LevelProvider'
import { HomeOutlined, ArrowLeftOutlined } from '@ant-design/icons'
import { IconLink } from '@/components'
import { LevelCode } from '@/lib/enums'
const TableTitle: React.FC = () => {
  const { currentLevel, alias, parentLevel } = useLevelProvider()
  // const currentLevelNum = parseInt(currentLevel)
  const location = useLocation()
  const history = useHistory()
  return (
    <>
      {currentLevel === LevelCode.Vendor && (
        <h3>{getLevelName(currentLevel)}列表</h3>
      )}
      <Breadcrumb className="mb-1">
        {parentLevel && (
          <Breadcrumb.Item>
            <Link to={location.pathname}>
              <HomeOutlined />
            </Link>
          </Breadcrumb.Item>
        )}
        {getParentLevelCodes(currentLevel).map((code) => {
          return (
            <Breadcrumb.Item key={code}>
              {code === getLevelCode(currentLevel, -1) ? (
                <span>abCC1xx[{getLevelName(code)}]</span>
              ) : (
                <Link to={`${location.pathname}?parent=${code}`}>
                  abCC1xx[{getLevelName(code)}]
                </Link>
              )}
            </Breadcrumb.Item>
          )
        })}
      </Breadcrumb>
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
