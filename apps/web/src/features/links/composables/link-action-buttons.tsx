'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { BarChart2, Edit2, Trash2 } from 'lucide-react'
import { useEditLinkDialog } from '../useEditLinkDialog'
import { useLinkStatsDialog } from '../useLinkStatsDialog'
import { useAlertDialog } from '@/hooks/useAlertDialog'

const LinksActionButtons = () => {
  const openLinkStatsDialog = useLinkStatsDialog((state) => state.open)
  const openEditLinkDialog = useEditLinkDialog((state) => state.open)
  const openAlertDialog = useAlertDialog((state) => state.open)
  return (
    <div className="flex space-x-2">
      <Button variant="outline" size="sm" onClick={openEditLinkDialog}>
        <Edit2 className="h-4 w-4" />
      </Button>
      <Button
        size="sm"
        variant="outline"
        onClick={openAlertDialog}
        className="text-red-600 hover:text-red-700"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="sm" onClick={openLinkStatsDialog}>
        <BarChart2 className="h-4 w-4" />
      </Button>
    </div>
  )
}

export default LinksActionButtons
