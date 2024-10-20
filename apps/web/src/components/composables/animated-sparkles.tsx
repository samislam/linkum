import React from 'react'
import { Sparkles } from 'lucide-react'
import * as motion from 'framer-motion/client'

const AnimatedSparkles = () => {
  return (
    <motion.div
      className="absolute bottom-10 left-10"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
    >
      <Sparkles className="h-16 w-16 text-blue-400" />
    </motion.div>
  )
}

export default AnimatedSparkles
