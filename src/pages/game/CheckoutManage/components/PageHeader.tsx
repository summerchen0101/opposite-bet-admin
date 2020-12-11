import PageHeader from '@/components/PageHeader'
import { useBreadcrumb } from '@/utils/hooks'
import React from 'react'
import { usePopupProvider } from '../../GameManage/context/PopupProvider'
import { CheckoutManage as page } from '../../routes'

const Component: React.FC = () => {
  const routes = useBreadcrumb(page)
  const [visible, setVisible] = usePopupProvider('createForm')
  return <PageHeader title={page.name} breadcrumb={{ routes }} />
}

export default Component
