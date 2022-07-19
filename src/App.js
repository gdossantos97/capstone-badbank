import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import CreateAccount from "./pages/createaccount";
import Navigation from "./Components/Navbar";
import Deposit from "./pages/deposit";
import Withdraw from "./pages/withdraw";
import { UserContext } from './Components/Context';
import { useState } from 'react';


function App() {

  const [user, setUser] = useState(null);


  return (
    <BrowserRouter>
    <Navigation />  
    <UserContext.Provider value={user, setUser}>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/Deposit" element={<Deposit />} />
        <Route path="/Withdraw" element={<Withdraw />} />
      </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
