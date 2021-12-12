import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import PageContainer from "./components/PageContainer";
import Navbar from "./components/Navbar";
import StartPage from "./components/StartPage";
import Disk from './components/Disk'
import { auth } from "./actions/user";


function App() {

  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.user.isAuth)

  console.log(isAuth)

  useEffect( () => dispatch(auth),[] ); // try auth

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <PageContainer>
          { !isAuth 
              ? <Routes>
                  <Route path="/" element={<StartPage/>}/>
                </Routes>
              : <Routes>
                  <Route path="/" element={<Disk/>}/>
                </Routes>
          }  
        </PageContainer>
      </div>
    </BrowserRouter>
  );
}

export default App;
