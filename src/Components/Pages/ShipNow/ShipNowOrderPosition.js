import React, { useState } from 'react'
import './ShipNow.css'
export const ShipNowOrderPosition = ({ counter }) => {
    const fromStep = [
        {
            value: '1',
            Text: 'Sender',
        },
        {
            value: '2',
            Text: 'Recipient',
        },
        {
            value: '3',
            Text: 'Package',
        },
        {
            value: '4',
            Text: 'Add-ons',
        },
        {
            value: '5',
            Text: 'Review',
        }
    ]
    return (
        <div className="max-w-3xl mx-auto pt-8 pb-6 md:pt-10 md:pb-7">
            <div className="flex items-center justify-between w-[92%] sm:w-[80%] lg:w-[70%] mx-auto relative">
                {
                    fromStep.map((data, index) => <div className="flex flex-col place-items-center w-max">
                        <div className="flex items-center justify-center rounded-full bg-background-gray w-[32px] h-[32px] md:w-[40px] md:h-[40px] z-[1] border border-dark-purple shadow-border-focus">
                            <div className={`flex items-center justify-center rounded-full text-white w-[26px] h-[26px] md:w-[30px] md:h-[30px] ${counter === index + 1 ? "bg-dark-purple " : counter >= index + 1 ? "bg-[#495057]" : 'bg-[#ACB5BD] text-black'}`}>
                                {
                                    counter > index + 1 ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg> :
                                        <span className="text-sm md:text-base font-semibold">{data?.value}</span>
                                }
                            </div>
                        </div>
                        <p className={`mt-2 text-xs md:text-sm ${counter === index + 1 ? 'text-light-purple' : "text-black"}`}>{data?.Text}</p>
                    </div>)
                }
                <hr className="absolute border-gray-3 w-[90%] top-[16px] md:top-[20px] left-0 right-0 mx-auto" />
            </div>
        </div >
    )
}

