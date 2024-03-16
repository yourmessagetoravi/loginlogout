import React, { useState } from "react";
import RegistrationPage from "./RegistrationPage";
import { Link } from "react-router-dom";




const ControlledLoginFormComponent=()=>{

    const [inputvalue, setinputvalue] = useState({
        username:"",
        password:""
    })

    const HandleChange=(event)=>{
         const { name, value } = event.target;
         setinputvalue((prevState) => ({ ...prevState, [name]: value }));    
        //setinputvalue(event.target.value);
    }
   
    const HandleSubmit=(e)=>{
        e.preventDefault();
        console.log(inputvalue);
    }
    
    console.log(inputvalue);
   
    return(
        <div>
            <h5 style={{textAlign: "center"}}> Controlled FormComponent Section......</h5>
            <form onSubmit={HandleSubmit}>
                <div className="row">
                    <div className="offset-lg-3 col-lg-6" style={{marginTop:100}}>
                   
                        <div className="card">
                            <div className="card-header"><h3 style={{textAlign: "center"}}>Login Form</h3>   </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Username<span class="text-danger">*</span></label>
                                    <input className="form-control" type="text" placeholder="Enter Username" name="username" value={inputvalue.username} onChange={HandleChange} required/>
                                </div>
                                <div className="form-group">
                                    <label>Password<span class="text-danger">*</span></label>
                                    <input className="form-control" type="password" placeholder="Enter Password" name="password" value={inputvalue.password} onChange={HandleChange} required/>
                                </div> 
                                </div>
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-sm btn-success">Submit</button>
                                    <Link className="btn btn-sm btn-success" style={{marginLeft:10}} to="/RegistrationPage">New User</Link>
                                </div>
                            
                            
                        </div>
                   

                    </div>

                </div>
            
                </form>
            
            <div style={{textAlign:"center"}}>
                    <p>Entered Username: <span className="text-danger"><b>{inputvalue.username}</b></span></p>
                    <p>Entered Password: <span className="text-danger"><b>{inputvalue.password}</b></span></p>

            </div>


        </div>
    );
}



const FormsComponent=()=>{

    const HandleInputChange=(event)=>{
        console.log(event.target.value);
    }
    return(
        <div>
            <h5 style={{textAlign: "center"}}> FormsComponent Section......</h5>
            
            {/* <div className="card">
                <form>
                    <div className="card-title"> Login Form  </div>
                    <div className="card-body">
                                <div className="">
                        <label>UserName:</label>
                        <input type="text" placeholder="Enter Username" onChange={HandleInputChange}/>
                    </div>
                    <div className="card-text">
                        <label>Password:</label>
                        <input type="password" placeholder="Enter Password" onChange={HandleInputChange}/>
                    </div>
                    <div className="card-text">
                        <button type="button" className="btn btn-success">Submit</button>
                    </div>
                    </div>
                    

                </form>
            </div>
            <hr/> */}
            <div>
                <ControlledLoginFormComponent/>
            </div>

        </div>
    );
}
export default FormsComponent;