import React from 'react'
import ReactDom from "react-dom"
import ModalForm from './ModalForm'

const Modal = ({ open, children, onClose }) => {
        if(!open) return null

        return ReactDom.createPortal(
            <div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-70 z-40">
            <div onClick={onClose} className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center z-50">
                <div onClick={(e) => {e.stopPropagation()}} className="flex flex-col bg-black rounded-lg">
                    <button onClick={onClose} className="flex justify-end pr-3 pt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                <ModalForm />
                </div>
            </div>
        </div>,
        document.getElementById('portal')
    )
}

export default Modal