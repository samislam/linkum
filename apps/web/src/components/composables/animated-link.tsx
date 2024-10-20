import React from 'react'
import { LinkIcon } from 'lucide-react'
import * as motion from 'framer-motion/client'

const AnimatedLink = () => {
  return (
    <motion.div
      className="absolute right-20 top-20"
      animate={{ rotate: -360 }}
      transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
    >
      <LinkIcon className="h-20 w-20 text-blue-400" />
    </motion.div>
  )
}

export default AnimatedLink
