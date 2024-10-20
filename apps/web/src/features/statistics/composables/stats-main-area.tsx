import React from 'react'
import StatsTab from './stats-tab'
import StatisticsTabContent from './statistics-tab-content'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import MyLinksTabContent from '@/features/links/composables/my-links-tab-content'

const StatsMainArea = () => {
  return (
    <Tabs defaultValue="links" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="links">My Links</TabsTrigger>
        <TabsTrigger value="stats">Statistics</TabsTrigger>
      </TabsList>
      <StatsTab value="links">
        <MyLinksTabContent />
      </StatsTab>
      <StatsTab value="stats">
        <StatisticsTabContent />
      </StatsTab>
    </Tabs>
  )
}

export default StatsMainArea
