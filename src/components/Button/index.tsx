import React from 'react'

export interface IButton {
  type?: 'button' | 'submit' | 'reset',
  className?: string,
  disabled?: boolean,
  children?: any,
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}

export const Button = ({ type = 'button', className = 'button', disabled, children, onClick }: IButton) => {
    return (
        <button type={type} className={className} disabled={disabled} onClick={onClick}>{children}</button>
    )
}
