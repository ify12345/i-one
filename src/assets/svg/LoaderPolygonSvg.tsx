import * as React from 'react'
import { SVGProps } from 'react'

const LoaderPolygonSvg: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
   <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={45}
    fill="none"
    {...props}
  >
    <path
      fill="#CDCDCD"
      d="m23.75 0 23.3 16.93-8.9 27.39H9.35L.45 16.93 23.75 0Z"
    />
  </svg>
  )
}
export default LoaderPolygonSvg;