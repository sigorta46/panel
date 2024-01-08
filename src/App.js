import { BrowserRouter, Routes, Route } from "react-router-dom";  
import Login from "./pages/Login"; 
import NotFound from "./pages/NotFound";
import Unauthorized from "./pages/Unauthorized";
import DemandList from "./pages/DemandList";
import OfferPanel from "./pages/Offers";
import OfferList from "./pages/OfferList";
import DemandPanel from "./pages/Demand";
import SertificateList from "./pages/SertificateList";
import SertificatePanel from "./pages/Sertificates";
import DemandDetail from "./pages/DemandDetail";
import AddSertificate from "./pages/AddSertificate";
import UsersList from "./pages/UsersList";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Login />} /> 
          <Route path='*' element={<NotFound />} />

          
          <Route path='/all-user' element={<UsersList />} />

          <Route path='/demands/*' element={<DemandList />} />
          <Route path='/demands/detail/:demand_id' element={<DemandDetail />} />

          <Route path='/offers/*' element={<OfferList />} />
          <Route path='/sertificates/*' element={<SertificateList />} />
          
          <Route path='/demands' element={<DemandPanel />} />
          <Route path='/offers' element={<OfferPanel />} />
          <Route path='/offers/add-sertificate/:id' element={<AddSertificate />} />
          <Route path='/sertificates' element={<SertificatePanel />} />

          <Route path='/unauthorized' element={<Unauthorized />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;