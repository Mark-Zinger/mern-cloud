import { BrowserRouter, Route, Routes } from "react-router-dom";

import PageContainer from "./components/PageContainer";
import Navbar from "./components/Navbar";
import StartPage from "./components/StartPage";


function App() {
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
