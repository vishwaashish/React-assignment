import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Validate, Validategender, Validatemail, Validatename, Validatepassword, Validatephone } from "../Component/Validate";
import { getdashboardapi } from "../Api/api";
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
    



    useEffect(() => {
        console.log('====================================');
        console.log(getdashboardapi());
        console.log('====================================');
    }, [])

    const Registeruser = (e) => {
        e.preventDefault();
        let validate = Validate(values)

        if(Validategender(gender)?.status === 'error'){
            setgender(Validategender(gender))
        }else{
            console.log(values);
            setsuccess(values);
        }
    }

    return (<>
        <div className="">

            <div class="container">
                <div class="row">
                    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div class="card border-0 shadow rounded-3 my-5">
                            <div class="card-body p-4 p-sm-5">
                                
                            <div class="mb-4"><Nav/></div>
                                <h3 class="card-title text-center mb-4">Sign Up</h3>
                                <form>
                                    <div class="mb-3">

                                        <label >Name</label>
                                        <input type="text" class="form-control" id="name" placeholder="Enter Your Name" onChange={(e) => {
                                            console.log(Validatename(e.target.value));
                                            setname(Validatename(e.target.value))
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

                                        <label>Phone number</label>
                                        <input type="text" class="form-control" id="phoneno" placeholder="Enter Your Phone No" onChange={(e) => {
                                            console.log(e.target.value);
                                            values.phoneno = e.target.value
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
                                            <input class="form-check-input" type="radio" name="gender" id="male" value="male" onChange={(e) => {
                                                console.log(Validategender(e.target.id));
                                                setgender(e.target.id)
                                                values.gender = e.target.id
                                                setvalue({ ...values })
                                            }} />
                                            <label class="form-check-label" >Male</label>
                                        </div>
                                        <div class="form-check form-check-inline mb-3">
                                            <input class="form-check-input" type="radio" name="gender" id="female" value="female" onChange={(e) => {
                                                console.log(Validategender(e.target.id));
                                                setgender(e.target.id)
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
                                        <button class="btn btn-primary  text-uppercase fw-bold" onClick={(e) => Registeruser(e)}>Sign
                                            up</button>
                                    </div>
                                    <p class="text-center mt-3">Already a member?<NavLink to="/login"> Sign in</NavLink></p>
                                    {success != '' ? <h5 className="text-success text-center mt-3">Insert Successfully</h5> : null}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}