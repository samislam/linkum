'use client'

import React from 'react'
import StatCard from './stat-card'
import { Card, CardTitle } from '../ui/card'
import ClicksOverTimeDiagram from './clicks-over-time-diagram'

const StatisticsTabContent = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <StatCard title="Total Clicks" value="5,555" valueColor="blue" />
        <StatCard title="New User Clicks" value="1,801" valueColor="green" />
      </div>
      <Card>
        <CardTitle className="mb-4 text-xl font-semibold">Clicks Over Time</CardTitle>
        <ClicksOverTimeDiagram />
      </Card>
    </div>
  )
}

export default StatisticsTabContent
