import React from 'react'
import PageHeader from '@/components/PageHeader'
import TopCreateButton from '../containers/createButtons/TopCreateButton'
import LevelCreateButton from '../containers/createButtons/LevelCreateButton'
import MemberCreateButton from '../containers/createButtons/MemberCreateButton'
import { OrganizationManage as page } from '@/pages/organization/routes'
import { useBreadcrumb } from '@/utils/hooks'
import { selectCurrentLevel, useTypedSelector } from '../selectors'

const Component: React.FC = () => {
  const routes = useBreadcrumb(page)
  const currentLevel = useTypedSelector(selectCurrentLevel)
  return (
    <PageHeader
      title={page.name}
      extra={pickCreateBtn(currentLevel)}
      breadcrumb={{ routes }}
    />
  )
}

export default Component

function pickCreateBtn(level) {
  switch (level) {
    case 1:
      return <TopCreateButton />

    case 2:
      return <LevelCreateButton />

    case 3:
      return <MemberCreateButton />
  }
}
