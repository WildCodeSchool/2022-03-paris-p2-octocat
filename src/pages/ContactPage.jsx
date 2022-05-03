import Navbar from "../components/homepage/Navbar";
import Footer from "../components/homepage/Footer";
import Background from "../../src/assets/images/background.jpeg";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react"

const ContactPage = () => {
 const form = useRef();

 const [status, setStatus] = useState('');

 const sendEmail = (e) => {
  e.preventDefault();

  emailjs 
   .sendForm(
    process.env.REACT_APP_YOUR_SERVICE_ID,
    process.env.REACT_APP_YOUR_TEMPLATE_ID,
    form.current,
    process.env.REACT_APP_YOUR_PUBLIC_KEY
   )
   .then(
    (result) => {
     console.log(result.text);
     setStatus('SUCCESS');
    },
    (error) => {
     console.log(error.text);
    }
   );
 };

 useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 10000);
    }
  }, [status]);

 return (
  <div>
   <Navbar />
   <div>
    <div className="absolute h-screen w-screen flex justify-center items-center z-50">
     <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-5 sm:p-28 pt-10 relative bg-black"
     >
      <h2 className="text-slate-50 text-2xl font-medium flex justify-center">
       CONTACT FORM
      </h2>
      <div className=" text-slate-50 rounded p-2 w-72 mr-10 ml-10">
        {status && renderAlert()}
        </div>
      <input
       className=" bg-neutral-800 text-slate-50 rounded p-2 w-72 mr-10 ml-10"
       type="text"
       name="Nom"
       placeholder="Nom"
      />
      <input
       className="bg-neutral-800 text-slate-50 rounded p-2 w-72 mr-10 ml-10"
       type="text"
       name="Email"
       placeholder="Email"
      />
      <input
       className="bg-neutral-800 text-slate-50 rounded p-2 w-72 mr-10 ml-10"
       type="text"
       name="Phone"
       placeholder="Phone"
      />
      <select
       className="bg-neutral-800 text-gray-400 rounded p-2 w-72 mr-10 ml-10"
       type="text"
       name="Subject"
       placeholder="Subject"
      >
       <option stylevalue="1">Select your subject</option>
       <option value="1">Fakeflix is Awsome</option>
       <option value="1">Good Job Bro</option>
       <option value="1">Need to talk to someone</option>
      </select>
      <textarea
       className="bg-neutral-800 text-slate-50 rounded p-2 w-72 h-30 mr-10 ml-10"
       type="textarea"
       name="Message"
       placeholder="Message"
      />
      <input
       className="rounded py-2 px-2 w-72 mr-10 ml-10 mb-5 border-transparent bg-red-600 hover:bg-red-800 text-slate-50"
       type="submit"
       value="SEND"
      />
      <div className="text-slate-50 text-xs flex ml-10"></div>
     </form>
    </div>
    <img
     className="object-cover bg-center h-screen w-screen bg-black opacity-30"
     src={Background}
     alt="background"
    />
   </div>
   <Footer />
  </div>
 );
};

const renderAlert = () => (
    <div className="px-4 py-3 leading-normal text-red-600 bg-blue-100 rounded mb-5 text-center">
      <p>Your message submitted successfully</p>
    </div>
  )

export default ContactPage;
