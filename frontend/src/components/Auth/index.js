import { useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import MenuBookIcon from "../../assets/icons/logo_white.png"
import axios from 'axios'
import {useDispatch} from "react-redux"
import { handleLogin } from "../../actions/auth"
import {useNavigate}from "react-router-dom";


const Authentication = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [details, setDetails] = useState({
        username : "",
        password : ""
    })
  
    const handleInput = e => {
        setDetails({
            ...details,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmission = e => {
        e.preventDefault();
        // setLoader(true);
        dispatch(handleLogin(details, data => {
            if(data.error){
                console.log(data.error)
                alert("Some error")
            }
            else{
                console.log("success")
                navigate("/bookstore")
            }
            // setLoader(false)
        }))
    }

    const dispatch = useDispatch()
    return(
    <>
        <div className = {"divLeftContainer"}>
            <div className = {"divLogoContent"}>
                <div className = {"divImgContainer"}>
                    <img className = {"img-books"} src = {MenuBookIcon}/> 
                </div>
            </div>
        </div>
        <div className = {"divRightContainer"}>
            <div className="auth-container">
                <div className="auth-container--box">
                    <div className="tab-selector">
                        <NavLink exact to ={"/login"}>
                            <h3>Login</h3>
                        </NavLink>
                        <NavLink exact to = {"/signup"}>
                            <h3>Signup</h3>
                        </NavLink>

                    </div>
                    <form autoComplete="off" onSubmit={handleSubmission}>
                        <div className="input-wrap">
                            <label htmlFor="email">Username</label>
                            <input type={"text"} name = "username" placeholder="Enter Username"
                            value={details.username}
                            onChange = {handleInput}></input>
                        </div>
                        <div className="input-wrap">
                            <label htmlFor="password">Password</label>
                            <input type={"password"} name = "password" placeholder="Enter Password" value={details.password}
                            onChange = {handleInput}></input>
                        </div>
                        <div className="button-wrap">
                            <button className="login-btn">
                                {params.type === "login" ? "Login" : "Signup"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
    )
}

export default Authentication;