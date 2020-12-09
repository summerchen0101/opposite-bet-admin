import { getLevelCode, getParentLevelCodes } from '@/utils/transfer'
import { Breadcrumb } from 'antd'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link, useLocation } from 'react-router-dom'
import { useLevelProvider } from '../context/LevelProvider'
import { HomeOutlined } from '@ant-design/icons'
const TableTitle: React.FC = () => {
  const { currentLevel } = useLevelProvider()
  // const currentLevelNum = parseInt(currentLevel)
  const location = useLocation()
  return (
    <>
      <h3>{<FormattedMessage id={`level.${currentLevel}`} />}列表</h3>
      <Breadcrumb className="mb-1">
        {location.search && (
          <Breadcrumb.Item>
            <Link to={location.pathname}>
              <HomeOutlined />
            </Link>
          </Breadcrumb.Item>
        )}
        {getParentLevelCodes(currentLevel).map((code) => {
          const levelName = <FormattedMessage id={`level.${code}`} />
          return (
            <Breadcrumb.Item key={code}>
              {code === getLevelCode(currentLevel, -1) ? (
                <span>abCC1xx[{levelName}]</span>
              ) : (
                <Link to={`${location.pathname}?parent=${code}`}>
                  abCC1xx[{levelName}]
                </Link>
              )}
            </Breadcrumb.Item>
          )
        })}
      </Breadcrumb>
    </>
  )
}

export default TableTitle
