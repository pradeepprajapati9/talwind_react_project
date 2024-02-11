import Headernav from "./Component/Header/Headernav"
import Footer from "./Component/Footer/Footer"
import { Outlet } from 'react-router-dom'
const Layout = () => {
    return (
        <>
            <Headernav />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout