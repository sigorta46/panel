
import React, { useCallback, useState } from 'react'
import { AiOutlineCloseSquare, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { MdOutlineLogout, MdArrowBack } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../redux/authSlice';
import {  clearDemand } from '../redux/demandSlice'; 

function Sidebar({ head, demage, children }) {

    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [sideBar, setsideBar] = useState(false);
    let navigate = useNavigate();

    const logOut = useCallback(() => {
        dispatch(logout()).unwrap()
            .then(() => {
                navigate("/");
                window.location.reload();
            });;
    }, [dispatch, navigate]);

    return (
        <>
            <div className='hidden lg:flex' >
                <div className=" w-full relative flex ">
                    <aside className="sticky top-0 h-screen w-80 px-4 py-8 left-0 z-20 bg-slate-500">
                        <>
                            <div className="justify-start items-center">
                                <Link to={"/demands"} onClick={() => dispatch(clearDemand())}>
                                    <h1 className="text-lg text-center cursor-pointer font-bold text-slate-50 border-b border-gray-100 pb-4 w-full">
                                        Arete Hasar Danışmanlık
                                    </h1>
                                </Link>

                                <div className=" my-4 border-b border-gray-100 pb-4">
                                    <div className="flex mb-2 justify-start items-center gap-4 px-3 hover:bg-gray-600 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                        <AiOutlineUser className="text-2xl text-slate-50 group-hover:text-white " />
                                        <h3 className="text-sm text-slate-50 group-hover:text-white font-semibold ">
                                            {user.full_name}
                                        </h3>
                                    </div>
                                </div>
                                <div className="my-4 border-b border-gray-100 pb-4">
                                    {
                                        head.map((h, key) => (
                                            <Link to={demage !== undefined ? `${h.url}/${demage._id}` : h.url} key={key} onClick={() => {  dispatch(clearDemand()) }}>
                                                <div className="flex mb-2 justify-start items-center gap-4 px-3 hover:bg-gray-600 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                                    <span className='text-2xl text-slate-50 group-hover:text-white'>
                                                        {h.icon}
                                                    </span>
                                                    <h3 className="text-sm text-slate-50 group-hover:text-white font-semibold ">
                                                        {h.title}
                                                    </h3>
                                                </div>
                                            </Link>
                                        ))
                                    }
                                </div>
                                {/* logout */}

                                <div className=" my-4">
                                    <div onClick={logOut} className="flex mb-2 justify-start items-center gap-4 px-3 border border-gray-200  hover:bg-gray-600 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                        <MdOutlineLogout className="text-2xl text-slate-50 group-hover:text-white " />
                                        <h3 className="text-base text-slate-50 group-hover:text-white font-semibold ">
                                            Çıkış
                                        </h3>

                                    </div>
                                </div>
                            </div>
                        </>
                    </aside>

                    <main className="w-full">
                        {children}
                    </main>
                </div>
            </div>
            <div className='flex lg:hidden'>
                {
                    sideBar ? (
                        <div className='absolute w-full'>
                            <div className='flex gap-3 w-full justify-end items-center bg-slate-50 px-5 py-4'>
                                <div className='flex gap-1 text-gray-400 text-sm font-medium items-center'>
                                    <span>GERİ</span>
                                    <MdArrowBack />
                                </div>
                                <div className='flex gap-1 text-gray-400 text-sm font-medium items-center'>
                                    <MdOutlineLogout />
                                    <span>ÇIKIŞ</span>
                                </div>
                            </div>
                            <div className='fixed w-3/4 min-h-screen bg-slate-500 p-6 left-0 z-20'>
                                <div className="flex flex-col justify-start items-center">
                                    <div className='w-full'>
                                        <div className='w-full items-center text-end'>
                                            <button onClick={() => setsideBar(false)}><AiOutlineCloseSquare className='relative text-slate-50 text-4xl font-bold pr-2' /></button>
                                        </div>

                                        <h1 className="text-lg text-center cursor-pointer font-bold text-slate-50 border-b border-gray-100 pb-4 w-full">
                                            Arete Hasar Danışmanlık
                                        </h1>
                                    </div>

                                    <div className=" my-4 border-b border-gray-100 pb-4">
                                        <div className="flex mb-2 justify-start items-center gap-4 px-3 hover:bg-gray-600 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                            <AiOutlineUser className="text-2xl text-slate-50 group-hover:text-white " />
                                            <h3 className="text-sm text-slate-50 group-hover:text-white font-semibold ">
                                                Melih GÖKDENİZ
                                            </h3>
                                        </div>
                                    </div>
                                    <div className=" my-4 border-b border-gray-100 pb-4">
                                        {
                                            head.map((h, key) => (
                                                <Link to={demage !== undefined ? `${h.url}/${demage._id}` : h.url} key={key} onClick={() => { dispatch(clearDemand()) }}>
                                                    <div className="flex mb-2 justify-start items-center gap-4 px-3 hover:bg-gray-600 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                                        <span className='text-2xl text-slate-50 group-hover:text-white'>
                                                            {h.icon}
                                                        </span>
                                                        <h3 className="text-sm text-slate-50 group-hover:text-white font-semibold ">
                                                            {h.title}
                                                        </h3>
                                                    </div>
                                                </Link>

                                            ))
                                        }
                                    </div>
                                    {/* logout */}

                                    <div className=" my-4">
                                        <div onClick={logOut} className="flex mb-2 justify-start items-center gap-4 px-3 border border-gray-200  hover:bg-gray-600 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                            <MdOutlineLogout className="text-2xl text-slate-50 group-hover:text-white " />
                                            <h3 className="text-base text-slate-50 group-hover:text-white font-semibold ">
                                                Çıkış
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <main className="w-full">{children}</main>
                        </div>
                    ) : (
                        <div className='w-full'>
                            <div className='flex bg-slate-50 w-full justify-between items-center px-5 py-4'>
                                <button onClick={() => setsideBar(true)}>
                                    <AiOutlineMenu className='text-lg text-gray-400' />
                                </button>
                                <div className='flex gap-3'>
                                    <div className='flex gap-1 text-gray-400 text-sm font-medium items-center'>
                                        <span>GERİ</span>
                                        <MdArrowBack />
                                    </div>
                                    <div className='flex gap-1 text-gray-400 text-sm font-medium items-center'>
                                        <MdOutlineLogout />
                                        <span>ÇIKIŞ</span>
                                    </div>
                                </div>
                            </div>
                            <main className='w-full'>{children}</main>
                        </div>
                    )
                }
            </div>
        </>



    )
}

export default Sidebar