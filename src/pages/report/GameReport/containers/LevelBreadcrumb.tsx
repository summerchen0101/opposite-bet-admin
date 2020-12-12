import {
  getLevelCode,
  getLevelName,
  getParentLevelCodes,
} from '@/utils/transfer'
import { HomeOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'
import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useLevelProvider } from '../context/LevelProvider'

const LevelBreadcrumb: React.FC = () => {
  const { currentLevel, alias, parentLevel } = useLevelProvider()
  // const currentLevelNum = parseInt(currentLevel)
  const location = useLocation()
  const history = useHistory()
  return (
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
  )
}

export default LevelBreadcrumb
