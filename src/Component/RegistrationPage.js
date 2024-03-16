import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



// const RegistrationComponent = () => {

//     const [registrationdata, setregistrationdata] = useState({
//         username: '',
//         password: '',
//         fullname: '',
//         email: '',
//         phone: '',
//         country: '',
//         address: '',
//         gender: ''
//     });
//     const [gender, setgenderchange] = useState('male');

//     const navigate = useNavigate();

//     // const HandleGenderChange=(event)=>{
//     //     setgenderchange(event.target.value);
//     // }
//     const HandleGenderChange = (event) => {
//         const value = event.target.value;
//         setregistrationdata(prevState => ({
//             ...prevState,
//             gender: value
//         }));
//     }

//     const HandleRegistrationDataChange = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setregistrationdata((prevstate) => {
//             return { ...prevstate, [name]: value, gender }
//         })

//     }
//     const HandleRegistration = (e) => {
//         e.preventDefault();
//         //        console.log(registrationdata);

//         fetch("http://localhost:3004/users", {
//             method: "POST",
//             headers: { 'Content-type': 'application/json' },
//             body: JSON.stringify(registrationdata)
//         }).then((res) => {
//             //toast.success('Registered Successfully')
//             alert('Registered Successfully')
//             navigate('/Login')
//         }).catch((err) => {
//             //toast.error('Failed :'+err.message)
//             alert('Failed :' + err.message)
//         })



//     }
//     return (
//         <div>
//             <div className="offset-lg-3 col-lg-6">
//                 <form className="container" onSubmit={HandleRegistration}>
//                     <div className="card">
//                         <div className="card-header">
//                             <h4 style={{ textAlign: "center" }}>User Registration</h4>
//                         </div>
//                         <div className="card-body">
//                             <div className="row">
//                                 <div className="col-lg-6">
//                                     <div className="form-group">
//                                         <label>User Name <span className="errmsg">*</span></label>
//                                         <input className="form-control" type="text" name="username" value={registrationdata.username} onChange={HandleRegistrationDataChange} required />
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-6">
//                                     <div className="form-group">
//                                         <label>Password <span className="errmsg">*</span></label>
//                                         <input className="form-control" type="password" name="password" value={registrationdata.password} onChange={HandleRegistrationDataChange} required />
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-6">
//                                     <div className="form-group">
//                                         <label>Full Name <span className="errmsg">*</span></label>
//                                         <input className="form-control" name="fullname" value={registrationdata.fullname} onChange={HandleRegistrationDataChange} required />
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-6">
//                                     <div className="form-group">
//                                         <label>Email <span className="errmsg">*</span></label>
//                                         <input className="form-control" name="email" value={registrationdata.email} onChange={HandleRegistrationDataChange} required />
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-6">
//                                     <div className="form-group">
//                                         <label>Phone <span className="errmsg">*</span></label>
//                                         <input className="form-control" name="phone" value={registrationdata.phone} onChange={HandleRegistrationDataChange} required />
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-6">
//                                     <div className="form-group">
//                                         <label>Country <span className="errmsg">*</span></label>
//                                         <select className="form-control" name="country" value={registrationdata.country} onChange={HandleRegistrationDataChange} required>
//                                             <option value="">Select</option>
//                                             <option value="india">India</option>
//                                             <option value="usa">USA</option>
//                                             <option value="uk">UK</option>
//                                             <option value="canada">Canada</option>

//                                         </select>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-12">
//                                     <div className="form-group">
//                                         <label>Address <span className="errmsg">*</span></label>
//                                         <textarea className="form-control" name="address" value={registrationdata.address} onChange={HandleRegistrationDataChange} required></textarea>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-6">
//                                     <div className="form-group">
//                                         <label>Gender <span className="errmsg">*</span></label>
//                                         <br />
//                                         {/* <input type="radio" name="gender" value="male" className="app-check" checked={gender==='Male'} onChange={HandleGenderChange}/> <label>Male</label>
//                                         <input type="radio" name="gender" value="female" className="app-check" checked={gender==='Female'} onChange={HandleGenderChange}/> <label>Female</label> */}
//                                         <input type="radio" name="gender" value="male" className="app-check" checked={registrationdata.gender === 'male'} onChange={HandleGenderChange} /> <label>Male</label>
//                                         <input type="radio" name="gender" value="female" className="app-check" checked={registrationdata.gender === 'female'} onChange={HandleGenderChange} /> <label>Female</label>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="card-footer">
//                         <button type="submit" className="btn btn-sm btn-primary">Register</button>
//                         <Link className="btn btn-sm btn-danger" style={{ marginLeft: 10 }} to="/Login">Back</Link>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }
// export default RegistrationComponent;

const RegistrationComponent = () => {
    const [registrationdata, setregistrationdata] = useState({
        username:'',
        password:'',
        fullname:'',
        email:'',
        phone:'',
        country:'',
        address:'',
        gender:'male' // Set default gender to male
    });

    const navigate = useNavigate();

    const HandleRegistrationDataChange = (event) => {
        const { name, value } = event.target;
        setregistrationdata(prevstate => ({
            ...prevstate,
            [name]: value
        }));
    }

    const HandleRegistration = (e) => {
        e.preventDefault();

        fetch("http://localhost:3004/users", {
            method: "POST",
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(registrationdata)
        }).then((res) => {
            alert('Registered Successfully');
            navigate('/Login');
        }).catch((err) => {
            alert('Failed: ' + err.message);
        });
    }

    return (
        <div>
            <div className="offset-lg-3 col-lg-6">
            <form className="container" onSubmit={HandleRegistration}>

<div className="card">
    <div className="card-header">
        <h4 style={{ textAlign: "center" }}>User Registration</h4>
    </div>
    <div className="card-body">
        <div className="row">
            <div className="col-lg-6">
                <div className="form-group">
                    <label>User Name <span className="errmsg">*</span></label>
                    <input className="form-control" type="text" name="username" value={registrationdata.username} onChange={HandleRegistrationDataChange} required />
                </div>
            </div>
            <div className="col-lg-6">
                <div className="form-group">
                    <label>Password <span className="errmsg">*</span></label>
                    <input className="form-control" type="password" name="password" value={registrationdata.password} onChange={HandleRegistrationDataChange} required />
                </div>
            </div>
            <div className="col-lg-6">
                <div className="form-group">
                    <label>Full Name <span className="errmsg">*</span></label>
                    <input className="form-control" name="fullname" value={registrationdata.fullname} onChange={HandleRegistrationDataChange} required />
                </div>
            </div>
            <div className="col-lg-6">
                <div className="form-group">
                    <label>Email <span className="errmsg">*</span></label>
                    <input className="form-control" name="email" value={registrationdata.email} onChange={HandleRegistrationDataChange} required />
                </div>
            </div>
            <div className="col-lg-6">
                <div className="form-group">
                    <label>Phone <span className="errmsg">*</span></label>
                    <input className="form-control" name="phone" value={registrationdata.phone} onChange={HandleRegistrationDataChange} required />
                </div>
            </div>
            <div className="col-lg-6">
                <div className="form-group">
                    <label>Country <span className="errmsg">*</span></label>
                    <select className="form-control" name="country" value={registrationdata.country} onChange={HandleRegistrationDataChange} required>
                        <option value="">Select</option>
                        <option value="india">India</option>
                        <option value="usa">USA</option>
                        <option value="uk">UK</option>
                        <option value="canada">Canada</option>

                    </select>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="form-group">
                    <label>Address <span className="errmsg">*</span></label>
                    <textarea className="form-control" name="address" value={registrationdata.address} onChange={HandleRegistrationDataChange} required></textarea>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="form-group">
                    <label>Gender <span className="errmsg">*</span></label>
                    <br />
                    <input type="radio" name="gender" value="male" className="app-check" checked={registrationdata.gender === 'male'} onChange={HandleRegistrationDataChange} /> <label>Male</label>
                    <input type="radio" name="gender" value="female" className="app-check" checked={registrationdata.gender === 'female'} onChange={HandleRegistrationDataChange} /> <label>Female</label>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="card-footer">
    <button type="submit" className="btn btn-sm btn-primary">Register</button>
    <Link className="btn btn-sm btn-danger" style={{ marginLeft: 10 }} to="/Login">Back</Link>
</div>
</form>
            </div>
        </div>
    );
}
export default RegistrationComponent;
