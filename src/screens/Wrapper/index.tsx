import Home from "../Home";
import Login from "../login";
import { useContext } from "react";
import UserContext from "../../context/user";

export default function Wrapper() {
    const userData = useContext(UserContext)
    return (
        userData.user != null ? <Home /> : <Login />
    )
}