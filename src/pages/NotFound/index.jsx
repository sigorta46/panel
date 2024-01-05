import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div  className="flex items-center bg-slate-300 justify-center w-screen h-screen "> 
                <div className="flex flex-col items-center">
                <h1 className='font-bold text-gray-900 text-9xl'>404</h1>

                    <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                        <span className="text-red-500">Oops!</span> BU SAYFA BULUNAMADI!
                    </h6>

                    <p className="mb-8 text-center font-semibold text-gray-800 md:text-lg">
                    Aradığınız Sayfa Mevcut Değil!
                    </p>

                    <Link to={"/"} className='rounded-3xl bg-slate-900 px-6 py-3'>
                    <span className="text-slate-50">Ana Sayfaya Dön</span>
                </Link>
                </div> 
        </div>
  )
}
