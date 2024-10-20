'use client'

import React from 'react'
import { MapPin, Globe } from 'lucide-react'
import { Dialog, DialogTitle } from '@/components/ui/dialog'
import { Table, TableRow, TableBody } from '@/components/ui/table'
import { TableCell, TableHead, TableHeader } from '@/components/ui/table'
import { DialogHeader, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import ClicksOverTimeDiagram from '@/features/statistics/composables/clicks-over-time-diagram'
import { DialogBaseProps } from '@/types/DialogBaseProps'

const mockClickData = [
  {
    id: 1,
    ip: '192.168.1.1',
    location: 'New York, USA',
    referrer: 'https://twitter.com',
  },
  {
    id: 2,
    ip: '10.0.0.1',
    location: 'London, UK',
    referrer: 'https://facebook.com',
  },
]

export interface LinkStatsDialogProps extends DialogBaseProps {}

const LinkStatsDialog = (props: LinkStatsDialogProps) => {
  const { open, onOpenChange } = props

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Link Statistics</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <h3 className="mb-2 text-lg font-semibold">Clicks over time</h3>
          <ClicksOverTimeDiagram />
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Recent Clicks</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Location</TableHead>
                <TableHead>Referrer</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockClickData.map((click) => (
                <TableRow key={click.id}>
                  <TableCell>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-blue-500" />
                      {click.location}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Globe className="mr-2 h-4 w-4 text-green-500" />
                      {click.referrer}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default LinkStatsDialog
