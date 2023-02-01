import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {Outlet} from "react-router-dom";
import {ToastContainer} from 'react-toastify'



const Layout = () => {

    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer />
            <ToastContainer
                position="bottom-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="dark"
            />
        </div>
    );
};

export default Layout;