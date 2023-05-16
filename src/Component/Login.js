import React from "react";
import { useContext } from "react";
import { themeContext } from "../Context/themeContext";
import './Style.css';


function Login() {
    const { setUsername, setShowprofile, themes, theme, handleOnclick } = useContext(themeContext);
    return (

        <div className="container px-5 py-4 contain">
            <div className="item">
                <h1 className="text-center py-4">Login Form</h1>

                <button className={`btn btk ${theme === "dark" ? "btn-light" : "btn-dark"}`} onClick={handleOnclick}>{theme === 'dark' ? <i class="fa-solid fa-eye-slash fa-1x"></i> : <i class="fa-sharp fa-solid fa-eye fa-1x"></i>}</button>
            </div>
            <form>
                <div className="form-group py-2">
                    <label htmlFor="" className="form-label">User Id {themes}</label>
                    <input type="text" placeholder="Enter your user id" className="form-control" onChange={(event) => setUsername(event.target.value)} required />

                </div>

                <div className="form-group py-2">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="Enter your password" className="form-control" required />
                </div>

                <div className="py-3">
                    <button className="btn btn-danger form-control" onClick={() => { setShowprofile(true) }}>Login</button></div>
            </form>
        </div>
    )
}
export default Login;