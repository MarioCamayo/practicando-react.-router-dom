import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import HomePages from "./pages/HomePages";
import AboutPages from "./pages/AboutPages";
import UsersPages from "./pages/UsersPages";
import NotFound from "./pages/NotFound";
import Navbar from './componets/Navbar';
import UserPage from "./pages/UserPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/about" element={<AboutPages />} />
        <Route path="/users" element={<UsersPages />} />
        <Route path="/users/:id" element={<UserPage />} />
        <Route path="/usuarios" element={ <Navigate  to={'/users'}/> } />
        <Route path="/dashboard/*" element={ <Dashboard/>}>
           <Route path="welcome" element={<p>WELCOME</p>}/>
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

            
