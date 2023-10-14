import React from 'react'

const Footer = () => {
    return (
        <div className="">
            <section className='py-5 md:py-10 bg-[#110c26] text-white'>
                <footer className='px-2 sm:px-5 container mx-auto md:px-5'>
                    <div className="flex flex-wrap justify-center sm:p-3 lg:p-5">
                        <div className="w-full md:w-2/4 lg:w-1/3 rounded-xl p-2">
                            <div className="p-5  bg-[#110c26] rounded-xl ">
                                <h1 className='text-2xl font-bold mt-3 text-purple-500'>M<sup>2</sup>CODER</h1>
                                <p className='mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore perferendis odio tempora possimus magnam! Quis totam neque vel assumenda quod?</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-2/4 lg:w-1/3 rounded-xl p-2">
                            <div className="p-5 bg-[#110c26] rounded-xl ">
                            <h1 className='text-2xl font-bold mt-3'>About Us</h1>
                                <p className='mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore perferendis odio tempora possimus magnam! Quis totam neque vel assumenda quod?</p>
                                <p className='mt-2'><span className='text-red-400'>Website: </span>www.m2coder.com</p>
                            </div>
                        </div>
                        <div className="w-full md:w-2/4 lg:w-1/3 rounded-xl p-2">
                            <div className="p-5 bg-[#110c26] rounded-xl ">
                                <h1 className='text-2xl font-bold mt-3'>Inquiries</h1>
                                <p className='mt-3'>
                                    <span className='text-red-400'>Phone No: </span> +91 994-449-1234 <br />
                                    <span className='text-red-400'>Email ID: </span>m2coder@gmail.com
                                </p>
                                <ul class="flex  mt-4">

                                    <li class="p-2 mr-2 bg-white shadow rounded hover:bg-purple-500">
                                        <a href="" class="text-gray-500">
                                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 hover:text-white" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                                        </a>
                                    </li>

                                    <li className="p-2 mr-2 bg-white shadow rounded hover:bg-purple-500">
                                        <a href="" className="text-gray-500">
                                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 hover:text-white" viewBox="0 0 24 24"><path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" /></svg>
                                        </a>
                                    </li>

                                    <li className="p-2 mr-2 bg-white shadow rounded hover:bg-purple-500">
                                        <a href="" className="text-gray-500">
                                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 hover:text-white" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                        </a>
                                    </li>

                                    <li className="p-2 mr-2 bg-white shadow rounded hover:bg-purple-500">
                                        <a href="" className="text-gray-500">
                                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 hover:text-white" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                                        </a>
                                    </li>

                                    <li className="p-2 mr-2 bg-white shadow rounded hover:bg-purple-500">
                                        <a href="" className="text-gray-500">
                                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 hover:text-white" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                            
                        </div>
                    </div>
                    <div className="mt-3 text-center border-t-2 rounded-b-xl border-white">
                        <p className='mt-5 font-bold'>M<sup>2</sup>CODER © 2021. ALL RIGHTS RESERVED.</p>
                    </div>

                </footer>

            </section>


        </div>
    )
}

export default Footer