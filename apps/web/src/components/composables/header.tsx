import React from 'react'
import Link from 'next/link'
import AppIcon from './app-icon'
import { Button } from '../ui/button'
import pagesDefsConfig from '#/config/pagesDefs.config'

const Header = () => {
  return (
    <header className="absolute left-0 top-0 z-10 flex w-full items-center justify-between p-4">
      <AppIcon variant="icon-and-text-horizontal" size="medium" />
      <Link href={pagesDefsConfig.login.href}>
        <Button
          variant="outline"
          className="border-blue-200 bg-white/50 text-blue-600 backdrop-blur-sm hover:bg-white/70"
        >
          Login
        </Button>
      </Link>
    </header>
  )
}

export default Header
