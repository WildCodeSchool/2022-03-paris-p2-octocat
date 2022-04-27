import React from 'react'
import ReactDom from "react-dom"

const Modal = ({ open, hide }) => {

        if(!open) return null

        return ReactDom.createPortal(
        <div className="fixed top-0 left-0 h-screen w-screen bg-black/75 z-40">
            <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center z-50">
                <div className="flex flex-col justify-center items-center bg-black p-40 rounded-lg">
                    <h2 className="text-slate-50 text-2xl font-medium">REGISTER</h2>
                    <form className="flex flex-col gap-5">
                        <button
                            type="button"
                            className="modal-close-button"
                            onClick={hide}
                        />
                        <input 
                            className="bg-neutral-800 rounded p-2 w-72" 
                            type="text"
                            name="name"
                            placeholder="Name"
                        />
                        <input 
                            className="bg-neutral-800 rounded p-2 w-72" 
                            type="text"
                            name="email"
                            placeholder="Email"
                        />
                        <label className="text-slate-50">
                            <input 
                            className="mr-4" 
                            type="checkbox"
                            name="terms accepted"
                            placeholder="email"
                            />
                            I accept terms of use !
                        </label>
                        <button className="rounded py-2 px-2 border-transparent bg-red-600 hover:bg-red-800 text-slate-50">Register</button>
                    </form>
                </div>
            </div>
        </div>,
        document.getElementById('portal')
    )
}

export default Modal