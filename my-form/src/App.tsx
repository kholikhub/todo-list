import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./page/Home";
import { useState } from "react";
import { ProfileContext } from "./Context/ProfileContext";
import GlobalProfile from "./types/GlobalProfile";
import NavigationComponent from "./Components/NavigationComponent";
import Copyright from "./Components/Copyright";
import Register from "./page/Register";
import FormLogin from "./page/FormLogin";
import Dashboard from "./page/Dashboard";
import PrivateRoute from "./route/PrivateRoute";
import HeaderComponent from "./Components/HeaderComponent";
import CategoryComponent from "./Components/CategoryComponent";
import AddComponent from "./Components/AddComponent";
import EditComponent from "./Components/EditComponent";




function App() {
  const [profile, setProfile] = useState("anonymous");

  const changeName = (values: string) => {
    setProfile(values);
  };

  const thisContext: GlobalProfile = {
    name: profile,
    setName: changeName,
  };

  return (
    <ProfileContext.Provider value={thisContext}>
      <BrowserRouter>
        <NavigationComponent />
        <Header />


        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/FormLogin" element={<FormLogin/>}></Route>

          <Route path="/" element={<PrivateRoute/>}>
            <Route path="/HeaderComponent" element={<HeaderComponent />}></Route>
            <Route path="/Dashboard" element={<Dashboard/>}></Route>
            <Route path="/CategoryComponent" element={<CategoryComponent />}></Route>
            <Route path="/AddComponent" element={<AddComponent />}></Route>
            <Route path="/EditComponent/:id" element={<EditComponent />}></Route>
          </Route>
        </Routes>
        <Copyright />
      </BrowserRouter>
    </ProfileContext.Provider>
  );
}

export default App;