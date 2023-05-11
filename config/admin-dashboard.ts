import { DashboardConfigAdmin } from 'types'

export const dashboardConfigAdmin: DashboardConfigAdmin = {
  mainNavAdmin: [
    {
      title: 'Documentation',
      href: '/docs'
    },
    {
      title: 'Support',
      href: '/support',
      disabled: true
    }
  ],
  sidebarNavAdmin: [
    {
      title: 'Admin Home',
      href: '/admin',
      icon: 'post'
    },
    {
      title: 'Billing',
      href: '/dashboard/billing',
      icon: 'billing'
    },
    {
      title: 'Edit Training Menu',
      href: '/admin/menu',
      icon: 'settings'
    },
    {
      title: 'Availability',
      href: '/admin/availability',
      icon: 'calendar'
    },
    {
      title: 'Settings',
      href: '/admin/settings',
      icon: 'settings'
    }
  ]
}
