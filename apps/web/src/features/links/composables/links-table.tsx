'use client'
import React from 'react'
import LinksActionButtons from './link-action-buttons'
import { useAlertDialog } from '@/hooks/useAlertDialog'
import { useEditLinkDialog } from '../useEditLinkDialog'
import AlertDialog from '@/components/composables/alert-dialog'
import { Table, TableRow, TableBody } from '@/components/ui/table'
import { useLinkStatsDialog } from '@/features/links/useLinkStatsDialog'
import EditLinkDialog from '@/features/links/composables/edit-link-dialog'
import { TableCell, TableHead, TableHeader } from '@/components/ui/table'
import LinkStatsDialog from '@/features/links/composables/link-stats-dialog'

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
  const closeStatsDialog = useLinkStatsDialog((state) => state.close)
  const isOpenStatsDialog = useLinkStatsDialog((state) => state.isOpen)
  const closeEditDialog = useEditLinkDialog((state) => state.close)
  const isOpenEditDialog = useEditLinkDialog((state) => state.isOpen)
  const closeAlertDialog = useAlertDialog((state) => state.close)
  const isOpenAlertDialog = useAlertDialog((state) => state.isOpen)

  return (
    <React.Fragment>
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
                <LinksActionButtons />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* Table sub elements, modals and floating elements */}
      <EditLinkDialog open={isOpenEditDialog} onOpenChange={closeEditDialog} />
      <LinkStatsDialog open={isOpenStatsDialog} onOpenChange={closeStatsDialog} />
      <AlertDialog
        open={isOpenAlertDialog}
        onOpenChange={closeAlertDialog}
        title="Delete Link"
        body="Are you sure that you want to delete this link? deleting the link means that people will no longer be able to reach your website using this link anymore. Please be aware that this action can not be undone"
      />
    </React.Fragment>
  )
}

export default LinksTable
