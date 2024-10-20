'use client'

import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useForm } from 'react-hook-form'

const ShortenLinkForm = () => {
  const { register, handleSubmit } = useForm()
  return (
    <form onSubmit={handleSubmit((data: any) => console.log(data))}>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Label htmlFor="label" className="whitespace-nowrap text-blue-700">
            Custom Label:
          </Label>
          <Input
            id="label"
            placeholder="my-awesome-link"
            {...register('label')}
            className="border-blue-200 bg-white/50 text-blue-800 placeholder-blue-400"
          />
        </div>
        <div className="flex gap-2">
          <Input
            id="url"
            placeholder="Enter your long URL here"
            {...register('originalUrl')}
            className="border-blue-200 bg-white/50 py-6 text-lg text-blue-800 placeholder-blue-400"
          />
          <Button className="bg-blue-600 px-8 py-6 text-white hover:bg-blue-700">
            Shorten
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </form>
  )
}

export default ShortenLinkForm
