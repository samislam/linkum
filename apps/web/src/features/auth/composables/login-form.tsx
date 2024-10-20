'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

const LoginForm = () => {
  const { register, handleSubmit } = useForm()
  return (
    <form className="space-y-4" onSubmit={handleSubmit((data: any) => console.log(data))}>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-white">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          {...register('email')}
          className="border-white/30 bg-white/20 text-white placeholder-white/50"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password" className="text-white">
          Password
        </Label>
        <Input
          id="password"
          type="password"
          {...register('password')}
          className="border-white/30 bg-white/20 text-white placeholder-white/50"
        />
      </div>
      <Button className="w-full bg-white text-indigo-600 hover:bg-white/90">
        Login
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  )
}

export default LoginForm
