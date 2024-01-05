import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { clearDemand } from '../../redux/demandSlice'

function DemandsContainer({ color, quantity, title, url, color2, demands}) {
    return (
        <div className=''>
            <div className={`px-10 py-7 ${color} rounded-t-md text-center`}>
                <div className='flex text-slate-50 text-lg font-semibold items-center justify-center'>{quantity}</div>
                <div className='flex text-sm text-slate-50 items-center justify-center'> {title}</div>
            </div>
            <Link to={url} onClick={()=> clearDemand()} state = {{ demands: demands }} >
                <div className={`flex cursor-pointer ${color2} rounded-b-md px-5 py-2 justify-center items-center`}>
                    <span className='text-slate-50 text-sm pr-2'>Detay</span>
                    <div className='flex w-5 h-5 rounded-full bg-white items-center justify-center '>
                        <BsArrowRightShort className='text-gray-700 text-lg' />
                    </div>
                </div>
            </Link>

        </div>
    )
}

export default DemandsContainer