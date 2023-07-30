import { Outlet } from "react-router-dom"

const Layout = () => {
    return(
        <>
            <p>Layout</p>
            <Outlet />
        </>
    )
}

export default Layout