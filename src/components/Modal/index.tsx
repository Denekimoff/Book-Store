import React, { PropsWithChildren } from 'react'
import ReactDOM from 'react-dom'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import './Modal.scss'

interface IModalProps {
  controlled: boolean,
  active: boolean,
  title?: string,
  onConfirm?: () => void
  onClose?: () => void
}

export const Modal = ({ controlled, active, title, onConfirm, onClose, children }: PropsWithChildren<IModalProps>): any => {
    //Ref and Stop Scroll on anable Menu
    const { current } = React.useRef(document.body)
    React.useEffect(() => {
        active ? disableBodyScroll(current) : enableBodyScroll(current)
        return () => clearAllBodyScrollLocks()
    }, [active])

    if (!active) return null

    const handlerOnStopPropagation = (event: any) => event.stopPropagation()

    const portalElement = document.querySelector('#root')
    if (portalElement) {
        return ReactDOM.createPortal((
            <div className='modal' onClick={onClose}>
                <div className={controlled ? 'modal__content--controlled' : 'modal__content'} onClick={handlerOnStopPropagation}>
                    <div className='modal__top'>
                        <h2 className='modal__title'>{title}</h2>
                    </div>
                    <div className='modal__body'>{children}</div>
                    {controlled &&
                <div className='modal__footer'>
                    {onConfirm ? (
                        <>
                            <button onClick={onConfirm}>YES</button>
                            <button onClick={onClose}>NO</button>
                        </>) : (
                        <>
                            <button onClick={onClose}>OK</button>
                        </>)}
                </div>
                    }
                </div>
            </div>
        ), portalElement)
    }
}