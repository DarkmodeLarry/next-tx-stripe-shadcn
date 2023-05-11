import { notFound } from 'next/navigation'
import '@/styles/calendar.css'

import { getCurrentUser } from '@/lib/session'
import { MainNav } from '@/components/main-nav'
import { DashboardNav } from '@/components/nav'
import { SiteFooter } from '@/components/site-footer'
import { UserAccountNav } from '@/components/user-account-nav'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { dashboardConfigAdmin } from '@/config/admin-dashboard'

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  const session = await getServerSession(authOptions)
  console.log(session)

  const user = await getCurrentUser()

  if (!user) {
    return notFound()
  }

  return (
    <div className='flex flex-col min-h-screen space-y-6'>
      <header className='sticky top-0 z-40 border-b bg-background'>
        <div className='container flex items-center justify-between h-16 py-4'>
          <MainNav items={dashboardConfigAdmin.mainNavAdmin} />
          <UserAccountNav
            user={{
              name: user.name,
              image: user.image,
              email: user.email
            }}
          />
        </div>
      </header>
      <div className='container grid flex-1 gap-12 md:grid-cols-[200px_1fr]'>
        <aside className='hidden w-[200px] flex-col md:flex'>
          <DashboardNav items={dashboardConfigAdmin.sidebarNavAdmin} />
        </aside>
        <main className='flex flex-col flex-1 w-full overflow-hidden'>{children}</main>
      </div>
      <SiteFooter className='border-t' />
    </div>
  )
}
