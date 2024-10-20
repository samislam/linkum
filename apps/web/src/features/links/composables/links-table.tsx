'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Edit2, Trash2, BarChart2 } from 'lucide-react'
import { Table, TableRow, TableBody } from '@/components/ui/table'
import { TableCell, TableHead, TableHeader } from '@/components/ui/table'

const mockLinks = [
  {
    id: 1,
    label: 'awesome-blog',
    url: 'https://example.com/my-awesome-blog-post',
    clicks: 1234,
    newUserClicks: 567,
  },
  {
    id: 2,
    label: 'product-launch',
    url: 'https://example.com/new-product-2023',
    clicks: 4321,
    newUserClicks: 1234,
  },
]

const LinksTable = () => {
  const [selectedLink, setSelectedLink] = useState(null)
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Label</TableHead>
          <TableHead>URL</TableHead>
          <TableHead>Clicks</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockLinks.map((link) => (
          <TableRow key={link.id}>
            <TableCell>{link.label}</TableCell>
            <TableCell className="max-w-xs truncate">{link.url}</TableCell>
            <TableCell>{link.clicks}</TableCell>
            <TableCell>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" onClick={() => setSelectedLink(link)}>
                  <Edit2 className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                  <Trash2 className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <BarChart2 className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default LinksTable
