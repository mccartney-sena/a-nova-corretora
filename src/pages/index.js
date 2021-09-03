import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Home() {
  const router = useRouter()
  const [session] = useSession()
  useEffect(() => {
    if (session) {
      router.push('/dashboard')
    }
  }, [session])
  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </>
  )
}
