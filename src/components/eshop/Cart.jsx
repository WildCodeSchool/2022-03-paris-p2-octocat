import React from 'react'
import Navbar from '../homepage/Navbar'
import Footer from '../homepage/Footer'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <>
    <Navbar />
      <div className='py-4 text-red-500 ml-14 mb-2 font-bold text-3xl'>Cart</div>
      <Link to="/shop">
        <button className="ml-14 text-lg font-bold bg-slate-600 py-1 px-2 rounded-sm hover:bg-slate-500">back to products</button>
      </Link>
      <div className="h-full pt-6 mx-10 md:h-screen flex items-start justify-center">
        <div className="w-2/3 grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
            <div className="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
              <div className="flex justify-between px-4 items-center">
                  <div className="text-lg font-semibold"> 
                    <p>Add</p>
                    <p className="text-gray-400 text-base"></p>
                  </div>
                  <div className="text-lg font-semibold"> 
                  <button className="focus:outline-none bg-pink-700 hover:bg-pink-800 font-bold py-2 px-2 rounded-full inline-flex items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </button>
                  </div>
              </div>
            </div>
            <div className="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
              <div className="flex justify-between px-4 items-center">
                  <div className="text-lg text- font-semibold"> 
                    <p>Standout Ads</p>
                    <p className="text-gray-400 text-base"></p>
                  </div>
                  <div className="text-lg font-semibold"> 
                  <button className="focus:outline-none bg-pink-700 hover:bg-pink-800 font-bold py-2 px-2 rounded-full inline-flex items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </button>
                  </div>
              </div>
            </div>
            <div className="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
              <div className="flex justify-between px-4 items-center">
                  <div className="text-lg font-semibold"> 
                    <p>Premium Ads</p>
                    <p className="text-gray-400 text-base"></p>
                  </div>
                  <div className="text-lg font-semibold"> 
                  <button className="focus:outline-none bg-pink-700 hover:bg-pink-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </button>
                  </div>
              </div>
            </div>   
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
            <div className="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
                <div className="flex justify-between border-b-2 mb-2">
                      <div className="text-lg py-2"> 
                        <p>classNameic Ads</p>
                      </div>
                      <div className="text-lg py-2"> 
                      <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
                            <button className="focus:outline-none bg-pink-700 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                              </svg>
                            </button>
                            <p> 0 </p>
                            <button className="focus:outline-none bg-pink-700 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                            </button>
                        </div>
                      </div>
                </div>
                <div className="flex justify-between border-b-2 mb-2">
                      <div className="text-lg py-2"> 
                        <p>Standout Ads</p>
                      </div>
                      <div className="text-lg py-2"> 
                      <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
                            <button className="focus:outline-none bg-pink-700 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                              </svg>
                            </button>
                            <p> 0 </p>
                            <button className="focus:outline-none bg-pink-700 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                            </button>
                        </div>
                      </div>
                </div>
                <div className="flex justify-between border-b-2 mb-2">
                      <div className="text-lg py-2"> 
                        <p>Premium Ads</p>
                      </div>
                      <div className="text-lg py-2"> 
                      <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
                            <button className="focus:outline-none bg-pink-700 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                              </svg>
                            </button>
                            <p> 0 </p>
                            <button className="focus:outline-none bg-pink-700 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                            </button>
                        </div>
                      </div>
                </div>
                <div className="flex justify-center items-center text-center">
                      <div className="text-xl font-semibold"> 
                        <p>Total Item</p>
                        <p className="text-5xl">0</p>
                      </div>
                </div>
                
            </div>
            <div className="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
                <div className="flex justify-center items-center text-center">
                  <div className="text-xl font-semibold"> 
                      <p>Total Price</p>
                      <p className="text-5xl">0</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Cart