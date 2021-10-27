import { useEffect, useState } from "react";
import { baseurl, getdashboardapi } from "../Api/api";

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "../Component/Nav";


export default function Dashboard() {
    const [userdaata, setuserdaata] = useState([])

    useEffect(() => {
        var config = { "Access-Control-Allow-Origin": "*" }
        getdashboardapi(baseurl, config, (res) => {
            console.log(res.data);
            setuserdaata(res.data)
        }, (err) => {
            alert(err);
        });
    }, [])

    userdaata.map((item) => {
        console.log(item.name, "yewasd");
    })


    console.log(userdaata, "userdaata");
    return (
        <div class="container">
            <div class="row">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div class="card border-0 shadow rounded-3 my-5">
                        <div class="card-body p-4 p-sm-5">
                            <div class="mb-4"><Nav/></div>
                            <h3 class="card-title text-center mb-4">Dashboard</h3>
                            <div>
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Sr.No</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Contact Number</th>
                                            <th scope="col">Gender</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            userdaata.map((item,index) =>
                                                <tr key={index}>
                                                    <th scope="row" >{index+1}</th>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.contact_number}</td>
                                                    <td>{item.gender}</td>
                                                </tr>
                                            )}
                                    </tbody>
                                </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}