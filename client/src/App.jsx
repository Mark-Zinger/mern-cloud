import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import PageContainer from "./components/PageContainer";
import Navbar from "./components/Navbar";
import StartPage from "./components/StartPage";
import { auth } from "./actions/user";


function App() {

  const dispatch = useDispatch();

  useEffect( () => dispatch(auth),[] ); // try auth

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <PageContainer>
          <Routes>
            <Route path="/" element={<StartPage/>}/>
          </Routes>
        </PageContainer>
      </div>
    </BrowserRouter>
  );
}

export default App;
