import React, { PropsWithChildren } from 'react'
import Link from 'next/link'
import { Lock } from 'lucide-react'
import { CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Card, CardContent, CardDescription } from '@/components/ui/card'

export interface AuthCardProps extends PropsWithChildren {
  title: string
  description: string
  helperMessage: string
  helperLink: string
  helperLinkLabel: string
}

const AuthCard = (props: AuthCardProps) => {
  const { description, title, children, helperLink, helperMessage, helperLinkLabel } = props
  return (
    <Card className="w-[400px] border-white/20 bg-white/10 backdrop-blur-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-3xl font-bold text-white">
          <Lock className="h-8 w-8" />
          {title}
        </CardTitle>
        <CardDescription className="text-white/70">{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <p className="text-sm text-white/70">
          <span>{helperMessage}</span> &nbsp;
          <Link href={helperLink} className="text-white hover:underline">
            {helperLinkLabel}
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}

export default AuthCard
