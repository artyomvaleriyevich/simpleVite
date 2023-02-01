import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import './styles.scss'
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/About/About";
import Price from "./pages/Price/Price";
import Tender from "./pages/Tender/Tender";
import Estimate from "./pages/Estimate/Estimate";
import Album from "./pages/Album/Album";
import Catalog from "./pages/Catalog/Catalog";
import Product from "./pages/Product/Product";
import Basket from "./pages/Basket/Basket";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route path={'/'}  element={<Home/>}/>
            <Route path={'/catalog'}  element={<Catalog/>}/>
            <Route path={'/product/:id'} element={<Product/>} />
            <Route path={'/basket'}  element={<Basket/>}/>
            <Route path={'/about'}  element={<About/>}/>
            <Route path={'/about/tender'}  element={<Tender/>}/>
            <Route path={'/about/estimate'}  element={<Estimate/>}/>
            <Route path={'/about/album'}  element={<Album/>}/>
            <Route path={'/price'}  element={<Price/>}/>
            <Route path={'*'} element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
