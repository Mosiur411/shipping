import React from 'react'

export const Addons = () => {
    return (
        <div>
            <div className=' mt-20'>
                <div className="text-center mb-4 md:mb-6"><p id="step-header" className="text-2xl md:text-3xl font-bold">Add-ons</p></div>

                <div className="md:w-[80%] mx-auto flex justify-center">
                    <div className="flex w-full max-w-3xl justify-center text-gray-4 text-sm">
                        <div className="flex flex-col text-center w-full md:rounded-xl">
                            <div className="flex flex-col bg-white md:rounded-xl pb-6">
                                <p className="text-[#611ECB] font-semibold text-xl my-4">Would you like to insure this shipment?</p>
                                <p className="text-center text-error-red mb-4 hidden">Please select an option</p>
                                <div className="w-full sm:w-4/5 lg:w-3/4 px-8 mx-auto">
                                    <div className="flex flex-col md:flex-row gap-y-4 md:space-x-12 justify-between">
                                        <div className="basis-1/2"><button type="button" id="noInsurance" className="form-input w-full h-[60px] bg-[#844FFA] text-white border-transparent rounded-xl">No insurance</button></div>
                                        <div className="basis-1/2">
                                            <button type="button" id="addInsurance" className="form-input w-full h-[60px] hover:bg-[#611ECB] group hover:text-white hover:border-transparent border border-[#9395A0] rounded-xl">
                                                Add insurance<br />
                                                <span className="font-semibold text-[#611ECB] group-hover:text-white">(+ SGD$ 1.08)</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col bg-white md:rounded-xl mt-6 pb-6">
                                <p className="text-[#611ECB] font-semibold text-xl my-4">Who will pay for taxes and duties?</p>
                                <p className="text-center text-error-red mb-4 hidden">Please select an option</p>
                                <div className="w-full sm:w-4/5 lg:w-3/4 px-8 mx-auto">
                                    <div className="flex flex-col md:flex-row gap-y-4 md:space-x-12 justify-between">
                                        <div className="flex flex-col justify-center basis-1/2">
                                            <button type="button" id="receiverPayTax" className="form-input w-full h-[60px] place-self-center bg-[#844FFA] text-white border-transparent rounded-xl">Post-paid, Receiver</button>
                                        </div>
                                        <div className="basis-1/2">
                                            <button
                                                type="button"
                                                id="senderPayTax"
                                                className="form-input w-full h-[60px] disabled:bg-disabled-purple disabled:text-white disabled:border-transparent hover:bg-[#611ECB] hover:text-white group hover:border-transparent border border-[#9395A0] rounded-xl"
                                            >
                                                Pre-paid, Sender<br />
                                                <span className="font-semibold text-[#611ECB] group-hover:text-white">(+SGD $411.12)</span>
                                            </button>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-center text-xs font-medium text-gray-500">Amount will be determined by the Customs and charged to the recipient.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
