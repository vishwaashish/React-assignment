import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Validate, Validategender, Validatemail, Validatename, Validatepassword, Validatephone } from "../Component/Validate";
import { NavLink } from 'react-router-dom'
import Nav from "../Component/Nav";

export default function Register() {

    const [values, setvalue] = useState({})

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")
    const [gender, setgender] = useState("")
    const [password, setpassword] = useState("")
    const [success, setsuccess] = useState("")
    const [error, seterror] = useState("")

    const [errorname, seterrorname] = useState("")
    const [erroremail, seterroremail] = useState("")
    const [errorpass, seterrorpass] = useState("")
    const [errorgen, seterrorgen] = useState("")
    const [errorphone, seterrorphone] = useState("")

    const Registeruser = (e) => {
        e.preventDefault();
        if (errorname === '2' && erroremail === '2' && errorphone === '2' && errorgen === '2' && errorpass === '2' && email?.length != 0 && password?.length != 0 && phone?.length != 0 && gender?.length != 0 && password?.length != 0) {
            alert("Login Successfully");
            seterror("3");
            console.log(values);
        } else {
            seterror("1")
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
                                <h3 class="card-title text-center mb-4">Sign Up</h3>
                                {error === '1' ?
                                    <div class="alert alert-danger" role="alert">
                                        Please Fill All the fields
                                    </div>
                                    : error == '3' ? <div class="alert alert-success" role="alert">
                                        Success
                                    </div> : null
                                }

                                <form>
                                    <div class="mb-3">

                                        <label >Name</label>
                                        <input type="text" class="form-control" id="name" placeholder="Enter Your Name"
                                            onChange={(e) => {
                                                setname(Validatename(e.target.value))
                                                seterrorname(Validatename(e.target.value)?.status === 'error' ? "1" : "2")
                                                values.name = e.target.value
                                                setvalue({ ...values })
                                            }} />

                                        {name?.status === 'error' ?
                                            <div className="text-danger mb-3">
                                                {name?.message}
                                            </div>
                                            : null}
                                    </div>


                                    <div class="mb-3">
                                        <label>Email address</label>
                                        <input type="email" class="form-control" id="email" placeholder="name@example.com"
                                            onChange={(e) => {
                                                seterroremail(Validatemail(e.target.value)?.status === 'error' ? "1" : "2")
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

                                        <label>Phone number</label>
                                        <input type="text" class="form-control" id="phoneno" placeholder="Enter Your Phone No"
                                            onChange={(e) => {
                                                values.phoneno = e.target.value
                                                seterrorphone(Validatephone(e.target.value)?.status === 'error' ? "1" : "2")
                                                setphone(Validatephone(e.target.value))
                                                setvalue({ ...values })
                                            }} />

                                        {phone?.status === 'error' ?
                                            <div className="text-danger mb-3">
                                                {phone?.message}
                                            </div>
                                            : null}
                                    </div>

                                    <div>
                                        <label>Gender</label><br />
                                        <div class="form-check form-check-inline mb-3" >
                                            <input class="form-check-input" type="radio" name="gender" id="male" value="male"

                                                onChange={(e) => {
                                                    seterrorgen(Validategender(e.target.id)?.status === 'error' ? "1" : "2")
                                                    setgender(e.target.id)
                                                    values.gender = e.target.id
                                                    setvalue({ ...values })
                                                }} />
                                            <label class="form-check-label" >Male</label>
                                        </div>
                                        <div class="form-check form-check-inline mb-3">
                                            <input class="form-check-input" type="radio" name="gender" id="female" value="female" onChange={(e) => {
                                                setgender(e.target.id)
                                                seterrorgen(Validategender(e.target.id)?.status === 'error' ? "1" : "2")
                                                values.gender = e.target.id
                                                setvalue({ ...values })
                                            }} />
                                            <label class="form-check-label" >Female</label>
                                        </div>
                                        {gender?.status === 'error' ?
                                            <div className="text-danger mb-3">
                                                {gender?.message}
                                            </div>
                                            : null}
                                    </div>


                                    <div class="mb-3">

                                        <label>Password</label>
                                        <input type="password" class="form-control" id="password" placeholder="Password"
                                            onChange={(e) => {
                                                setpassword(Validatepassword(e.target.value))
                                                seterrorpass(Validatepassword(e.target.value)?.status === 'error' ? "1" : "2")
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
                                        <button class="btn btn-primary  text-uppercase fw-bold" onClick={(e) => Registeruser(e)}>Sign
                                            up</button>
                                    </div>
                                    <p class="text-center mt-3">Already a member?<NavLink to="/login"> Sign in</NavLink></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}