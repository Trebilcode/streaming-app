import React from 'react'
import ReactDOM from 'react-dom'


const Modal = ({title, actions, content, onDismiss}) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active" onClick={onDismiss}>
      <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
        <div className="header">{title}</div>
        <div className="content">{content}</div>
        <div className="actions">
          {actions}
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default Modal
