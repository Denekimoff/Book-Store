import { PropsWithChildren } from 'react'
import './Modal.scss'

interface IModalProps {
  controlled: boolean,
  active: boolean,
  title?: string,
  onConfirm?: () => void
  onClose?: () => void
}

export const Modal = ({ controlled, active, title, onConfirm, onClose, children }: PropsWithChildren<IModalProps>) => {
    if (!active) return null

    const handlerOnStopPropagation = (event: any) => event.stopPropagation()

    return (
        <div className='modal' onClick={onClose}>
            <div className={controlled ? 'modal__content--controlled' : 'modal__content'} onClick={handlerOnStopPropagation}>
                <div className='modal__top'>
                    <h2 className='modal__title'>{title}</h2>
                </div>
                <div className='modal__body'>{children}</div>
                {controlled &&
                <div className='modal__footer'>
                    <button onClick={onConfirm}>YES</button>
                    <button onClick={onClose}>NO</button>
                </div>
                }
            </div>
        </div>
    )
}
