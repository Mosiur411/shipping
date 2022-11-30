import React from 'react'

export const Review = () => {
    return (
        <div>
            <div className=' mt-20'>
                <div className="text-center mb-4 md:mb-6"><p id="step-header" className="text-2xl md:text-3xl font-bold">Review</p></div>
                <div className="bg-white  text-center w-full md:rounded-xl pt-6 pb-4">
                    <p className="underline underline-offset-1">Shipment for <span className="font-bold">mnb</span></p>
                    <p className="mt-4">Destination Country:</p>
                    <p className="font-bold text-[#7A22CB]">Bangladesh</p>
                    <p className="mt-6">Package Details:</p>
                    <table className="mt-2 md:w-[30%] mx-auto">
                        <tbody>
                            <tr className="whitespace-nowrap">
                                <td className="px-4">Package 1</td>
                                <td className="px-4 text-[#7A22CB] text-left">45.00 kg</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex justify-center items-center gap-3 mt-8">
                        <p>Quote (TBC at warehouse)</p>
                        <svg width="16px" height="12px" className="w-[14px] h-[8px] rotate-180" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M1 1L8 9L15 1" stroke="#6211CB" strokeWidth="2" strokeLinecap="round"></path>
                        </svg>
                    </div>
                    <p className="font-bold text-[#7A22CB]">SGD <span id="total">1518.41</span></p>
                    <div className="block mt-4">
                        <div className="grid md:grid-cols-2 md:auto-rows-auto justify-center md:w-[60%] mx-auto gap-x-6 gap-y-2">
                            <div className="grid grid-cols-2 md:grid-cols-[70%_30%] text-left gap-x-20 md:gap-x-0">
                                <p className="">Shipping</p>
                                <p className="text-[#6E41E2] whitespace-nowrap">SGD <span id="total-shipping-cost">1518.41</span></p>
                            </div>
                        </div>
                    </div>
                    <p className="mt-2 text-xs md:text-sm text-gray-3">Recipient</p>
                </div>

            </div>
        </div>
    )
}
