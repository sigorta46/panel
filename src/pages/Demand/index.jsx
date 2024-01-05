import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'; 
import Error from '../../components/error';
import Loading from '../../components/loading';
import Sidebar from '../../components/sidebar';
import {  demandsListForCompleteHealth, demandsListForDask, demandsListForHealth, demandsListForHome, demandsListForKasko, demandsListForMonth, demandsListForOfferWait,
   demandsListForOther, demandsListForTraffic, demandsListForTravels, demandsListForWork } from '../../hooks';
import { fetchDemands } from "../../redux/demandSlice";
import { sideBarData } from '../../utils/data';
import DemandsContainer from './DemandsContainer';

export default function DemandPanel() {

  const demands = useSelector((state) => state.demand.demands);  
  const status = useSelector((state) => state.demand.status);
  const { user: currentUser } = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const id = currentUser._id;

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchDemands())
    }
  }, [status, dispatch, id, currentUser]);

  const month = demandsListForMonth(demands);
  const offerWait = demandsListForOfferWait(demands);
  const traffic = demandsListForTraffic(demands);
  const kasko = demandsListForKasko(demands);
  const dask = demandsListForDask(demands);
  const home = demandsListForHome(demands);
  const health = demandsListForHealth(demands);
  const complete = demandsListForCompleteHealth(demands);
  const work = demandsListForWork(demands);
  const trawels = demandsListForTravels(demands);
  const other = demandsListForOther(demands);

  return (

    status === "succeeded" ?
      <div className='w-full'>
        <Sidebar head={sideBarData({ role: currentUser.role })} >
          <div className='bg-gray-200 flex-1 min-h-screen'>
            <div className='bg-gray-200 flex-1 p-6'>
              <div className='grid lg:grid-cols-4 lg:gap-3 grid-cols-2 gap-1 md:grid-cols-3 md:gap-2'>
                {
                  currentUser.role === "admin" ? <>
                    <DemandsContainer title={"Genel Toplam Talepler"} color={"bg-green-500"} color2={"bg-green-600"} quantity={`${demands.length}`} url={"/demands/all-demands"} user={currentUser.role} demands={demands}/>
                    <DemandsContainer title={"Aylık Talepler"} color={"bg-amber-400"} color2={"bg-amber-500"} quantity={`${month.length}`} url={"/demands/month-all-demands"}
                    demands={month} />
                    <DemandsContainer title={"Teklif Verilmemiş Talepler"} color={"bg-orange-500"} color2={"bg-orange-600"} quantity={`${offerWait.length}`} user={currentUser.role}
                      url={"/demands/offer-wait-demands"} demands={offerWait}/>
                   <DemandsContainer title={"Zorunlu Trafik Sigortası"} color={"bg-orange-500"} color2={"bg-orange-600"} quantity={`${traffic.length}`} user={currentUser.role}
                      url={"/demands/traffic-demands"} demands={traffic}/>
                    <DemandsContainer title={"Kasko"} color={"bg-cyan-500"} color2={"bg-cyan-600"} quantity={`${kasko.length}`} user={currentUser.role}
                      url={"/demands/kasko-demands"} demands={kasko}/> 
                    <DemandsContainer title={"Konut"} color={"bg-teal-500"} color2={"bg-teal-600"} quantity={`${home.length}`} user={currentUser.role}
                      url={"/demands/home-demands"} demands={home}/>
                    <DemandsContainer title={"DASK"} color={"bg-amber-500"} color2={"bg-amber-600"} quantity={`${dask.length}`} user={currentUser.role}
                      url={"/demands/dask-demands"} demands={dask}/>
                    <DemandsContainer title={"Tamamlayıcı Sağlık"} color={"bg-red-500"} color2={"bg-red-600"} quantity={`${complete.length}`} user={currentUser.role}
                      url={"/demands/complete-health-demands"} demands={complete}/>
                    <DemandsContainer title={"Sağlık"} color={"bg-blue-500"} color2={"bg-blue-600"} quantity={`${health.length}`} user={currentUser.role}
                      url={"/demands/health-demands"} demands={health}/>
                      <DemandsContainer title={"İşyeri"} color={"bg-emerald-500"} color2={"bg-emerald-600"} quantity={`${work.length}`} user={currentUser.role}
                        url={"/demands/work-place-demands"} demands={work}/>
                    <DemandsContainer title={"Seyahat Sağlık"} color={"bg-lime-500"} color2={"bg-lime-600"} quantity={`${trawels.length}`} user={currentUser.role}
                      url={"/demands/trawel-health-demands"} demands={trawels}/>
                    <DemandsContainer title={"Yabancı Sağlık"} color={"bg-violet-500"} color2={"bg-violet-600"} quantity={`${other.length}`} user={currentUser.role}
                      url={"/demands/other-demands"} demands={other}/>
                  </> :  <>
                    <DemandsContainer title={"Vekaletleriniz"} color={"bg-green-500"} color2={"bg-green-600"} quantity={`${demands.length}`} url={"/demands/all-demands"} demands={demands}/>
                  </>
                }

              </div>
            </div>
          </div>
        </Sidebar>
      </div> : status === "loading" ? <Loading /> : status === "failed" ? <Error /> : ""




  )
}
