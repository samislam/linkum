'use client'

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useForm } from 'react-hook-form'

const EditLinkModal = () => {
  const [selectedLink, setSelectedLink] = useState(null)
  const { register, handleSubmit } = useForm()

  return (
    <Dialog open={!!selectedLink} onOpenChange={() => setSelectedLink(null)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Link</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="edit-label">Label</Label>
            <Input
              id="edit-label"
              value={selectedLink?.label || ''}
              onChange={(e) => setSelectedLink({ ...selectedLink, label: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="edit-url">URL</Label>
            <Input
              id="edit-url"
              value={selectedLink?.url || ''}
              onChange={(e) => setSelectedLink({ ...selectedLink, url: e.target.value })}
            />
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          <Button variant="outline" onClick={() => setSelectedLink(null)}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              // Update link logic here
              setSelectedLink(null)
            }}
          >
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default EditLinkModal
