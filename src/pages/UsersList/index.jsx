import moment from 'moment';
import React, { useEffect } from 'react'  
import { useDispatch, useSelector } from 'react-redux'; 
import CustomTable from '../../components/custom-table';
import Sidebar from '../../components/sidebar'  
import {  ListUsersHead,  sideBarData } from '../../utils/data';   
import { fetchUsers } from '../../redux/userSlice';
import Loading from '../../components/loading';
import Error from '../../components/error';

export default function UsersList() {
 
    const users = useSelector((state) => state.user.users);
    const status = useSelector((state) => state.user.status);
    const { user: currentUser } = useSelector((state) => state.auth)
    const dispatch = useDispatch(); 

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchUsers())
        }
    }, [status, dispatch]);


    return (
        <>
             {
             status === "succeeded" ? 
                <div className='w-full'>
                    <Sidebar head={sideBarData({ role: currentUser.role })} >
                        <div className='bg-gray-200 flex-1 min-h-screen'>
                            <div className='bg-gray-200 flex-1 p-6'>
                                <CustomTable searchable={true} body={users && users.map((user, key) => ([
                                   user.full_name,
                                   user.phone,
                                   user.idendity,
                                    moment(user.createdAt).format("DD.MM.YYYY"), 
                                    user.role, 
                                 ]))}
                                    head={ListUsersHead}
                                />
                            </div>
                        </div>
                    </Sidebar>
                </div> 
                : status === "loading" ? <Loading /> : status === "failed" ? <Error /> : ""
                }
            
        </>
    )
}