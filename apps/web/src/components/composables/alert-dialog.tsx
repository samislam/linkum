'use client'
import { Button } from '../ui/button'
import React, { ReactNode } from 'react'
import { DialogBaseProps } from '@/types/DialogBaseProps'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog'

interface AlertDialogProps extends DialogBaseProps {
  /** a descriptive title */
  title?: string
  /** The content of the dialog */
  body?: ReactNode
  /** trigger an action when the confirm button is clicked */
  onConfirm?: () => void
  /** trigger an action when the cancel button is clicked */
  onCancel?: () => void
  /** change the default 'Confirm' label */
  confirmLabel?: string
  /** change the default 'Cancel' label */
  cancelLabel?: string
  /** automatically close the dialog when the cancel or confirm button is clicked */
  autoClose?: boolean
}

const AlertDialog = (props: AlertDialogProps) => {
  const {
    open,
    body,
    title,
    onCancel,
    onConfirm,
    onOpenChange,
    autoClose = true,
    cancelLabel = 'Cancel',
    confirmLabel = 'Confirm',
  } = props

  const handleCancel = () => {
    if (autoClose) onOpenChange(false)
    onCancel?.()
  }
  const handleConfirm = () => {
    if (autoClose) onOpenChange(false)
    onConfirm?.()
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div>{body}</div>
        <DialogFooter>
          <Button onClick={handleCancel} variant="ghost">
            {cancelLabel}
          </Button>
          <Button onClick={handleConfirm} variant="destructive">
            {confirmLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AlertDialog
