import React from "react";
import { useContext } from "react";
import { themeContext } from "../Context/themeContext";




function Profile() {
    const { username } = useContext(themeContext);
    return (
        <div>

            <h2>Your User Id</h2>
            <h3>UserName:{username}</h3>


        </div>
    )
}
export default Profile;