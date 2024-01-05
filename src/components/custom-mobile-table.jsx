import React from 'react'

export default function CustomMobileTable({ head, body }) {
    return (

        <div className='grid sm:grid-cols-2 sm:gap-2 p-4 grid-cols-1 gap-1'>
            {body.map((items, key) => (
                <div className='bg-slate-500' key={key}>
                    {items.map((item, key) =>
                        <div className='flex text-white py-2 px-3' key={key}>
                            <div className=' w-36 hidden sm:flex'>
                                <span className="min-w-[65px] text-sm font-semibold ">{head[key].name} </span>
                            </div>
                            {item}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}