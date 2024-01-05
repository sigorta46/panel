import moment from 'moment';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import CustomTable from '../../components/custom-table';
import Sidebar from '../../components/sidebar'
import { ListOfferHead, sideBarData } from '../../utils/data'; 
import { clearOffer } from '../../redux/offersSlice'; 

export default function OfferList() {

    const { state } = useLocation();
    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch(); 

    const offers = state.offers; 
 

    return (
        <>
            <div className='w-full'>
                <Sidebar head={sideBarData({ role: currentUser.role })} >
                    <div className='bg-gray-200 flex-1 min-h-screen'>
                        <div className='bg-gray-200 flex-1 p-6'>
                            <CustomTable searchable={true} body={offers && offers.map((offer, key) => ([ 
                                offer.demand_id.user_id.full_name,
                                offer.demand_id.user_id.phone,
                                moment(offer.demand_id.createdAt).format("DD.MM.YYYY"),
                                offer.demand_id.birthday,
                                offer.demand_id.type,
                                offer.total_price,
                                offer.detail,
                                moment(offer.createdAt).format("DD.MM.YYYY"),
                                offer.user_id.full_name,
                                <Link to={`add-sertificate/${offer._id}`} onClick= {()=> dispatch(clearOffer())}>
                                <button className='h-8 px-4 flex items-center justify-center rounded bg-green-600 text-white'
                                   // onClick={() => { setShowModal(true); setOffer(offer) }}
                                    >
                                    Poliçe Oluştur
                                </button>
                                </Link>
                            ]))}
                                head={ListOfferHead}
                            />
                        </div>
                    </div>
                </Sidebar>
            </div>
           
        </>
    )
}


