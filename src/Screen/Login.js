import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Validatemail, Validatepassword } from "../Component/Validate";
import { getdashboardapi, userprofile } from "../Api/api";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Nav from "../Component/Nav";
// import Validate from "../Component/Validate";

export default function Login() {

    const [values, setvalue] = useState({})
    const [userdaata, setuserdaata] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [success, setsuccess] = useState("")
    const [error,seterror] = useState(true);
    const history = useHistory();

    useEffect(() => {
        var config = { "Access-Control-Allow-Origin": "*" }
        getdashboardapi(userprofile, config, (res) => {
            console.log(res.data);
            setuserdaata(res.data)
        }, (err) => {
            alert(err);
        });
    }, [])

    const Loginuser = (e) => {
        e.preventDefault();
        if (userdaata.email === values?.email && userdaata.contact_number === values?.password) {
            setsuccess(values)
            seterror(true)
            setTimeout(() => {
                history.push("/dashboard")
            }, 3000)
        } else {
            seterror(false)
            setsuccess("")
        }
    }

    return (<>
        <div className="">
            <div class="container">
                <div class="row">
                    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div class="card border-0 shadow rounded-3 my-5">
                            <div class="card-body p-4 p-sm-5">
                                <div class="mb-4"><Nav /></div>
                                <h3 class="card-title text-center mb-4">Sign In</h3>
                                <form>
                                    <div class="mb-3">
                                        <label>Email address</label>
                                        <input type="email" class="form-control" id="email" placeholder="name@example.com" onChange={(e) => {
                                            console.log(e.target.value);
                                            values.email = e.target.value
                                            setemail(Validatemail(e.target.value))
                                            setvalue({ ...values })
                                        }} />

                                        {email?.status === 'error' ?
                                            <div className="text-danger mb-3">
                                                {email?.message}
                                            </div>
                                            : null}
                                    </div>
                                    <div class="mb-3">
                                        <label>Password</label>
                                        <input type="password" class="form-control" id="password" placeholder="Password"
                                            onChange={(e) => {
                                                console.log(e.target.value);
                                                setpassword(Validatepassword(e.target.value))
                                                values.password = e.target.value
                                                setvalue({ ...values })
                                            }} />

                                        {password?.status === 'error' ?
                                            <div className="text-danger mb-3">
                                                {password?.message}
                                            </div>
                                            : null}
                                    </div>
                                    <div class="d-grid">
                                        <button class="btn btn-primary  text-uppercase fw-bold" onClick={(e) => Loginuser(e)}>Sign
                                            in</button>
                                    </div>
                                    <p class="text-center mt-3">Not a member?<NavLink to="/register"> Sign up</NavLink></p>

                                    { error? success != '' ? <h5 className="text-success text-center mt-3">Login Successfully</h5> : null : <h5 className="text-danger text-center mt-3">Login UnSuccessfully</h5>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}