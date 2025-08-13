import * as React from 'react'
import { SVGProps } from 'react'

const Dropdown2Svg: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={7}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m11.709 1.167-1.82 1.836C8.437 4.468 7.712 5.2 6.827 5.313a2.58 2.58 0 0 1-.653 0c-.884-.113-1.61-.845-3.062-2.31l-1.82-1.836"
    />
  </svg>
)
}
export default Dropdown2Svg; 
