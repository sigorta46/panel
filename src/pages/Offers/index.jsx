import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import OffersContainer from '../Offers/OffersContainer';
import Error from '../../components/error';
import Loading from '../../components/loading';
import Sidebar from '../../components/sidebar';
import { offersListForCompleteCancel, offersListForCompleteCheck, offersListForCompleteWait, offersListForDaskCancel, offersListForDaskCheck, offersListForDaskWait, 
    offersListForHealthCancel, offersListForHealthCheck, offersListForHealthWait, offersListForHomeCancel, offersListForHomeCheck, offersListForHomeWait, 
    offersListForKaskoCancel, offersListForKaskoCheck, offersListForKaskoWait, offersListForOtherCancel, offersListForOtherCheck, offersListForOtherWait, 
    offersListForTrafficCancel, offersListForTrafficCheck, offersListForTrafficWait, offersListForTrawelCancel, offersListForTrawelCheck, offersListForTrawelWait, offersListForWorkCancel, offersListForWorkCheck, offersListForWorkWait
} from '../../hooks';
import { fetchOffers } from '../../redux/offersSlice';
import { sideBarData } from '../../utils/data';

export default function OfferPanel() {

    const offers = useSelector((state) => state.offer.offers);
    const status = useSelector((state) => state.offer.status);
    const { user: currentUser } = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    const id = currentUser._id;

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchOffers())
        }
    }, [status, dispatch, id, currentUser]);

    const trafficWait = offersListForTrafficWait(offers); 
    const trafficCancel = offersListForTrafficCancel(offers);
    const trafficCheck = offersListForTrafficCheck(offers);
    const kaskoWait = offersListForKaskoWait(offers);
    const kaskoCancel = offersListForKaskoCancel(offers);
    const kaskoCheck = offersListForKaskoCheck(offers);
    const daskWait = offersListForDaskWait(offers);
    const daskCancel = offersListForDaskCancel(offers);
    const daskCheck = offersListForDaskCheck(offers);
    const homeWait = offersListForHomeWait(offers);
    const homeCancel = offersListForHomeCancel(offers);
    const homeCheck = offersListForHomeCheck(offers);
    const healthWait = offersListForHealthWait(offers);
    const healthCancel = offersListForHealthCancel(offers);
    const healthCheck = offersListForHealthCheck(offers);
    const completeWait = offersListForCompleteWait(offers);
    const completeCancel = offersListForCompleteCancel(offers);
    const completeCheck = offersListForCompleteCheck(offers);
    const workWait = offersListForWorkWait(offers);
    const workCancel = offersListForWorkCancel(offers);
    const workCheck = offersListForWorkCheck(offers);
    const otherWait = offersListForOtherWait(offers);
    const otherCancel = offersListForOtherCancel(offers);
    const otherCheck = offersListForOtherCheck(offers);
    const trawelWait = offersListForTrawelWait(offers);
    const trawelCancel = offersListForTrawelCancel(offers);
    const trawelCheck = offersListForTrawelCheck(offers);

    return (

        status === "succeeded" ?
            <div className='w-full'>
                <Sidebar head={sideBarData({ role: currentUser.role })} >
                    <div className='bg-gray-200 flex-1 min-h-screen'>
                        <div className='bg-gray-200 flex-1 p-6 '>
                            <div className='grid lg:grid-cols-4 lg:gap-3 grid-cols-2 gap-1 md:grid-cols-3 md:gap-2'>
                                {
                                    currentUser.role === "admin" ? <>
                                        <OffersContainer title={"Genel Toplam Teklifler"} color={"bg-green-500"} color2={"bg-green-600"} quantity={`${offers.length}`} url={"/offers/all-offers"} user={currentUser.role} offers={offers} />
                                       
                                        <OffersContainer title={"Trafik Sigortası Bekleyen"} color={"bg-orange-400"} color2={"bg-orange-500"} quantity={`${trafficWait.length}`} url={"/offers/traffic-wait-offers"}
                                            offers={trafficWait} />
                                        <OffersContainer title={"Trafik Sigortası Red"} color={"bg-orange-600"} color2={"bg-orange-700"} quantity={`${trafficCancel.length}`} user={currentUser.role}
                                            url={"/offers/traffic-denied-offers"} offers={trafficCancel} />
                                        <OffersContainer title={"Trafik Sigortası Onaylı"} color={"bg-orange-800"} color2={"bg-orange-900"} quantity={`${trafficCheck.length}`} user={currentUser.role}
                                            url={"/offers/traffic-check-demands"} offers={trafficCheck} />

                                        <OffersContainer title={"Kasko Bekleyen"} color={"bg-cyan-400"} color2={"bg-cyan-500"} quantity={`${kaskoWait.length}`} url={"/offers/kasko-wait-offers"}
                                            offers={kaskoWait} />
                                        <OffersContainer title={"Kasko Red"} color={"bg-cyan-600"} color2={"bg-cyan-700"} quantity={`${kaskoCancel.length}`} user={currentUser.role}
                                            url={"/offers/kask-denied-offers"} offers={kaskoCancel} />
                                        <OffersContainer title={"Kasko Onaylı"} color={"bg-cyan-800"} color2={"bg-cyan-900"} quantity={`${kaskoCheck.length}`} user={currentUser.role}
                                            url={"/offers/kasko-check-offers"} offers={kaskoCheck} />

                                        <OffersContainer title={"Konut Bekleyen"} color={"bg-teal-400"} color2={"bg-teal-500"} quantity={`${homeWait.length}`} url={"/offers/home-wait-offers"}
                                            offers={homeWait} />
                                        <OffersContainer title={"Konut Red"} color={"bg-teal-600"} color2={"bg-teal-700"} quantity={`${homeCancel.length}`} user={currentUser.role}
                                            url={"/offers/home-denied-offers"} offers={homeCancel} />
                                        <OffersContainer title={"Konut Onaylı"} color={"bg-teal-800"} color2={"bg-teal-900"} quantity={`${homeCheck.length}`} user={currentUser.role}
                                            url={"/offers/home-check-offers"} offers={homeCheck} />

                                        <OffersContainer title={"Dask Bekleyen"} color={"bg-amber-400"} color2={"bg-amber-500"} quantity={`${daskWait.length}`} url={"/offers/dask-wait-offers"}
                                            offers={daskWait} />
                                        <OffersContainer title={"Dask Red"} color={"bg-amber-600"} color2={"bg-amber-700"} quantity={`${daskCancel.length}`} user={currentUser.role}
                                            url={"/offers/dask-denied-offers"} offers={daskCancel} />
                                        <OffersContainer title={"Dask Onaylı"} color={"bg-amber-800"} color2={"bg-amber-900"} quantity={`${daskCheck.length}`} user={currentUser.role}
                                            url={"/offers/dask-check-offers"} offers={daskCheck} />

                                        <OffersContainer title={"Tamamlayıcı Sağlık Bekleyen"} color={"bg-red-400"} color2={"bg-red-500"} quantity={`${completeWait.length}`} url={"/offers/complete-wait-offers"}
                                            offers={completeWait} />
                                        <OffersContainer title={"Tamamlayıcı Sağlık Red"} color={"bg-red-600"} color2={"bg-red-700"} quantity={`${completeCancel.length}`} user={currentUser.role}
                                            url={"/offers/complete-denied-offers"} offers={completeCancel} />
                                        <OffersContainer title={"Tamamlayıcı Sağlık Onaylı"} color={"bg-red-800"} color2={"bg-red-900"} quantity={`${completeCheck.length}`} user={currentUser.role}
                                            url={"/offers/complete-check-offers"} offers={completeCheck} />


                                        <OffersContainer title={"Sağlık Bekleyen"} color={"bg-blue-400"} color2={"bg-blue-500"} quantity={`${healthWait.length}`} url={"/offers/health-wait-offers"}
                                            offers={healthWait} />
                                        <OffersContainer title={"Sağlık Red"} color={"bg-blue-600"} color2={"bg-blue-700"} quantity={`${healthCancel.length}`} user={currentUser.role}
                                            url={"/offers/health-denied-offers"} offers={healthCancel} />
                                        <OffersContainer title={"Sağlık Onaylı"} color={"bg-blue-800"} color2={"bg-blue-900"} quantity={`${healthCheck.length}`} user={currentUser.role}
                                            url={"/offers/health-check-offers"} offers={healthCheck} />

                                        <OffersContainer title={"İşyeri Bekleyen"} color={"bg-emerald-400"} color2={"bg-emerald-500"} quantity={`${workWait.length}`} url={"/offers/work-wait-offer"}
                                            offers={workWait} />
                                        <OffersContainer title={"İşyeri Red"} color={"bg-emerald-600"} color2={"bg-emerald-700"} quantity={`${workCancel.length}`} user={currentUser.role}
                                            url={"/offers/work-denied-offers"} offers={workCancel} />
                                        <OffersContainer title={"İşyeri Onaylı"} color={"bg-emerald-800"} color2={"bg-emerald-900"} quantity={`${workCheck.length}`} user={currentUser.role}
                                            url={"/offers/work-check-offers"} offers={workCheck} />

                                        <OffersContainer title={"Seyahat Sağlık Bekleyen"} color={"bg-lime-400"} color2={"bg-lime-500"} quantity={`${trawelWait.length}`} url={"/offers/trawel-wait-offers"}
                                            offers={trawelWait} />
                                        <OffersContainer title={"Seyahat Sağlık Red"} color={"bg-lime-600"} color2={"bg-lime-700"} quantity={`${trawelCancel.length}`} user={currentUser.role}
                                            url={"/offers/trawel-denied-offers"} offers={trawelCancel} />
                                        <OffersContainer title={"Seyahat Sağlık Onaylı"} color={"bg-lime-800"} color2={"bg-lime-900"} quantity={`${trawelCheck.length}`} user={currentUser.role}
                                            url={"/offers/trawel-check-offers"} offers={trawelCheck} />

                                        <OffersContainer title={"Yabancı Sağlık Bekleyen"} color={"bg-violet-400"} color2={"bg-violet-500"} quantity={`${otherWait.length}`} url={"/offers/other-wait-offers"}
                                            offers={otherWait} />
                                        <OffersContainer title={"Yabancı Sağlık Red"} color={"bg-violet-600"} color2={"bg-violet-700"} quantity={`${otherCancel.length}`} user={currentUser.role}
                                            url={"/offers/other-denied-offers"} offers={otherCancel} />
                                        <OffersContainer title={"Yabancı Sağlık Onaylı"} color={"bg-violet-800"} color2={"bg-violet-900"} quantity={`${otherCheck.length}`} user={currentUser.role}
                                            url={"/offers/other-check-offers"} offers={otherCheck} /> 
                                    </> : <>
                                        <OffersContainer title={"Vekaletleriniz"} color={"bg-green-500"} color2={"bg-green-600"} quantity={`${offers.length}`} url={"/offers/all-demands"} offers={offers} />
                                    </>
                                }

                            </div>
                        </div>
                    </div>
                </Sidebar>
            </div> : status === "loading" ? <Loading /> : status === "failed" ? <Error /> : ""




    )
}
