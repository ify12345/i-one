import * as React from 'react'
import { SVGProps } from 'react'

const DropdownSvg: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={6}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m1.291 5.083 1.82-1.836C4.563 1.782 5.288 1.05 6.173.937c.217-.027.436-.027.653 0 .884.113 1.61.845 3.062 2.31l1.82 1.836"
    />
  </svg>
)
}
export default DropdownSvg; 
