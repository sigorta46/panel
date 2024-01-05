import React from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import storage from '../../firebase';
import { addOffer } from '../../redux/offersSlice';
import moment from "moment";
import { updateDemand } from '../../redux/demandSlice';

const MakeOfferForm = ({ demand }) => {
    const dispatch = useDispatch();

    const { message } = useSelector((state) => state.message);
    const addStatus = useSelector(state => state.offer.addStatus);

    const sendNotification = async () => {
        try {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                const token = demand.user_id.token;

                //Bildirim gönderme işlemi
                await fetch('https://fcm.googleapis.com/fcm/send', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `key=AAAAiJX4_Lk:APA91bEFoJK617XUwwqcgzzhI68PZ9iYyBByp7fTyInsHDWPpHIbK_PflzkSiZJqi00crXsq6KbWIt3m_2vJheZS9amHmPX2yaG1VaDzn1oeUzNxGhPQjThnsGzVlqJ1HEc7H-nD1QGm`,
                    },
                    body: JSON.stringify({
                        to: token,
                        notification: {
                            title: 'Yeni Teklif',
                            body: 'Yeni bir teklifiniz var.',
                        },
                    }),
                });
            } else {
                console.log('Kullanıcı izin vermedi.');
            }
        } catch (error) {
            console.error('Bildirim Gönderme Hatası:', error);
        }

    };

    const formik = useFormik({
        initialValues: {
            detail: '',
            total_price: '',
            document: null,
            end_date: '',
        },
        onSubmit: async (values) => {
            try {
                // Firebase Storage'a dosyayı


                if (values.document !== null) {

                    const documentRef = ref(storage, `document/${moment.now()}${values.document.name}`);
                    await uploadBytesResumable(documentRef, values.document);
                    const downloadURL = await getDownloadURL(documentRef);
                    // Offer verilerini Redux'a ekle
                    dispatch(addOffer({
                        detail: values.detail,
                        total_price: values.total_price,
                        offer_url: downloadURL,
                        demand_id: demand._id,
                        end_date: values.end_date,
                    }));

                    dispatch(updateDemand({ id: demand._id }));

                    sendNotification()

                    // Formu sıfırla
                    formik.resetForm();


                } else {

                    dispatch(addOffer({
                        detail: values.detail,
                        total_price: values.total_price,
                        demand_id: demand._id,
                        end_date: values.end_date,
                    }));

                    dispatch(updateDemand({ id: demand._id }));

                    sendNotification()

                    // Formu sıfırla
                    formik.resetForm();
                }



            } catch (error) {
                console.error('Form submission error:', error);
            }
        },
    });



    return (
        <form onSubmit={formik.handleSubmit} className="w-full  mx-auto mt-8 p-8 border border-gray-300 shadow-md">
            <label htmlFor="detail" className="block text-sm font-medium text-gray-600 mb-2">Detail:</label>
            <textarea
                id="detail"
                name="detail"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.detail}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                rows="4"
            />

            <label htmlFor="total_price" className="block mt-4 text-sm font-medium text-gray-600 mb-2">Total Price:</label>
            <input
                id="total_price"
                name="total_price"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.total_price}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />

            <label htmlFor="document" className="block mt-4 text-sm font-medium text-gray-600 mb-2">Document:</label>
            <input
                id="document"
                name="document"
                type="file"
                onChange={(event) => formik.setFieldValue('document', event.currentTarget.files[0])}
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
        </form>
    );
};

export default MakeOfferForm;




