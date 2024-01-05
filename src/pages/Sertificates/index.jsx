import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Container from '../Sertificates/SertificatesContainer';
import Error from '../../components/error';
import Loading from '../../components/loading';
import Sidebar from '../../components/sidebar';
import { listForCompleteSertificate, listForCompleteSertificateEnd, listForDaskSertificate, listForDaskSertificateEnd, listForHealthSertificate, listForHealthSertificateEnd, listForHomeSertificate, listForHomeSertificateEnd, listForKaskoSertificate, listForKaskoSertificateEnd, listForOtherSertificate, listForOtherSertificateEnd, listForTrafficSertificate, listForTrafficSertificateEnd, listForTrawelSertificate, listForTrawelSertificateEnd, listForWorkSertificate, listForWorkSertificateEnd, sertificatesEndListForGetAll, sertificatesListForGetAll, sertificatesListForMonth } from '../../hooks'; 
import { fetchOffers } from '../../redux/offersSlice';
import { sideBarData } from '../../utils/data';

export default function SertificatePanel() {

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

  const all = sertificatesListForGetAll(offers);
  const endAll = sertificatesEndListForGetAll(offers);
  const month = sertificatesListForMonth(offers);
  const traffic = listForTrafficSertificate(offers);
  const trafficEnd = listForTrafficSertificateEnd(offers);
  const kasko = listForKaskoSertificate(offers);
  const kaskoEnd = listForKaskoSertificateEnd(offers);
  const home = listForHomeSertificate(offers);
  const homeEnd = listForHomeSertificateEnd(offers);
  const dask = listForDaskSertificate(offers);
  const daskEnd = listForDaskSertificateEnd(offers);
  const health = listForHealthSertificate(offers);
  const healthEnd = listForHealthSertificateEnd(offers);
  const complete = listForCompleteSertificate(offers);
  const completeEnd = listForCompleteSertificateEnd(offers);
  const trawel = listForTrawelSertificate(offers);
  const trawelEnd = listForTrawelSertificateEnd(offers);
  const other = listForOtherSertificate(offers);
  const otherEnd = listForOtherSertificateEnd(offers);
  const work = listForWorkSertificate(offers);
  const workEnd = listForWorkSertificateEnd(offers);

  return (

    status === "succeeded" ?
      <div className='w-full'>
        <Sidebar head={sideBarData({ role: currentUser.role })} >
          <div className='bg-gray-200 flex-1 min-h-screen'>
            <div className='bg-gray-200 flex-1 p-6'>
              <div className='grid lg:grid-cols-4 lg:gap-3 grid-cols-2 gap-1 md:grid-cols-3 md:gap-2'>
                {
                  currentUser.role === "admin" ? <>
                    <Container title={"Genel Toplam Poliçeler"} color={"bg-green-500"} color2={"bg-green-600"} quantity={`${all.length}`} url={"/sertificates/all-sertificates"} user={currentUser.role} sertificates={all} />
                    <Container title={"Süresi Dolan Tüm Poliçeler"} color={"bg-red-800"} color2={"bg-red-900"} quantity={`${endAll.length}`} url={"/sertificates/end-all-sertificates"} user={currentUser.role} sertificates={endAll} />
                    
                    <Container title={"Aylık Poliçeler"} color={"bg-amber-400"} color2={"bg-amber-500"} quantity={`${month.length}`} url={"/sertificates/month-all-sertificates"}
                      sertificates={month} />

                    <Container title={"Trafik Poliçeleri"} color={"bg-orange-600"} color2={"bg-orange-700"} quantity={`${traffic.length}`} user={currentUser.role}
                      url={"/sertificates/traffic"} sertificates={traffic} />
                    <Container title={"Trafik Süresi Dolan Poliçeler"} color={"bg-orange-800"} color2={"bg-orange-900"} quantity={`${trafficEnd.length}`} user={currentUser.role}
                      url={"/sertificates/traffic-end"} sertificates={trafficEnd} />

                    <Container title={"Kasko Poliçeleri"} color={"bg-cyan-600"} color2={"bg-cyan-700"} quantity={`${kasko.length}`} user={currentUser.role}
                      url={"/sertificates/kasko"} sertificates={kasko} />
                    <Container title={"Kasko Süresi Dolan Poliçeler"} color={"bg-cyan-800"} color2={"bg-cyan-900"} quantity={`${kaskoEnd.length}`} user={currentUser.role}
                      url={"/sertificates/kasko-end"} sertificates={kaskoEnd} />

                    <Container title={"Konut Poliçeleri"} color={"bg-teal-600"} color2={"bg-teal-700"} quantity={`${home.length}`} user={currentUser.role}
                      url={"/sertificates/home"} sertificates={home} />
                    <Container title={"Konut Süresi Dolan Poliçeler"} color={"bg-teal-800"} color2={"bg-teal-900"} quantity={`${homeEnd.length}`} user={currentUser.role}
                      url={"/sertificates/home-end"} sertificates={homeEnd} />

                    <Container title={"Dask Poliçeleri"} color={"bg-amber-600"} color2={"bg-amber-700"} quantity={`${dask.length}`} user={currentUser.role}
                      url={"/sertificates/dask"} sertificates={dask} />
                    <Container title={"Dask Süresi Dolan Poliçeler"} color={"bg-amber-800"} color2={"bg-amber-900"} quantity={`${daskEnd.length}`} user={currentUser.role}
                      url={"/sertificates/dask-end"} sertificates={daskEnd} />

                    <Container title={"Tamamlayıcı Sağlık Poliçeleri"} color={"bg-red-600"} color2={"bg-red-700"} quantity={`${complete.length}`} user={currentUser.role}
                      url={"/sertificates/complete-health"} sertificates={complete} />
                    <Container title={"Tamamlayıcı Sağlık Süresi Dolan Poliçeler"} color={"bg-red-800"} color2={"bg-red-900"} quantity={`${completeEnd.length}`} user={currentUser.role}
                      url={"/sertificates/complete-health-end"} sertificates={completeEnd} />

                    <Container title={"Sağlık Poliçeleri"} color={"bg-blue-600"} color2={"bg-blue-700"} quantity={`${health.length}`} user={currentUser.role}
                      url={"/sertificates/health"} sertificates={health} />
                    <Container title={"Sağlık Süresi Dolan Poliçeler"} color={"bg-blue-800"} color2={"bg-blue-900"} quantity={`${healthEnd.length}`} user={currentUser.role}
                      url={"/sertificates/health-end"} sertificates={healthEnd} />


                    <Container title={"İşyeri Poliçeleri"} color={"bg-emerald-600"} color2={"bg-emerald-700"} quantity={`${work.length}`} user={currentUser.role}
                      url={"/sertificates/work"} sertificates={work} />
                    <Container title={"İşyeri Süresi Dolan Poliçeler"} color={"bg-emerald-800"} color2={"bg-emerald-900"} quantity={`${workEnd.length}`} user={currentUser.role}
                      url={"/sertificates/work-end"} sertificates={workEnd} />


                    <Container title={"Seyahat Sağlık Poliçeleri"} color={"bg-lime-600"} color2={"bg-lime-700"} quantity={`${trawel.length}`} user={currentUser.role}
                      url={"/sertificates/trawel"} sertificates={trawel} />
                    <Container title={"Seyahat Sağlık Süresi Dolan Poliçeler"} color={"bg-lime-800"} color2={"bg-lime-900"} quantity={`${trawelEnd.length}`} user={currentUser.role}
                      url={"/sertificates/trawel-end"} sertificates={trawelEnd} />


                    <Container title={"Yabancı Sağlık Poliçeleri"} color={"bg-violet-600"} color2={"bg-violet-700"} quantity={`${other.length}`} user={currentUser.role}
                      url={"/sertificates/other"} sertificates={other} />
                    <Container title={"Yabancı Sağlık Süresi Dolan Poliçeler"} color={"bg-violet-800"} color2={"bg-violet-900"} quantity={`${otherEnd.length}`} user={currentUser.role}
                      url={"/sertificates/other-end"} sertificates={otherEnd} />
                  </> : <>
                    <Container title={"Vekaletleriniz"} color={"bg-green-500"} color2={"bg-green-600"} quantity={`${all.length}`} url={"/panel/all-sertificates"} sertificates={all} />
                  </>
                }

              </div>
            </div>
          </div>
        </Sidebar>
      </div> : status === "loading" ? <Loading /> : status === "failed" ? <Error /> : ""




  )
}
