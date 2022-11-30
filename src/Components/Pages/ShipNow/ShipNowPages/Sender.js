import React from 'react'

function Sender({ data, optionValue }) {



    
    return (
        <>
            <div className="text-center mb-4 md:mb-6">
                <p id="step-header" className="text-2xl md:text-3xl font-bold">Sender’s Particulars</p>
                <p className="text-sm">(Point of contact for packing and billing)</p>
            </div>
            <div className="md:w-[80%] mx-auto flex justify-center">
                <div className="flex w-full max-w-3xl justify-center text-gray-4 text-sm">
                    <div className="w-full">
                        <div className="bg-white w-full md:rounded-xl">
                            <div className="w-[85%] md:w-[50%] mx-auto pt-6 pb-10 md:pt-8">
                                <div className="relative">
                                    <div className="grid grid-cols-2">
                                        <p>Full Name</p>
                                        <p></p>
                                    </div>
                                    <div className="mt-1 relative border rounded-xl flex items-center h-10 focus-within:border-light-purple focus:shadow-border-focus border-border-dark-gray shadow-border">
                                        <input type="text" id="senderFirstName" className="rounded-xl w-full h-full focus:outline-none pl-3" placeholder="Your Name" />
                                        <hr className="h-2/3 self-center border-l border-border-gray group-focus-within:border-light-purple" />
                                        <input type="text" id="senderLastName" className="rounded-xl w-full h-full focus:outline-none pl-3" placeholder="Last Name" />
                                    </div>
                                    <p className="min-h-[1rem] text-xs text-subtext-gray mt-0.5 ml-0.5 mb-5">Person whom JustShip contacts for packing &amp; billing matters</p>
                                </div>
                                <div className="w-full flex flex-col group">
                                    <label htmlFor="senderEmail" className="font-normal text-subheading-gray w-max group-focus-within:text-dark-purple">Sender's Email</label>
                                    <div id="senderEmailcontainer" className="mt-1 mb-6 relative border rounded-xl flex items-center h-10 focus-within:border-light-purple focus:shadow-border-focus border-border-dark-gray shadow-border">
                                        <div className="relative flex items-center h-full z-[2] w-full">
                                            <input className="focus:outline-none pl-3 w-full h-full rounded-xl pr-8" maxLength="80" id="senderEmail" type="email" />
                                        </div>
                                        <svg
                                            viewBox="0 0 22 22"
                                            fill="none"
                                            stroke="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-[18px] inline-block absolute right-0 mr-2 group-focus-within:invisible stroke-dark-purple z-[2]"
                                        >
                                            <circle r="10" transform="matrix(1 0 0 -1 11 11)" strokeWidth="2"></circle>
                                            <path d="M6 11.9375L9.04348 15L16 8" strokeWidth="2" strokeLinecap="round"></path>
                                        </svg>
                                        <p className="min-h-[1rem] text-xs text-error-red absolute top-10 mt-0.5 ml-0.5 hidden"></p>
                                    </div>
                                </div>
                                <label htmlFor="shipping-from" className="font-normal text-subheading-gray">Shipping From</label>
                                <input
                                    type="text"
                                    className="mt-1 mb-6 relative rounded-xl border border-border-dark-gray flex group w-full h-10 pl-3 disabled:bg-gray-2 disabled:text-subtext-gray"
                                    value="Singapore"
                                    disabled
                                />
                                <div className="group">
                                    <label className="block font-normal text-subheading-gray text-sm group-focus-within:text-dark-purple" htmlFor="senderMobileNo">Sender's Mobile</label>
                                    <div className="flex h-10 mt-1 mb-6 relative rounded-xl border focus-within:border-light-purple focus-within:shadow-border-focus border-border-dark-gray shadow-border">
                                        <div className="relative text-gray-4 text-sm">
                                            <div className="h-full flex items-center min-w-[40px] px-3 justify-center" aria-hidden="true">
                                                <select name="cars" className='w-[100px] outline-none border-0' onChange={optionValue}>
                                                    {
                                                        data.map((count) => <option value={count?.code} >{`${count?.country.slice(0, 3)}(${count?.code})`}</option>)
                                                    }

                                                </select>
                                            </div>
                                        </div>
                                        <hr className="h-2/3 self-center border-l border-border-gray group-focus-within:border-light-purple" />
                                        <input type="number" placeholder='Contact Number' className="block w-full pl-3 pr-10 py-2.5 text-gray-4 disabled:bg-gray-2 text-sm rounded-xl focus:outline-none" />
                                        <p className="min-h-[1rem] text-xs text-error-red absolute top-10"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 bg-white flex flex-col text-center w-full md:rounded-xl">
                            <div className="flex flex-col bg-white md:rounded-xl py-6">
                                <p className="text-dark-purple font-semibold text-xl spacing-xs">
                                    What's your purpose<br className="md:hidden" />
                                    of shipping?
                                </p>
                                <p className="text-error-red mt-2 mb-4 h-4"></p>
                                <div className="w-[85%] md:w-full md:px-8 mx-auto">
                                    <div className="grid md:grid-cols-3 md:grid-rows-2 gap-4 lg:gap-x-6 place-items-center">
                                        <button type="button" id="SOLD" className="form-input w-full h-[60px] hover:bg-dark-purple hover:text-white hover:border-transparent rounded-2xl   border-black border-2">
                                            <p className="">Commercial</p>
                                            <p className="">B2B items</p>
                                        </button>
                                        <button type="button" id="GIFT" className="form-input w-full h-[60px] hover:bg-dark-purple hover:text-white hover:border-transparent rounded-2xl   border-black border-2"><p className="">Gift</p></button>
                                        <button type="button" id="SAMPLE" className="form-input w-full h-[60px] hover:bg-dark-purple hover:text-white hover:border-transparent rounded-2xl   border-black border-2">
                                            <p className="">Samples</p>
                                            <p className="">for a prospect</p>
                                        </button>
                                        <button type="button" id="REPAIR_AND_RETURN" className="form-input w-full h-[60px] hover:bg-dark-purple hover:text-white hover:border-transparent rounded-2xl   border-black border-2">
                                            <p className="">Defective items</p>
                                            <p className="">for repair &amp; return</p>
                                        </button>
                                        <button type="button" id="NOT_SOLD" className="form-input w-full h-[60px] hover:bg-dark-purple hover:text-white hover:border-transparent rounded-2xl   border-black border-2">
                                            <p className="">New goods</p>
                                            <p className="">for individual's use</p>
                                        </button>
                                        <button type="button" id="PERSONAL_EFFECTS" className="form-input w-full h-[60px] hover:bg-dark-purple hover:text-white hover:border-transparent rounded-2xl   border-black border-2"><p className="">Used Belongings</p></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sender