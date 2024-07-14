import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/dist/server/api-utils'
import React from 'react'

async function page() {
    const user = await currentUser()
    if (!user) {
        redirect("/sign-in");
    }
  return <div>page</div>
}

export default page