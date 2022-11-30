import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import './ShipNow.css'
import { ShipNowOrderPosition } from './ShipNowOrderPosition'
import { Addons } from './ShipNowPages/Addons'
import Recipient from './ShipNowPages/Recipient'
import { Review } from './ShipNowPages/Review'
import Sender from './ShipNowPages/Sender'
const ShipNow = () => {
    const [counter, setCounter] = useState(1)
    if (counter > 5) {
        setCounter(5)
    }
    /* ======================== country data get and show selector option  ========================= */
    const { isLoading, data } = useQuery(['country'], () =>
        fetch('Country.json').then(res =>
            res.json()
        ))
    if (isLoading) return 'Loading...'

    /* ======================== selector option data in event ========================= */
    const optionValue = (e) => {
        // e.target.value
    }

    return (
        <div>
            <div className="bg-background-gray z-0 min-h-screen">
                <ShipNowOrderPosition counter={counter}></ShipNowOrderPosition>
                {
                    counter === 1 && <Sender data={data} optionValue={optionValue}></Sender>
                }
                {
                    counter === 2 && <Recipient data={data} optionValue={optionValue}></Recipient>
                }
                {
                    counter === 4 && <Addons></Addons>
                }
                {
                    counter === 5 && <Review></Review>
                }

                <div className="flex mx-auto py-8 justify-center gap-4 md:gap-10">
                    {counter >= 2 ? <button onClick={() => setCounter(counter - 1)} type="button" className="pill-button button-hover border-[#844FFA] border-2   text-[#844FFA] font-bold hover:text-white hover:bg-[#844FFA] w-[160px] md:w-[180px] h-[40px] disabled:bg-disabled-purple disabled:cursor-not-allowed disabled:border-transparent rounded-2xl">Back</button> : ""}
                    <button onClick={() => setCounter(counter + 1)} type="button" id="next-button" className="pill-button button-hover bg-light-purple text-white w-[160px] md:w-[180px] h-[40px] disabled:bg-disabled-purple disabled:cursor-not-allowed disabled:border-transparent rounded-2xl">{counter === 5 ? "Submit" : "Next"}</button>
                </div>
            </div>
        </div>
    )
}

export default ShipNow