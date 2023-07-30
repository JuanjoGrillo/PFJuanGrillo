import { Outlet } from "react-router-dom"

const StoreLayout = () => {
    return(
        <>
            <p>StoreLayout</p>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default StoreLayout