import * as React from 'react'
import { SVGProps } from 'react'

const FilterSvg: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={20}
            fill="none"
        >
            <path
                fill="#03EA89"
                fillRule="evenodd"
                d="M3 .25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5ZM1.75 3a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z"
                clipRule="evenodd"
            />
            <path
                fill="#03EA89"
                d="M9 2.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5H9Z"
            />
            <path
                fill="#03EA89"
                fillRule="evenodd"
                d="M15 7.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5ZM13.75 10a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z"
                clipRule="evenodd"
            />
            <path
                fill="#03EA89"
                d="M1 9.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5H1Z"
            />
            <path
                fill="#03EA89"
                fillRule="evenodd"
                d="M3 14.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5ZM1.75 17a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z"
                clipRule="evenodd"
            />
            <path
                fill="#03EA89"
                d="M9 16.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5H9Z"
            />
        </svg>

    )
}
export default FilterSvg;