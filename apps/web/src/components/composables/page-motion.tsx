import React, { ComponentProps, PropsWithChildren } from 'react'
import * as motion from 'framer-motion/client'
import withPropsMerge from 'withpropsmerge'

const MotionDiv = withPropsMerge(motion.div)

const PageMotion = (props: ComponentProps<typeof motion.div>) => {
  return (
    <MotionDiv
      $overwrite={props}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {props.children}
    </MotionDiv>
  )
}

export default PageMotion
