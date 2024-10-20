import React from 'react'
import { Line, XAxis, YAxis, Tooltip } from 'recharts'
import { LineChart, CartesianGrid, ResponsiveContainer } from 'recharts'

const mockChartData = [
  { name: 'Jan', clicks: 400, newUsers: 240 },
  { name: 'Feb', clicks: 300, newUsers: 139 },
  { name: 'Mar', clicks: 200, newUsers: 980 },
  { name: 'Apr', clicks: 278, newUsers: 390 },
  { name: 'May', clicks: 189, newUsers: 480 },
]

const ClicksOverTimeDiagram = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={mockChartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="clicks" stroke="#3b82f6" />
        <Line type="monotone" dataKey="newUsers" stroke="#10b981" />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default ClicksOverTimeDiagram
