
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { AuthOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {
  const session= await getServerSession(AuthOptions)
  return (
    <main>
      <h1>Hello {session && <div>
        {session.user!.name}
        <link href="api/auth/signout">Signout</link>
        </div> }</h1>
      <Link href="/">users</Link>
    </main>
  )
}
