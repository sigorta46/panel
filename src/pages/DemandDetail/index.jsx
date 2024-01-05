import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Error from '../../components/error';
import Loading from '../../components/loading';
import PhotoList from '../../components/photoList';
import { fetchDemandById } from '../../redux/demandSlice';
import { AiOutlineClose } from 'react-icons/ai';
import MakeOfferForm from '../../components/Forms/MakeOfferForm';
import Sidebar from '../../components/sidebar';
import { sideBarData } from '../../utils/data';
import { clearMessage } from '../../redux/message';

export default function DemandDetail() {
    const demand = useSelector((state) => state.demand.demand);
    const status = useSelector((state) => state.demand.status);
    const { user: currentUser } = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    const params = useParams();

    const [open, setOpen] = useState(false);

    const id = params.demand_id;

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchDemandById(id))
        }
        dispatch(clearMessage());
    }, [status, dispatch, id]);

 
    return (
        status === "succeeded" ?
            <div className='w-full'>
                <Sidebar head={sideBarData({ role: currentUser.role })} >
                    <div className='px-6 py-3'>
                        <PhotoList photos={demand.images} />
                        <div className='text-red-800 text-lg font-bold py-3'>Genel Bilgiler</div>
                        <div className='grid grid-cols-6'>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-base font-bold">T.C. Kimlik No</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-gray-800 font-semibold">{demand.idendity}</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-base font-bold">İsim Soyisim</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-gray-800 font-semibold">{demand.full_name}</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-base font-bold">Doğum Tarihi</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-gray-800 font-semibold">{demand.birthday}</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-base font-bold">Sigorta Türü</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-gray-800 font-semibold">{demand.type}</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-base font-bold">Talep Tarihi</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-gray-800 font-semibold">{moment(demand.createdAt).format("DD.MM.YYYY")}</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-base font-bold">Oluşturan Kullanıcı</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-gray-800 font-semibold">{demand.user_id.full_name}</div>
                            </div>
                        </div>

                        <div className='text-red-800 text-lg font-bold py-3'>Araç Bilgileri</div>
                        <div className='grid grid-cols-6'>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-base font-bold">Aracın Markası</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-gray-800 font-semibold">{demand.brand}</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-base font-bold">Aracın Modeli</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-gray-800 font-semibold">{demand.sub_model}</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-base font-bold">Plaka</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-gray-800 font-semibold">{demand.number_plate}</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-base font-bold">Kullanım Amacı</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-gray-800 font-semibold">{demand.usage}</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-base font-bold">Model Yılı</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-gray-800 font-semibold">{demand.year}</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-base font-bold">Ruhsat Seri No</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-gray-800 font-semibold">{demand.licence_doc_no}</div>
                            </div>
                        </div>

                        <div className='text-red-800 text-lg font-bold py-3'>Konut Bilgileri</div>
                        <div className='grid grid-cols-6'>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-base font-bold">Metre Kare</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-gray-800 font-semibold">{demand.measurement}</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-base font-bold">Bina Bedeli</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-gray-800 font-semibold">{demand.building_price}</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-base font-bold">Eşya Bedeli</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-gray-800 font-semibold">{demand.furniture_price}</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-base font-bold">3. Şahıs Bedeli</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-gray-800 font-semibold">{demand.third_party_fee}</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-base font-bold">Demirbaş Bedeli</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-gray-800 font-semibold">{demand.fixture}</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-base font-bold">Emtia Bedeli</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-gray-800 font-semibold">{demand.commodity}</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-base font-bold">Adres</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-gray-800 font-semibold">{demand.address}</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-base font-bold">Hasar Durumu</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-gray-800 font-semibold">{demand.demage}</div>
                            </div>
                        </div>

                        <div className='text-red-800 text-lg font-bold py-3'>Seyahat Bilgileri</div>
                        <div className='grid grid-cols-6'>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-base font-bold">Gidilecek Ülke</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-gray-800 font-semibold">{demand.country}</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-base font-bold">Gidiş Tarihi</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-gray-800 font-semibold">{demand.departure_date}</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-base font-bold">Dönüş Tarihi</div>
                            </div>
                            <div className='border border-gray-300 p-2  justify-center'>
                                <div className="text-gray-800 font-semibold">{demand.date_of_return}</div>
                            </div>
                        </div>
                        {!demand.offer &&
                        <div className='w-full flex py-3 pr-16 text-3xl font-semibold justify-end'>
                            {
                                open ? <div className='w-8 h-8 rounded justify-center text-center cursor-pointer bg-gray-300 items-center'>
                                    <AiOutlineClose className=' text-white w-full' onClick={() => setOpen(false)} />
                                </div> :
                                    <button className={"text-white cursor-pointer rounded-lg text-[16px] px-16 py-[6px] bg-green-500 items-center justify-center"}
                                        onClick={() => setOpen(true)} title={"Döküman Ekle"} > Teklif Ver </button>
                            }
                        </div>}
                        {
                             <div>
                                {open &&
                                    <div className="pl-4 pr-16">
                                        <MakeOfferForm demand={demand} />
                                    </div>
                                }
                            </div>
                        }


                    </div>
                </Sidebar>
            </div>
            : status === "loading" ? <Loading /> : status === "failed" ? <Error /> : ""
    )
}
