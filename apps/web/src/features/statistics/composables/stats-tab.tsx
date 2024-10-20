import { TabsContent } from '@/components/ui/tabs'

import React, { PropsWithChildren } from 'react'
import PageMotion from '@/components/composables/page-motion'

export interface StatsTabProps extends PropsWithChildren {
  value: string
}

const StatsTab = (props: StatsTabProps) => {
  const { value, children, ...motionDivProps } = props
  return (
    <TabsContent value={value} className="mt-4">
      <PageMotion>{children}</PageMotion>
    </TabsContent>
  )
}

export default StatsTab
