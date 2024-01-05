import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearMessage } from '../../redux/message';
import { fetchOfferById, updateOffer } from '../../redux/offersSlice';
import moment from 'moment';
import {  Form, Formik } from 'formik';
import Loading from '../../components/loading';
import Error from '../../components/error';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

import storage  from '../../firebase';  
import Sidebar from '../../components/sidebar';
import { sideBarData } from '../../utils/data';

export default function AddSertificate() {


    const offer = useSelector((state) => state.offer.offer);
    const status = useSelector((state) => state.offer.status);

    const { message } = useSelector((state) => state.message);
    const addStatus = useSelector(state => state.offer.addStatus);

    const { user: currentUser } = useSelector((state) => state.auth)

    const dispatch = useDispatch();
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchOfferById(id))
        }
        dispatch(clearMessage());
    }, [status, dispatch, id]);

    const initialValues = {
        document: null,
        end_date: '',
    };

    const onSubmit = async (values, { resetForm }) => {

        try {
 
            if (values.document !== null) {
                const documentRef = ref(storage, `document/${moment.now()}${values.document.name}`);
                await uploadBytesResumable(documentRef, values.document);
                const downloadURL = await getDownloadURL(documentRef);
 
                // Döküman yükleme işlemi başarılı, downloadURL kullanılabilir
                //console.log('Döküman URL:', downloadURL);

                // Diğer form işlemleri (veritabanına kaydetme vb.) burada yapılabilir
                dispatch(updateOffer({
                    id: offer._id,
                    end_date: values.end_date,
                    sertificate_url: downloadURL,
                }));
                // Formu sıfırla
                resetForm();
            } else {
                dispatch(updateOffer({
                    id: offer._id,
                    end_date: values.end_date,
                    sertificate_url: '',
                }));
                // Formu sıfırla
                resetForm();
            }





        } catch (error) {
            console.error('Döküman yükleme hatası:', error);
        }
    };


    return (

        status === "succeeded" ?
            <div className='w-full'>
                <Sidebar head={sideBarData({ role: currentUser.role })} >
                    <div className="min-h-screen flex  bg-gray-100">

                        <div className="w-full p-8 bg-white rounded-lg shadow-md">
                            <h1 className="text-3xl font-bold mb-6">Poliçe Oluştur</h1>

                            <div className="bg-gray-100 p-6 rounded-md mb-6">
                                <ul className="list-disc list-inside">
                                    <li className="mb-2"><strong className="text-blue-500">Kullanıcı Adı:</strong> {offer.demand_id.user_id.full_name}</li>
                                    <li className="mb-2"><strong className="text-blue-500">Kayıt Tarihi:</strong> {moment(offer.demand_id.createdAt).format("DD.MM.YYYY")}</li>
                                    <li className="mb-2"><strong className="text-blue-500">Doğum Tarihi:</strong> {offer.demand_id.birthday}</li>
                                    <li className="mb-2"><strong className="text-blue-500">Sigorta Türü:</strong> {offer.demand_id.type}</li>
                                    <li className="mb-2"><strong className="text-blue-500">Teklif Tutarı:</strong> {offer.total_price}</li>
                                    <li className="mb-2"><strong className="text-blue-500">Açıklama:</strong> {offer.detail}</li>
                                    <li className="mb-2"><strong className="text-blue-500">Teklif Tarihi:</strong> {moment(offer.createdAt).format("DD.MM.YYYY")}</li>
                                    <li className="mb-2"><strong className="text-blue-500">Teklif Veren:</strong> {offer.user_id.full_name}</li>
                                </ul>
                            </div>

                            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                                {({ setFieldValue }) => (
                                    <Form className="space-y-4">
                                        {/* Döküman Inputu */}
                                        <div className="mb-4">
                                            <label className="block text-sm font-semibold mb-2">Döküman Yükle:</label>
                                            <input
                                                type="file"
                                                accept=".pdf, .doc, .docx"
                                                name='document'
                                                onChange={(event) => setFieldValue('document', event.currentTarget.files[0])}
                                                className="p-2 border w-full"
                                            />
                                        </div>

                                        {/* Bitiş Tarihi Inputu */}
                                        <div className="mb-4">
                                            <label className="block text-sm font-semibold mb-2">Bitiş Tarihi:</label>
                                            <input
                                                type="date"
                                                name="end_date"
                                                onChange={(event) => setFieldValue('end_date', event.target.value)}
                                                className="p-2 border w-full"
                                            />
                                        </div>

                                        {/* Gönder Butonu */}
                                        <div className="flex justify-end">
                                            <button
                                                type="submit"
                                                className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition duration-300"
                                            >
                                                Oluştur
                                            </button>
                                        </div>

                                        {
                                            message && (
                                                <div className="w-1/4 p-4 mt-4 rounded-xl justify-center items-center bg-yellow-100 text-sm">
                                                    <div className={`bg-transparent ${addStatus ? 'text-green-700' : 'text-red-600'}`} >**{message}</div>
                                                </div>
                                            )
                                        }
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </Sidebar>
            </div>

            : status === "loading" ? <Loading /> : status === "failed" ? <Error /> : ""
    )
}
