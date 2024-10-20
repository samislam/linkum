import React from 'react'
import { Card, CardContent, CardTitle } from '@/components/ui/card'

interface StatCardProps {
  title: string
  value: string
  valueColor: 'green' | 'blue'
}

const StatCard = (props: StatCardProps) => {
  const { title, value, valueColor } = props
  return (
    <Card>
      <CardTitle className="mb-4 text-xl font-semibold">{title}</CardTitle>
      <CardContent className="p-0">
        <p className={`text-4xl font-bold text-${valueColor}-600`}>{value}</p>
      </CardContent>
    </Card>
  )
}

export default StatCard
