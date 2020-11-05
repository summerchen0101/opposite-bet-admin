import React, { useEffect, useState } from 'react'
import PageHeader from '@/components/PageHeader'
import { EventManager as page, EventScore } from '@/pages/gameEvent/routes'
import { useBreadcrumb } from '@/utils/hooks'
import CreateButton from '../containers/CreateButton'

const Component: React.FC = () => {
  const routes = useBreadcrumb(page, [EventScore])
  return (
    <PageHeader
      title="美國 / NBA / 普羅森斯 VS 比勒菲爾德"
      breadcrumb={{ routes }}
      extra={<CreateButton />}
    />
  )
}

export default Component
