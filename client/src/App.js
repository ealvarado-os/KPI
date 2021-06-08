import React from "react"
import { Navbar } from "./components/Navbar/Navbar"
import { Home } from "./pages/Home"
import { useSelector,useDispatch } from "react-redux"

// hellocvxcvxvxvxvxcvxcsdasdasdasd

export const App = () => {
    /* Redux */
    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch()
    /* Redux */
    return (
        <div>
            <Navbar></Navbar>
        </div>
    )
}
