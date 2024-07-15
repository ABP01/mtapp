import { TrendingUp } from 'lucide-react'
import React from 'react'

function Logo() {
    return <a href="/" className='flex items-center gap-2'>
        <TrendingUp className='stroke h-11 stroke-amber-500 stroke-[1.5]' />
        <p className='bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent'>FinanceTracker
        </p>
    </a>
}

export function LogoMobile() {
    return (
      <a href="/" className="flex items-center gap-2">
        <p className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
        FinanceTracker
        </p>
      </a>
    );
  }
   
export default Logo