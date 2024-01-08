import { AiOutlineFileSearch } from "react-icons/ai";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import {  MdOutlinePayment,  } from "react-icons/md";
import { FaUsers } from "react-icons/fa"; 

export const sideBarData = () => [
    {
        title: "Talepler",
        query: "demands",
        icon: < AiOutlineFileSearch />,
        url: `/demands`
    },
    {
        title: "Teklifler",
        query: "offers",
        icon: < MdOutlinePayment />,
        url: `/offers`
    },
    {
        title: "Poliçeler",
        query: "sertificates",
        icon: < HiOutlineDocumentCheck />,
        url: `/sertificates`
    },
    
    {
        title: "Kullanıcı Listesi",
        query: "users",
        icon: < FaUsers />,
        url: `/all-user`
    },
] ;

export const ListDemandHead = [ 
    { name: 'Kullanıcı Adı', width: 175 , sortable: true}, 
    { name: 'Telefon', width: 150}, 
    { name: 'Kayıt Tarihi', width: 150}, 
    { name: 'Doğum Tarihi' , width: 120},
    { name: 'Sigorta Türü', width: 250 },   
    { name: 'İşlemler', width: 150 },  
];

export const ListOfferHead = [ 
    { name: 'Kullanıcı Adı', width: 175 , sortable: true}, 
    { name: 'Telefon', width: 150}, 
    { name: 'Kayıt Tarihi'}, 
    { name: 'Doğum Tarihi' , width: 120},
    { name: 'Sigorta Türü', width: 150 },  
    { name: 'Teklif Tutarı', width: 100 }, 
    { name: 'Açıklama', width: 350 },   
    { name: 'Teklif Tarihi'}, 
    { name: 'Teklif Veren', width: 150 },  
    { name: 'İşlem' },  
];

export const ListSertificateHead = [ 
    { name: 'Kullanıcı Adı', width: 175 , sortable: true}, 
    { name: 'Telefon', width: 150}, 
    { name: 'Kayıt Tarihi'},  
    { name: 'Sigorta Türü', width: 250 },  
    { name: 'Teklif Tutarı', width: 100 },  
    { name: 'Teklif Tarihi' }, 
    { name: 'Teklif Veren', width: 150 },  
    { name: 'Bitiş Tarihi'}, 
];

export const ListUsersHead = [ 
    { name: 'İsim Soyisim', width: 175 , sortable: true}, 
    { name: 'Telefon'}, 
    { name: 'T.C'}, 
    { name: 'Kayıt Tarihi'},  
    { name: 'Kullanıcı Türü' },  
];