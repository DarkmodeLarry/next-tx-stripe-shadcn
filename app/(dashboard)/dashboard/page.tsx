import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import { getCurrentUser } from '@/lib/session'
import { EmptyPlaceholder } from '@/components/empty-placeholder'
import { DashboardHeader } from '@/components/header'
import { PostCreateButton } from '@/components/post-create-button'
import { PostItem } from '@/components/post-item'
import { DashboardShell } from '@/components/shell'
import { db } from '@/lib/db'
import { getServerSession } from 'next-auth'

export const metadata = {
  title: 'Dashboard'
}

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  console.log('from dashboard, the user is', session)

  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || '/login')
  }
  if (user?.role === 'ADMIN') {
    redirect('/admin')
  }

  const posts = await db.post.findMany({
    where: {
      authorId: user.id
    },
    select: {
      id: true,
      title: true,
      published: true,
      createdAt: true
    },
    orderBy: {
      updatedAt: 'desc'
    }
  })

  return (
    <DashboardShell>
      <DashboardHeader heading='Posts' text='Create and manage posts.'>
        <PostCreateButton />
      </DashboardHeader>
      <div>
        {posts?.length ? (
          <div className='border divide-y rounded-md divide-border'>
            {posts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <EmptyPlaceholder>
            <EmptyPlaceholder.Icon name='post' />
            <EmptyPlaceholder.Title>No posts created</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              You don&apos;t have any posts yet. Start creating content.
            </EmptyPlaceholder.Description>
            <PostCreateButton variant='outline' />
          </EmptyPlaceholder>
        )}
      </div>
    </DashboardShell>
  )
}
