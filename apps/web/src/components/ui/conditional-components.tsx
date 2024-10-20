import withConditionals from 'conditionalize-component'
import { HTMLAttributes } from 'react'

export const Span = withConditionals<HTMLAttributes<HTMLSpanElement>>((props) => (
  <span {...props} />
))
