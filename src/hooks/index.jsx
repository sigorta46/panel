
import moment from "moment";

export const demandsListForMonth = (demands) => {
    const year = moment().year();
    const month = moment().month() + 1 < 10 ? `0${moment().month() + 1}` : moment().month() + 1;
    const monthDemages = demands.filter((demand) => {
        return `${demand.createdAt}`.startsWith(`${year}-${month}`);
    })

    return monthDemages === undefined ? 0 : monthDemages;
}

export const demandsListForOfferWait = (demands) => {
    const offerWait = demands.filter((demand) => !demand.offer)
    return offerWait === undefined ? 0 : offerWait;
}

export const demandsListForTraffic = (demands) => {

    const traffic = demands.filter((demand) => `${demand.type}`.toLowerCase() === "zorunlu trafik sigortası"
    )

    return traffic === undefined ? 0 : traffic;
}

export const demandsListForKasko = (demands) => {

    const kasko = demands.filter((demand) => `${demand.type}`.toLowerCase() === "kasko"
    )

    return kasko === undefined ? 0 : kasko;
}

export const demandsListForDask = (demands) => {

    const dask = demands.filter((demand) => `${demand.type}`.toLowerCase() === "dask"
    )

    return dask === undefined ? 0 : dask;
}

export const demandsListForHome = (demands) => {

    const home = demands.filter((demand) => `${demand.type}`.toLowerCase() === "konut sigortası"
    )

    return home === undefined ? 0 : home;
}

export const demandsListForHealth = (demands) => {

    const health = demands.filter((demand) => `${demand.type}`.toLowerCase() === "sağlık sigortası"
    )

    return health === undefined ? 0 : health;
}

export const demandsListForCompleteHealth = (demands) => {

    const completeHealth = demands.filter((demand) => `${demand.type}`.toLowerCase() === "tamamlayıcı sağlık sigortası"
    )

    return completeHealth === undefined ? 0 : completeHealth;
}

export const demandsListForTravels = (demands) => {

    const travels = demands.filter((demand) => `${demand.type}`.toLowerCase() === "seyahat sağlık sigortası"
    )

    return travels === undefined ? 0 : travels;
}

export const demandsListForOther = (demands) => {

    const other = demands.filter((demand) => `${demand.type}`.toLowerCase() === "yabancı sağlık sigortası"
    )

    return other === undefined ? 0 : other;
}

export const demandsListForWork = (demands) => {

    const work = demands.filter((demand) => `${demand.type}`.toLowerCase() === "i̇şyeri sigortası"
    )

    return work === undefined ? 0 : work;
}

export const offersListForTrafficWait = (offers) => {

    const work = offers.filter((offer) =>
        offer.demand_id && offer.demand_id.type && `${offer.demand_id.type}`.toLowerCase() === "zorunlu trafik sigortası" && offer.status === 'beklemede'
    );

    return work === undefined ? 0 : work;
}

export const offersListForTrafficCancel = (offers) => {

    const work = offers.filter((offer) => offer.demand_id && offer.demand_id.type && `${offer.demand_id.type}`.toLowerCase() === "zorunlu trafik sigortası" && offer.status === 'red'
    )

    return work === undefined ? 0 : work;
}

export const offersListForTrafficCheck = (offers) => {

    const work = offers.filter((offer) => offer.demand_id && offer.demand_id.type &&`${offer.demand_id.type}`.toLowerCase() === "zorunlu trafik sigortası" && offer.status === 'onaylı' && offer.end_date === ''
    )

    return work === undefined ? 0 : work;
}

export const offersListForKaskoWait = (offers) => {

    const work = offers.filter((offer) => offer.demand_id && offer.demand_id.type &&`${offer.demand_id.type}`.toLowerCase() === "kasko" && offer.status === 'beklemede'
    )

    return work === undefined ? 0 : work;
}

export const offersListForKaskoCancel = (offers) => {

    const work = offers.filter((offer) =>offer.demand_id && offer.demand_id.type && `${offer.demand_id.type}`.toLowerCase() === "kasko" && offer.status === 'red'
    )

    return work === undefined ? 0 : work;
}

export const offersListForKaskoCheck = (offers) => {

    const work = offers.filter((offer) => offer.demand_id && offer.demand_id.type &&`${offer.demand_id.type}`.toLowerCase() === "kasko" && offer.status === 'onaylı' && offer.end_date === ''
    )

    return work === undefined ? 0 : work;
}

export const offersListForHomeWait = (offers) => {

    const work = offers.filter((offer) => offer.demand_id && offer.demand_id.type &&`${offer.demand_id.type}`.toLowerCase() === "konut sigortası" && offer.status === 'beklemede'
    )

    return work === undefined ? 0 : work;
}

export const offersListForHomeCancel = (offers) => {

    const work = offers.filter((offer) => offer.demand_id && offer.demand_id.type &&`${offer.demand_id.type}`.toLowerCase() === "konut sigortası" && offer.status === 'red'
    )

    return work === undefined ? 0 : work;
}

export const offersListForHomeCheck = (offers) => {

    const work = offers.filter((offer) =>offer.demand_id && offer.demand_id.type && `${offer.demand_id.type}`.toLowerCase() === "konut sigortası" && offer.status === 'onaylı' && offer.end_date === ''
    )

    return work === undefined ? 0 : work;
}

export const offersListForDaskWait = (offers) => {

    const work = offers.filter((offer) =>offer.demand_id && offer.demand_id.type && `${offer.demand_id.type}`.toLowerCase() === "dask" && offer.status === 'beklemede'
    )

    return work === undefined ? 0 : work;
}

export const offersListForDaskCancel = (offers) => {

    const work = offers.filter((offer) =>offer.demand_id && offer.demand_id.type && `${offer.demand_id.type}`.toLowerCase() === "dask" && offer.status === 'red'
    )

    return work === undefined ? 0 : work;
}

export const offersListForDaskCheck = (offers) => {

    const work = offers.filter((offer) =>offer.demand_id && offer.demand_id.type && `${offer.demand_id.type}`.toLowerCase() === "dask" && offer.status === 'onaylı' && offer.end_date === ''
    )

    return work === undefined ? 0 : work;
}

export const offersListForHealthWait = (offers) => {

    const work = offers.filter((offer) => offer.demand_id && offer.demand_id.type &&`${offer.demand_id.type}`.toLowerCase() === "sağlık sigortası" && offer.status === 'beklemede'
    )

    return work === undefined ? 0 : work;
}

export const offersListForHealthCancel = (offers) => {

    const work = offers.filter((offer) => offer.demand_id && offer.demand_id.type &&`${offer.demand_id.type}`.toLowerCase() === "sağlık sigortası" && offer.status === 'red'
    )

    return work === undefined ? 0 : work;
}

export const offersListForHealthCheck = (offers) => {

    const work = offers.filter((offer) => offer.demand_id && offer.demand_id.type &&`${offer.demand_id.type}`.toLowerCase() === "sağlık sigortası" && offer.status === 'onaylı' && offer.end_date === ''
    )

    return work === undefined ? 0 : work;
}

export const offersListForCompleteWait = (offers) => {

    const work = offers.filter((offer) =>offer.demand_id && offer.demand_id.type && `${offer.demand_id.type}`.toLowerCase() === "tamamlayıcı sağlık sigortası" && offer.status === 'beklemede'
    )

    return work === undefined ? 0 : work;
}

export const offersListForCompleteCancel = (offers) => {

    const work = offers.filter((offer) => offer.demand_id && offer.demand_id.type &&`${offer.demand_id.type}`.toLowerCase() === "tamamlayıcı sağlık sigortası" && offer.status === 'red'
    )

    return work === undefined ? 0 : work;
}

export const offersListForCompleteCheck = (offers) => {

    const work = offers.filter((offer) => offer.demand_id && offer.demand_id.type &&`${offer.demand_id.type}`.toLowerCase() === "tamamlayıcı sağlık sigortası" && offer.status === 'onaylı' && offer.end_date === ''
    )

    return work === undefined ? 0 : work;
}

export const offersListForTrawelWait = (offers) => {

    const work = offers.filter((offer) => offer.demand_id && offer.demand_id.type &&`${offer.demand_id.type}`.toLowerCase() === "seyahat sağlık sigortası" && offer.status === 'beklemede'
    )

    return work === undefined ? 0 : work;
}

export const offersListForTrawelCancel = (offers) => {

    const work = offers.filter((offer) =>offer.demand_id && offer.demand_id.type && `${offer.demand_id.type}`.toLowerCase() === "seyahat sağlık sigortası" && offer.status === 'red'
    )

    return work === undefined ? 0 : work;
}

export const offersListForTrawelCheck = (offers) => {

    const work = offers.filter((offer) => offer.demand_id && offer.demand_id.type &&`${offer.demand_id.type}`.toLowerCase() === "seyahat sağlık sigortası" && offer.status === 'onaylı' && offer.end_date === ""
    )

    return work === undefined ? 0 : work;
}

export const offersListForOtherWait = (offers) => {

    const work = offers.filter((offer) => offer.demand_id && offer.demand_id.type &&`${offer.demand_id.type}`.toLowerCase() === "yabancı sağlık sigortası" && offer.status === 'beklemede'
    )

    return work === undefined ? 0 : work;
}

export const offersListForOtherCancel = (offers) => {

    const work = offers.filter((offer) => offer.demand_id && offer.demand_id.type &&`${offer.demand_id.type}`.toLowerCase() === "yabancı sağlık sigortası" && offer.status === 'red'
    )

    return work === undefined ? 0 : work;
}

export const offersListForOtherCheck = (offers) => {

    const work = offers.filter((offer) =>offer.demand_id && offer.demand_id.type && `${offer.demand_id.type}`.toLowerCase() === "yabancı sağlık sigortası" && offer.status === 'onaylı' && offer.end_date === ''
    )

    return work === undefined ? 0 : work;
}

export const offersListForWorkWait = (offers) => {

    const work = offers.filter((offer) =>offer.demand_id && offer.demand_id.type && `${offer.demand_id.type}`.toLowerCase() === "i̇şyeri sigortası" && offer.status === 'beklemede'
    )

    return work === undefined ? 0 : work;
}

export const offersListForWorkCancel = (offers) => {

    const work = offers.filter((offer) => offer.demand_id && offer.demand_id.type &&`${offer.demand_id.type}`.toLowerCase() === "i̇şyeri sigortası" && offer.status === 'red'
    )

    return work === undefined ? 0 : work;
}

export const offersListForWorkCheck = (offers) => {

    const work = offers.filter((offer) => offer.demand_id && offer.demand_id.type &&`${offer.demand_id.type}`.toLowerCase() === "i̇şyeri sigortası" && offer.status === 'onaylı' && offer.end_date === ''
    )

    return work === undefined ? 0 : work;
}


export const sertificatesListForGetAll = (offers) => {
    const work = offers.filter((offer) => offer.end_date !== '' && Date.parse(offer.end_date) > Date.now()
    )

    return work === undefined ? 0 : work; 
}

export const sertificatesEndListForGetAll = (offers) => {
    const work = offers.filter((offer) => offer.end_date !== '' && Date.parse(offer.end_date) < Date.now()
    )

    return work === undefined ? 0 : work; 
}

export const sertificatesListForMonth = (offers) => {
    const year = moment().year();
    const month = moment().month() + 1 < 10 ? `0${moment().month() + 1}` : moment().month() + 1;

    const monthDemages = offers.filter((offer) =>offer.demand_id && offer.demand_id.type && `${offer.createdAt}`.startsWith(`${year}-${month}`) && offer.end_date !== '' && Date.parse(offer.end_date) > Date.now()
    )

    return monthDemages === undefined ? 0 : monthDemages;
}

export const listForTrafficSertificate = (offers) => {

    const work = offers.filter((offer) =>offer.demand_id && offer.demand_id.type && `${offer.demand_id.type}`.toLowerCase() === "zorunlu trafik sigortası" && offer.end_date !== '' && Date.parse(offer.end_date) > Date.now()
    )

    return work === undefined ? 0 : work;
}

export const listForTrafficSertificateEnd = (offers) => {

    const work = offers.filter((offer) => offer.demand_id && offer.demand_id.type && `${offer.demand_id.type}`.toLowerCase() === "zorunlu trafik sigortası" && offer.end_date !== '' && Date.parse(offer.end_date) < Date.now()
    )

    console.log(work);

    return work === undefined ? 0 : work;
}

export const listForKaskoSertificate = (offers) => { 

    const work = offers.filter((offer) => offer.demand_id && offer.demand_id.type &&`${offer.demand_id.type}`.toLowerCase() === "kasko" && offer.end_date !== '' && Date.parse(offer.end_date) > Date.now()
    )

    return work === undefined ? 0 : work;
}

export const listForKaskoSertificateEnd = (offers) => {

    const work = offers.filter((offer) =>offer.demand_id && offer.demand_id.type && `${offer.demand_id.type}`.toLowerCase() === "kasko" && offer.end_date !== '' && Date.parse(offer.end_date) < Date.now()
    )

    return work === undefined ? 0 : work;
}
export const listForHomeSertificate = (offers) => {

    const work = offers.filter((offer) =>offer.demand_id && offer.demand_id.type && `${offer.demand_id.type}`.toLowerCase() === "konut sigortası" && offer.end_date !== '' && Date.parse(offer.end_date) > Date.now()
    )

    return work === undefined ? 0 : work;
}

export const listForHomeSertificateEnd = (offers) => {

    const work = offers.filter((offer) => offer.demand_id && offer.demand_id.type &&`${offer.demand_id.type}`.toLowerCase() === "konut sigortası" && offer.end_date !== '' && Date.parse(offer.end_date) < Date.now()
    )

    return work === undefined ? 0 : work;
}

export const listForDaskSertificate = (offers) => {

    const work = offers.filter((offer) =>offer.demand_id && offer.demand_id.type && `${offer.demand_id.type}`.toLowerCase() === "dask" && offer.end_date !== '' && Date.parse(offer.end_date) > Date.now() 
    )

    return work === undefined ? 0 : work;
}

export const listForDaskSertificateEnd = (offers) => {

    const work = offers.filter((offer) =>offer.demand_id && offer.demand_id.type && `${offer.demand_id.type}`.toLowerCase() === "dask" && offer.end_date !== '' && Date.parse(offer.end_date) < Date.now()
    )

    return work === undefined ? 0 : work;
}


export const listForHealthSertificate = (offers) => {

    const work = offers.filter((offer) =>offer.demand_id && offer.demand_id.type && `${offer.demand_id.type}`.toLowerCase() === "sağlık sigortası" && offer.end_date !== '' && Date.parse(offer.end_date) > Date.now()
    )

    return work === undefined ? 0 : work;
}

export const listForHealthSertificateEnd = (offers) => {

    const work = offers.filter((offer) =>offer.demand_id && offer.demand_id.type && `${offer.demand_id.type}`.toLowerCase() === "sağlık sigortası" && offer.end_date !== '' && Date.parse(offer.end_date) < Date.now()
    )

    return work === undefined ? 0 : work;
}


export const listForCompleteSertificate = (offers) => {

    const work = offers.filter((offer) =>offer.demand_id && offer.demand_id.type && `${offer.demand_id.type}`.toLowerCase() === "tamamlayıcı sağlık sigortası" && offer.end_date !== '' && Date.parse(offer.end_date) > Date.now()
    )

    return work === undefined ? 0 : work;
}

export const listForCompleteSertificateEnd = (offers) => {

    const work = offers.filter((offer) => offer.demand_id && offer.demand_id.type &&`${offer.demand_id.type}`.toLowerCase() === "tamamlayıcı sağlık sigortası" && offer.end_date !== '' && Date.parse(offer.end_date) < Date.now()
    )

    return work === undefined ? 0 : work;
}


export const listForTrawelSertificate = (offers) => {

    const work = offers.filter((offer) =>offer.demand_id && offer.demand_id.type && `${offer.demand_id.type}`.toLowerCase() === "seyahat sağlık sigortası" && offer.end_date !== '' && Date.parse(offer.end_date) > Date.now()
    )

    return work === undefined ? 0 : work;
}

export const listForTrawelSertificateEnd = (offers) => {

    const work = offers.filter((offer) =>offer.demand_id && offer.demand_id.type && `${offer.demand_id.type}`.toLowerCase() === "seyahat sağlık sigortası" && offer.end_date !== '' && Date.parse(offer.end_date) < Date.now()
    )

    return work === undefined ? 0 : work;
}


export const listForOtherSertificate = (offers) => {

    const work = offers.filter((offer) => offer.demand_id && offer.demand_id.type &&`${offer.demand_id.type}`.toLowerCase() === "yabancı sağlık sigortası" && offer.end_date !== '' && Date.parse(offer.end_date) > Date.now()
    )

    return work === undefined ? 0 : work;
}

export const listForOtherSertificateEnd = (offers) => {

    const work = offers.filter((offer) => offer.demand_id && offer.demand_id.type &&`${offer.demand_id.type}`.toLowerCase() === "yabancı sağlık sigortası" && offer.end_date !== '' && Date.parse(offer.end_date) < Date.now()
    )

    return work === undefined ? 0 : work;
}

export const listForWorkSertificate = (offers) => {

    const work = offers.filter((offer) =>offer.demand_id && offer.demand_id.type && `${offer.demand_id.type}`.toLowerCase() === "i̇şyeri sigortası" && offer.end_date !== '' && Date.parse(offer.end_date) > Date.now()
    )

    return work === undefined ? 0 : work;
}

export const listForWorkSertificateEnd = (offers) => {

    const work = offers.filter((offer) =>offer.demand_id && offer.demand_id.type && `${offer.demand_id.type}`.toLowerCase() === "i̇şyeri sigortası" && offer.end_date !== '' && Date.parse(offer.end_date) < Date.now()
    )

    return work === undefined ? 0 : work;
}