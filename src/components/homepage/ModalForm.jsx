import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ModalForm = () => {
  
    const form = useRef();

const sendEmail = (e) => {
e.preventDefault();

emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
    .then((result) => {
        console.log(result.text);
        alert("SUCCESS!");
    }, (error) => {
        console.log(error.text); 
    });
};

  return (
    <div>
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5 sm:p-28">
    <h2 className="text-slate-50 text-2xl font-medium flex justify-center">LOGIN</h2>
    <input 
        className=" bg-neutral-800 text-slate-50 rounded p-2 w-72 mr-10 ml-10" 
        type="text"
        name="name"
        placeholder="Name"
    />
    <input 
        className="bg-neutral-800 text-slate-50 rounded p-2 w-72 mr-10 ml-10" 
        type="text"
        name="email"
        placeholder="Email"
    />
    <label className="text-slate-50 flex items-center justify-center">
        <input 
        className="mr-4" 
        type="checkbox"
        name="terms accepted"
        placeholder="email"
        />
        I accept terms of use !
    </label>
    <input className="rounded py-2 px-2 w-72 mr-10 ml-10 mb-10 border-transparent bg-red-600 hover:bg-red-800 text-slate-50" type="submit" value="Please Register Me!" />
 
    </form>
    </div>
  );
}

export default ModalForm