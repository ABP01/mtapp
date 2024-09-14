import React, { ReactNode } from 'react';
import Logo from '@/components/Logo';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center">
      <Logo />
      <div className="mt-12">{children}</div>
    </div>
  );
}

export default Layout;