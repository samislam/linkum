import { cn } from '@/lib/utils'
import withPropsMerge from 'withpropsmerge'
import React, { ComponentProps } from 'react'
import * as motion from 'framer-motion/client'

const MotionDiv = withPropsMerge(motion.div)

interface AnimatedBubblesProps extends ComponentProps<typeof motion.div> {
  count?: number
}

const AnimatedBubbles = (props: AnimatedBubblesProps) => {
  const { className, count = 10, ...motionDivProps } = props
  return [...Array(count)].map((_, i) => (
    <MotionDiv
      $overwrite={motionDivProps}
      className={cn('absolute rounded-full bg-blue-200 opacity-20', className)}
      key={i}
      style={{
        width: Math.random() * 100 + 50,
        height: Math.random() * 100 + 50,
      }}
      animate={{
        x: ['-100%', '100%'],
        y: ['-100%', '100%'],
      }}
      transition={{
        duration: Math.random() * 10 + 20,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'linear',
      }}
    />
  ))
}

export default AnimatedBubbles
