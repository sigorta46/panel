/* eslint-disable no-unused-vars */
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateOffer } from '../../redux/offersSlice';
import storage from '../../firebase';
import moment from 'moment';
import { Field, Form, Formik, useFormik } from 'formik';

export default function SertificateForm({ offer }) {


    const dispatch = useDispatch();

    const [uploadProgress, setUploadProgress] = useState(0);
    const { message } = useSelector((state) => state.message);

    const addStatus = useSelector(state => state.offer.addStatus);
 

    // const initialValues = {
    //     document: '',
    //     end_date: '',
    // };

    // const handleFormSubmit = async (values, { resetForm }) => {
    //     try {

    //         const documentRef = ref(storage, `document/${values.document.name}`);
    //         await uploadBytes(documentRef, values.document);
    //         const downloadURL = await getDownloadURL(documentRef);

    //         // Döküman yükleme işlemi başarılı, downloadURL kullanılabilir
    //         //console.log('Döküman URL:', downloadURL);

    //         // Diğer form işlemleri (veritabanına kaydetme vb.) burada yapılabilir
    // dispatch(updateOffer({
    //     id: offer._id,
    //     end_date: values.end_date,
    //     sertificate_url: downloadURL,
    // }));
    //         // Formu sıfırla
    //         resetForm();
    //     } catch (error) {
    //         console.error('Döküman yükleme hatası:', error);
    //     }
    // };

    const formik = useFormik({
        initialValues: {
            document: null,
            end_date: '',
        },
        onSubmit: async (values) => { 
            try {
                // Firebase Storage'a dosyayı


                if (values.document !== null) {
                    const storageRef = ref(storage, `document/${moment.now()}${values.document.name}`);
                    const uploadTask = uploadBytesResumable(storageRef, values.document);

                    // Yükleme sırasında progress takibi
                    uploadTask.on(
                        'state_changed',
                        (snapshot) => {
                            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                            setUploadProgress(progress);
                        },
                        (error) => {
                            console.error('Upload error:', error);
                        },
                        async () => {
                            // Yükleme tamamlandığında dosyanın URL'ini al
                            const downloadURL = await getDownloadURL(storageRef);

                            // Offer verilerini Redux'a ekle
                            dispatch(updateOffer({
                                id: offer._id,
                                end_date: values.end_date,
                                sertificate_url: downloadURL,
                            }));

                            // Formu sıfırla
                            formik.resetForm();
                        }
                    );
                }

                dispatch(updateOffer({
                    id: offer._id,
                    end_date: values.end_date,
                }));

                // Formu sıfırla
                formik.resetForm();


            } catch (error) {
                console.error('Form submission error:', error);
            }
        },
    });

    return (
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
                                Poliçe Oluştur
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            //onClick={() => setShowModal(false)}
                            >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="bg-white p-6 rounded shadow mb-6">
                            <ul>
                                <li><strong>Kullanıcı Adı:</strong> {offer.demand_id.user_id.full_name}</li>
                                <li><strong>Kayıt Tarihi:</strong> {moment(offer.demand_id.createdAt).format("DD.MM.YYYY")}</li>
                                <li><strong>Doğum Tarihi:</strong> {offer.demand_id.birthday}</li>
                                <li><strong>Sigorta Türü:</strong> {offer.demand_id.type}</li>
                                <li><strong>Teklif Tutarı:</strong> {offer.total_price}</li>
                                <li><strong>Açıklama:</strong> {offer.detail}</li>
                                <li><strong>Teklif Tarihi:</strong> {moment(offer.createdAt).format("DD.MM.YYYY")}</li>
                                <li><strong>Teklif Veren:</strong> {offer.user_id.full_name}</li>
                            </ul>
                        </div>

                        <div className="container mx-auto p-8"> 

                            <label htmlFor="end_date" className="block mt-4 text-sm font-medium text-gray-600 mb-2">Poliçe Bitiş Tarihi:</label>
                            <input
                                id="end_date"
                                name="end_date"
                                type="date"
                                onChange={formik.handleChange}
                                value={formik.values.end_date}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            />

                            <label htmlFor="document" className="block mt-4 text-sm font-medium text-gray-600 mb-2">Document:</label>
                            <input
                                id="document"
                                name="document"
                                type="file"
                                onChange={(event) => formik.setFieldValue('document', event.target.files[0])}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            />

                            <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200">
                                Teklifi Gönder
                            </button>

                            {
                                message && (
                                    <div className="w-1/4 p-4 mt-4 rounded-xl justify-center items-center bg-yellow-100 text-sm">
                                        <div className={`bg-transparent ${addStatus ? 'text-green-700' : 'text-red-600'}`} >**{message}</div>
                                    </div>
                                )
                            }

                            {/* <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
                                    {({ setFieldValue }) => (
                                        <Form className="grid grid-cols-1  gap-6">
                                            <div className="bg-white  rounded shadow">
                                                <label className="block mb-4">
                                                    <strong>Poliçe Yükle:</strong>
                                                    <Field
                                                        type="file"
                                                        name="document"
                                                        onChange={(event) => setFieldValue('document', event.target.files[0])}
                                                        className="mt-1 p-2 border"
                                                    />
                                                </label>
                                            </div>

                                            <div className="bg-white  rounded shadow">
                                                <label className="block mb-4">
                                                    <strong>Poliçe Bitiş Tarihi:</strong>
                                                    <Field
                                                        type="date"
                                                        name="end_date"
                                                        className="mt-1 p-2 border"
                                                    />
                                                </label>
                                            </div>

                                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                                <button
                                                    className="text-gray-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                   // onClick={() => setShowModal(false)}
                                                >
                                                    Kapat
                                                </button>
                                                <button
                                                    className="bg-emerald-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="submit"
                                                // onClick={() => { removeDemage(demageId); setShowModal(false) }}
                                                >
                                                    Oluştur!
                                                </button>
                                            </div>
                                        </Form>
                                    )}
                                    </Formik> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}
