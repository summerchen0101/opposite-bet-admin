import { Permission, RemotePermission } from '@/lib/types'

export const permissionTransfer = (per: RemotePermission): Permission => {
  return { view: per.VIEW === 'Y', edit: per.EDIT === 'Y' }
}
