import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'
import { tw } from '@/lib/tailwindTool'
import appConfig from '#/config/app.config'
import React, { ComponentProps } from 'react'
import pagesDefsConfig from '#/config/pagesDefs.config'
import { Span } from '@/components/ui/conditional-components'

export type AppIconVariants =
  | 'icon'
  | 'text'
  | 'icon-and-text-vertical'
  | 'icon-and-text-horizontal'
export type AppIconSizes = 'small' | 'medium' | 'large'
export interface AppIconProps extends Partial<ComponentProps<typeof Image>> {
  variant?: AppIconVariants
  size?: AppIconSizes
  color?: 'blue' | 'green' | 'grey'
}

const appIconSizesMap = tw.rotary<Record<AppIconSizes, any>>({
  small: {
    width: 'w-8',
  },
  medium: {
    width: 'w-12',
  },
  large: {
    width: 'w-16',
  },
})

const appIconTextSizesMap = tw.rotary<Record<AppIconSizes, any>>({
  small: {
    fontSize: 'text-sm',
  },
  medium: {
    fontSize: 'text-2xl',
  },
  large: {
    fontSize: 'text-4xl',
  },
})

const AppIcon = (props: AppIconProps) => {
  const {
    variant = 'icon-and-text-horizontal',
    size = 'medium',
    color = 'blue',
    ...imageProps
  } = props
  return (
    <Link
      href={pagesDefsConfig.home.href}
      className={classNames('flex items-center gap-2', {
        'flex-col': variant === 'icon-and-text-vertical',
      })}
    >
      <Image
        {...imageProps}
        src={appConfig.appIcon}
        alt={appConfig.appName}
        className={classNames(appIconSizesMap.class(size), { hidden: variant === 'text' })}
      />
      <Span
        renderIf={variant !== 'icon'}
        className={classNames(`font-bold text-${color}-600`, appIconTextSizesMap.class(size))}
      >
        {appConfig.appName}
      </Span>
    </Link>
  )
}

export default AppIcon
