import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Noticias from "./Pages/Noticias/Noticias";
import Home from "./Pages/Home/Home";
import Wiki from "./Pages/Wiki/Wiki";
import Wikires from "./Pages/Wiki/Wikires";
import Conversor from "./Pages/Conversor/Conversor";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="font-poppins">
      <BrowserRouter>
        <Header />
        <div className="py-24">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/noticias" Component={Noticias} />
            <Route path="/Wiki" Component={Wiki} />
            <Route path="/wikires" Component={Wikires} />
            <Route path="/conversor" Component={Conversor}></Route>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
