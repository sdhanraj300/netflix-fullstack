"use client"
import UnauthPage from '@/components/unauth-page';
import { useSession } from 'next-auth/react';
import React from 'react'

const page = () => {
  
  const {data : session} = useSession();

  if(session === null)
  return <UnauthPage/>
  return (
    <div>page</div>
  )
}

export default page