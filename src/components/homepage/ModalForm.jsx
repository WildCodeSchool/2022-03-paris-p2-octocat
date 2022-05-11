import { useState } from "react";

export const ModalForm = () => {
 const [showModal, setShowModal] = useState(true);

 return (
  <div>
   {showModal && (
    <div>
     <form className="flex flex-col gap-5 sm:p-28">
      <h2 className="text-slate-50 text-2xl font-medium flex justify-center">
       SIGN IN
      </h2>
      <input
       className=" bg-neutral-800 text-slate-50 rounded p-2 w-72 mr-10 ml-10"
       type="text"
       name="Email"
       placeholder="Email"
      />
      <input
       className="bg-neutral-800 text-slate-50 rounded p-2 w-72 mr-10 ml-10"
       type="Password"
       name="Password"
       placeholder="Password"
      />
      <div className="text-slate-50 text-s flex justify-end mr-10">
       Forgot password ?
      </div>
      <input
       className="rounded py-2 px-2 w-72 mr-10 ml-10 mb-5 border-transparent bg-red-600 hover:bg-red-800 text-slate-50"
       type="submit"
       value="Sign In"
      />
      <div className="text-slate-50 text-s flex ml-10">
       Don't have an account ?
       <button className="ml-2" onClick={() => setShowModal(false)}>
        Sign Up
       </button>
      </div>
     </form>
    </div>
   )}

   {showModal === false && (
    <div>
     <form className="flex flex-col gap-5 sm:p-28">
      <h2 className="text-slate-50 text-2xl font-medium flex justify-center">
       SIGN UP
      </h2>
      <input
       className=" bg-neutral-800 text-slate-50 rounded p-2 w-72 mr-10 ml-10"
       type="text"
       name="Email"
       placeholder="Email"
      />
      <input
       className="bg-neutral-800 text-slate-50 rounded p-2 w-72 mr-10 ml-10"
       type="Password"
       name="Password"
       placeholder="Create password"
      />
      <input
       className="rounded py-2 px-2 w-72 mr-10 ml-10 mb-5 border-transparent bg-red-600 hover:bg-red-800 text-slate-50"
       type="submit"
       value="Sign Up"
      />
      <div className="text-slate-50 text-s flex ml-10">
       Already an account ?{" "}
       <button className="ml-2" onClick={() => setShowModal(true)}>
        Sign In
       </button>
      </div>
     </form>
    </div>
   )}
  </div>
 );
};

export default ModalForm;
