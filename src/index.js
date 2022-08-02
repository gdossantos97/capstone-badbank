import ReactDOM from "react-dom/client";
import { store } from './app/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Deposit from "./pages/deposit";
import Navigation from "./Components/Navbar";
import { useState, createContext } from 'react';
import Balance from "./pages/balance";
import AllData from "./pages/alldata";
import Withdraw from "./pages/withdraw";




export const UserContext = createContext()

function App () {

  const [balance, setBalance] = useState(0)
  const value = {balance, setBalance}


  return (
    <div>
    <BrowserRouter>
    <div> 
    <Navigation /> 
    <UserContext.Provider value={value} balance={balance} setBalance={setBalance}>
      <div>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Deposit" element={<Deposit />} />
        <Route path="/Withdraw" element={<Withdraw />} />
        <Route path="/Balance" element={<Balance />} />
        <Route path="/AllData" element={<AllData />} />

      </Routes>
      </div>
      </UserContext.Provider>
    </div>
    </BrowserRouter>
    </div>
  );
}


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <Provider store={store}>
  <App />
  </Provider>
);