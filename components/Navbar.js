'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const {data:session} = useSession()
  return (
    <header className='px-4 py-8'>
      <div className='flex justify-between max-w-screen-xl mx-auto'>
        <Link href='/'>TaskManager</Link>
        <div>
          {session ? (
            <>
            <p>{session.user.email}</p>
            <Link href='/task'>Task</Link>
            <button onClick={()=>signOut()}>signOut</button>
            </>
          ):(
          <button onClick={()=>signIn()}>SingnIn</button>
          )

          }
        </div>
      </div>
    </header>
  )
}

export default Navbar
