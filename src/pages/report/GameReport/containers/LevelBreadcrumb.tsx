import {
  getLevelCode,
  getLevelName,
  getParentLevelCodes,
} from '@/utils/transfer'
import { HomeOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLevelProvider } from '../context/LevelProvider'
import { GameReport } from '../../routes'

const LevelBreadcrumb: React.FC = () => {
  const { currentLevel, parentLevel } = useLevelProvider()
  return (
    <Breadcrumb className="mb-1">
      {parentLevel && (
        <Breadcrumb.Item>
          <Link to={GameReport.path}>
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
              <Link to={`${GameReport.path}/${getLevelCode(code, 1)}`}>
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
