import moment from 'moment';
import React from 'react'  
import {  useSelector } from 'react-redux';
import {  useLocation } from 'react-router-dom'
import CustomTable from '../../components/custom-table';
import Sidebar from '../../components/sidebar'  
import {  ListSertificateHead, sideBarData } from '../../utils/data'; 
import { useState } from 'react'; 

export default function SertificateList() {

    const { state } = useLocation();
    const { user: currentUser } = useSelector((state) => state.auth);

    const offers = state.sertificates;

    const [showModal, setShowModal] = useState(false);  
 

   const sertificates = offers.filter((offer)=> offer.end_date != null )
 


    return (
        <>
            {/* {status === "succeeded" ? */}
                <div className='w-full'>
                    <Sidebar head={sideBarData({ role: currentUser.role })} >
                        <div className='bg-gray-200 flex-1 min-h-screen'>
                            <div className='bg-gray-200 flex-1 p-6'>
                                <CustomTable searchable={true} body={sertificates && sertificates.map((sertificate, key) => ([
                                    sertificate.demand_id.user_id.full_name,
                                    sertificate.demand_id.user_id.phone,
                                    moment(sertificate.demand_id.createdAt).format("DD.MM.YYYY"), 
                                    sertificate.demand_id.type, 
                                    sertificate.total_price, 
                                    moment(sertificate.createdAt).format("DD.MM.YYYY"),
                                    sertificate.user_id.full_name,
                                    moment(sertificate.end_date).format("DD.MM.YYYY"),


                                    //currentUser.role === "admin"  ? 
                                    // <div className='flex items-center justify-center space-x-3'>
                                        
                                    //     <Link to={`/demands/dosya-bilgileri/${sertificate.demand_id._id}`} key={sertificate.demand_id._id} onClick={() => dispatch(clearDemand())}>
                                    //         <div className="h-8 px-4 flex items-center justify-center rounded bg-green-600 text-white">Detay</div>
                                    //     </Link>
                                    //     {/* <button > 
                                    //         {/* </div>onClick={() => { setShowModal(true); setDemageId(demage._id) }}> 
                                    //         <div className="h-8 px-4 flex items-center justify-center rounded bg-red-600 text-white">Sil</div>
                                    //     </button> */}
                                    // </div>
                                    //  : <div className='flex items-center justify-center space-x-3'>
                                    //     <Link to={`/panel/dosya-bilgileri/${demand._id}`} key={demand._id} onClick={() => dispatch(clearDemand())}>
                                    //         <div className="h-8 px-4 flex items-center justify-center rounded bg-green-600 text-white">Detay</div>
                                    //     </Link>
                                    // </div>
                                ]))}
                                    head={ListSertificateHead}
                                />
                            </div>
                        </div>
                    </Sidebar>
                </div> 
                {/* : status === "loading" ? <Loading /> : status === "failed" ? <Error /> : ""} */}
            <>{showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Dosya Sil
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                        Silmek istediğinize emin misiniz?
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-gray-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Kapat
                                    </button>
                                    <button
                                        className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        // onClick={() => { removeDemage(demageId); setShowModal(false) }}
                                    >
                                        SİL!
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}</>
        </>
    )
}