import React from 'react'

export const CloseIcon = ({ onClick }: any) => {
    return (
        <>
            <svg onClick={onClick} viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'><path d='M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z'/><path d='M0 0h48v48h-48z' fill='none'/></svg>
        </>
    )
}
