import React from 'react'

export default function ({ data, optionValue }) {
    return (
        <div>
            <div className=' mt-20'>
                <div className="text-center mb-4 md:mb-6"><p id="step-header" className="text-2xl md:text-3xl font-bold">Recipient’s Particulars</p></div>

                <div className="md:w-[80%] mx-auto flex justify-center">
                    <div className="flex w-full max-w-3xl justify-center text-gray-4 text-sm">
                        <div className="bg-white w-full md:rounded-xl">
                            <div className="w-[85%] md:w-[50%] mx-auto pt-6 md:pt-8 pb-3">
                                <div className="w-full flex flex-col group">
                                    <label htmlFor="recipientName" className="font-normal text-subheading-gray w-max group-focus-within:text-[#611ECB]">Recipient's Name</label>
                                    <div id="recipientNamecontainer" className="mt-1 mb-6 relative border rounded-xl flex items-center h-10 focus-within:border-[#844FFA] focus:shadow-border-focus border-[#9395A0] shadow-border">
                                        <div className="relative flex items-center h-full z-[2] w-full"><input className="focus:outline-none pl-3 w-full h-full rounded-xl pr-8" maxlength="80" id="recipientName" type="text" value="" /></div>
                                        <p className="min-h-[1rem] text-xs text-error-red absolute top-10 mt-0.5 ml-0.5 hidden"></p>
                                    </div>
                                </div>
                                <div className="w-full flex flex-col group">
                                    <label htmlFor="recipientEmail" className="font-normal text-subheading-gray w-max group-focus-within:text-[#611ECB]">Recipient's Email</label>
                                    <div id="recipientEmailcontainer" className="mt-1 mb-6 relative border rounded-xl flex items-center h-10 focus-within:border-[#844FFA] focus:shadow-border-focus border-[#9395A0] shadow-border">
                                        <div className="relative flex items-center h-full z-[2] w-full"><input className="focus:outline-none pl-3 w-full h-full rounded-xl pr-8" maxlength="80" id="recipientEmail" type="email" value="" /></div>
                                        <p className="min-h-[1rem] text-xs text-error-red absolute top-10 mt-0.5 ml-0.5 hidden"></p>
                                    </div>
                                </div>
                                <div className="w-full flex flex-col group">
                                    <label htmlFor="recipientCountry" className="font-normal text-subheading-gray w-max group-focus-within:text-[#611ECB]">Country</label>
                                    <div id="recipientCountrycontainer" className="mt-1 mb-6 relative border rounded-xl flex items-center h-10 focus-within:border-[#844FFA] focus:shadow-border-focus border-[#9395A0] shadow-border">
                                        <select name="cars" className=' outline-none border-0'
                                            onChange={optionValue}>
                                            {
                                                data.map((count) => <option value={count?.country} >{count?.country}</option>)
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="group">
                                    <label className="block font-normal text-subheading-gray text-sm group-focus-within:text-[#611ECB]" htmlFor="recipientMobileNo">Recipient's Mobile</label>
                                    <div className="flex h-10 mt-1 mb-6 relative rounded-xl border focus-within:border-[#844FFA] focus-within:shadow-border-focus border-[#9395A0] shadow-border">
                                        <div className="relative text-gray-4 text-sm">
                                            <div className="h-full flex items-center min-w-[40px] px-3 justify-center" aria-hidden="true">
                                                <select name="cars" className='w-[100px] outline-none border-0' onChange={optionValue}>
                                                    {
                                                        data.map((count) => <option value={count?.code} >{`${count?.country.slice(0, 3)}(${count?.code})`}</option>)
                                                    }

                                                </select>

                                            </div>
                                        </div>
                                        <hr className="h-2/3 self-center border-l border-border-gray group-focus-within:border-[#844FFA]" />
                                        <input type="tel" id="recipientMobileNo" className="block w-full pl-3 pr-10 py-2.5 text-gray-4 disabled:bg-gray-2 text-sm rounded-xl focus:outline-none" value="" />
                                        <p className="min-h-[1rem] text-xs text-error-red absolute top-10"></p>
                                    </div>
                                </div>
                                <div className="w-full flex flex-col group">
                                    <label htmlFor="recipientAddress" className="font-normal text-subheading-gray w-max group-focus-within:text-[#611ECB]">Address</label>
                                    <div id="recipientAddresscontainer" className="mt-1 mb-6 relative border rounded-xl flex items-center h-10 focus-within:border-[#844FFA] focus:shadow-border-focus border-[#9395A0] shadow-border">
                                        <div className="relative flex items-center h-full z-[2] w-full"><input className="focus:outline-none pl-3 w-full h-full rounded-xl pr-8" maxlength="80" id="recipientAddress" type="text" value="" /></div>
                                        <p className="min-h-[1rem] text-xs text-error-red absolute top-10 mt-0.5 ml-0.5 hidden"></p>
                                    </div>
                                </div>
                                <div className="w-full flex flex-col group">
                                    <label htmlFor="recipientPostalCode" className="font-normal text-subheading-gray w-max group-focus-within:text-[#611ECB]">Postal Code</label>
                                    <div id="recipientPostalCodecontainer" className="mt-1 mb-6 relative border rounded-xl flex items-center h-10 focus-within:border-[#844FFA] focus:shadow-border-focus border-[#9395A0] shadow-border">
                                        <div className="relative flex items-center h-full z-[2] w-full"><input className="focus:outline-none pl-3 w-full h-full rounded-xl pr-8" maxlength="80" id="recipientPostalCode" type="text" value="" /></div>
                                        <p className="min-h-[1rem] text-xs text-error-red absolute top-10 mt-0.5 ml-0.5 hidden"></p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <div className="w-full flex flex-col group">
                                            <label htmlFor="recipientCity" className="font-normal text-subheading-gray w-max group-focus-within:text-[#611ECB]">City</label>
                                            <div id="recipientCitycontainer" className="mt-1 mb-6 relative border rounded-xl flex items-center h-10 focus-within:border-[#844FFA] focus:shadow-border-focus border-[#9395A0] shadow-border">
                                                <div className="relative flex items-center h-full z-[2] w-full"><input className="focus:outline-none pl-3 w-full h-full rounded-xl pr-8" maxlength="80" id="recipientCity" type="text" value="" /></div>
                                                <p className="min-h-[1rem] text-xs text-error-red absolute top-10 mt-0.5 ml-0.5 hidden"></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="recipientState" className="font-normal text-subheading-gray w-max group-focus-within:text-[#611ECB] ">State</label>
                                        <input type="text" className="disabled:bg-gray-2 rounded-xl w-full h-10 mt-1 border-none outline-none bg-[#DDE2E5]" id="recipientState" disabled="" value="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
