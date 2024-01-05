import { ErrorMessage, Field, Formik, Form } from 'formik';
import React, { useEffect, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { login } from '../../redux/authSlice';
import { clearMessage } from '../../redux/message';

export default function Login() {
    let navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const { isLoggedIn } = useSelector((state) => state.auth);

    const { message } = useSelector((state) => state.message);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    const initialValues = {
        phone: "",
        password: "",
    };

    const handleLogin = (formValue) => {
        const { phoneNumber, password } = formValue;

        setLoading(true);

        const ulkeKodu = phoneNumber.slice(0, 3);
        const alanKodu = phoneNumber.slice(3, 6);
        const ilkIkiRakam = phoneNumber.slice(6, 8);
        const sonIkiRakam = phoneNumber.slice(8);
        const phone = `+90${ulkeKodu} ${alanKodu} ${ilkIkiRakam} ${sonIkiRakam}`

        dispatch(login({ phone, password }))
            .unwrap()
            .then(() => {
                navigate("/demands");
            })
            .catch(() => {
                setLoading(false);
            });
    };

    if (isLoggedIn) {
        return <Navigate to="/demands" />;
    }

    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="bg-gray-100 flex rounded-2xl shadow-lg md:w-1/3 p-5 items-center">
                <div className="md:w-full md:px-5 py-16">
                    <h2 className="font-bold text-2xl text-[#002D74]">Giriş</h2>
                    <p className="text-xs mt-4 text-[#002D74]">
                        Telefon numaranız ve şifrenizle giriş yapınız
                    </p>
                    <Formik
                        initialValues={initialValues}
                        //  validationSchema={loginValidation}
                        onSubmit={handleLogin}
                    >
                        <Form className="flex flex-col">
                            <Field
                                name="phoneNumber"
                                placeholder="Telefon"
                                type="text"
                                className="p-2 mt-8 rounded-xl focus:outline-none"
                            />
                            <span className="py-2">
                                <ErrorMessage
                                    name="phoneNumber"
                                    component="div"
                                    className="text-red-400 text-sm"
                                />
                            </span>

                            <div className="relative pt-2">
                                <Field
                                    name="password"
                                    type={`${showPassword ? "text" : "password"}`}
                                    placeholder="Parola"
                                    className="p-2 rounded-xl w-full focus:outline-none"
                                />
                                <div
                                    className=""
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {!showPassword ? (
                                        <AiOutlineEye className="absolute top-1/2 -translate-y-1/2 transform  right-3" />
                                    ) : (
                                        <AiOutlineEyeInvisible className="absolute top-1/2 -translate-y-1/2 transform  right-3" />
                                    )}
                                </div>
                            </div>
                            <span className="py-2 ">
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="text-red-400 text-sm"
                                />
                            </span>
                            <button
                                type="submit"
                                className="bg-[#002D74] rounded-xl text-white py-3 hover:scale-105 duration-300"
                                disabled={loading}
                            >
                                {loading && <span className="animate-spin h-5 w-5 mr-3"></span>}
                                <span>Giriş Yap</span>
                            </button>
                        </Form>
                    </Formik>
                    {message && (
                        <div className="pt-3">
                            <div className="text-sm text-red-500" role="alert">
                                *{message}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
