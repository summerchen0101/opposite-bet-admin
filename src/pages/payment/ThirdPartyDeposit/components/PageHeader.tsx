import React from 'react'
import PageHeader from '@/components/PageHeader'
import { ThirdPartyDeposit as page } from '@/pages/payment/routes'
import { useBreadcrumb } from '@/utils/hooks'

const Component: React.FC = () => {
  const routes = useBreadcrumb(page)
  return <PageHeader title={page.name} breadcrumb={{ routes }} />
}

export default Component
