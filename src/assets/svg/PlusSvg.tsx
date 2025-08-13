import * as React from 'react'
import { SVGProps } from 'react'

const PlusSvg: React.FC<SVGProps<SVGSVGElement>> = (props) => {
      return (
 <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path stroke="#000" strokeLinecap="round" d="M8.652 1v16M1 9.667h16" />
  </svg>
)
}
export default PlusSvg
