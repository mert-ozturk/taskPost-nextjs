'use client'

import { useSession } from 'next-auth/react'
import React from 'react'

const Navbar = () => {
  const {data:session} = useSession()
  return (
    <header>
      
    </header>
  )
}

export default Navbar
