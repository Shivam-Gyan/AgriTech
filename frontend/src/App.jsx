import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { Home, Login, Signup,CropDiagnosis,SoilDiagnosis } from "./pages";
import {ToastContainer } from 'react-toastify'
>>>>>>> 551f560708515e5e7cd41aeb52676d4007d54f2c
import Layout from "./components/Layout/Layout";


function App() {
  const [user, setUser] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentUserAPI())
  }, []);

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/cropdiagnosis" element={<CropDiagnosis />} />
            <Route path="/soildiagnosis" element={<SoilDiagnosis />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}



const ProtectedRouting = ({ children }) => {
  // const user = JSON.parse(localStorage.getItem('user'))
  
  if (!user) { return children; }
  else { return <Navigate to={'/'} />; }
}


// 
const ProtectedUser = ({ children }) => {
  // const user = JSON.parse(localStorage.getItem('user'));
  // const user=false;
  if (user) { return children; }
  else { return <Navigate to={'/login'} />; }
}

export default App;
