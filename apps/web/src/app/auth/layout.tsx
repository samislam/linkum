import React, { PropsWithChildren } from 'react'
import AppIcon from '@/components/composables/app-icon'

const layout = (props: PropsWithChildren) => {
  return (
    <div>
      <header className="absolute left-0 top-0 z-10 p-4">
        <AppIcon variant="icon-and-text-horizontal" size="medium" color="grey" />
      </header>
      <div>{props.children}</div>
    </div>
  )
}

export default layout
