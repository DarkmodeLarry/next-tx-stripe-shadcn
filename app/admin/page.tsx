import { DashboardHeader } from '@/components/header'
import { DashboardShell } from '@/components/shell'
import { authOptions } from '@/lib/auth'
import { getCurrentUser } from '@/lib/session'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

import { FC } from 'react'

interface pageProps {}

export default async function AdminPage() {
  const session = await getServerSession(authOptions)
  console.log('from the admin dashboard, user is ', session)

  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || '/login')
  }

  if (user?.role !== 'ADMIN') {
    redirect('/dashboard/admin')
  }

  return (
    <DashboardShell>
      <DashboardHeader heading='Admin' text='Manage your site.' />
    </DashboardShell>
  )
}
