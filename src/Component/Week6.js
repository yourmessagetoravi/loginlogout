import React, { useState } from "react";

const FirstComponent=()=>{
    return(
        <div>
            <h5>Hi, Im First Component.....</h5>
            <div>
            <h5 className="text-primary">Welcome Component....</h5>
            <h5>Hi, you are now <b>LoggedIn</b> to Welcome Component.... </h5>
        </div>
        </div>
    );
}

const SecondComponent=()=>{
    return(
        <div>
            <h5>Hi, Im Second Component....</h5>
            <div>
            <h5 className="text-danger">Login Component....</h5>
        </div>
        </div>
    );
}

const TernaryOperatorComponent=()=>{

    const name="ABC";
    const [state, setState] = useState(true);
    function stateChange(){
        setState(!state);
        console.log(state);
    }
    return(
        <div>
            <div>
                <h5>Display Components based on <b className="text-danger">Ternary Operator</b>...</h5>
                {state? 
                (<div>
                    <FirstComponent/>
                    <button onClick={stateChange}>Logout</button>
                </div>):(
                    <div>
                        <SecondComponent/>
                        <button onClick={stateChange}>Login</button>
                    </div>
                )}
        
            </div>
            <hr/>
            <div>
                <h5>Display Account Login Details using <b className="text-danger">Logical Operator</b>...</h5>
                {state===true && 
                    (<div>
                        <p>Your are now LoggedIn to: <b className="text-warning">{name}</b> Account...</p>
                    </div>)
                }
            </div>
            <hr/>
            <div>
                <h5>Display Components based on <b className="text-danger">If-Else Condition</b></h5>
                    <IfElseComponent isLoggedIn={true}/>
            </div>
            <hr/>
            <div>
                <h5>Display Components based on <b className="text-danger">SwitchCaseComponent</b>....</h5>
                    <SwitchCaseComponent/>
            </div>



        </div>
    );
}
export default TernaryOperatorComponent;

//If-Else Component
const IfElseComponent = ({ isLoggedIn }) => {
    if (isLoggedIn) {
      return <FirstComponent />;
    } else {
      return <SecondComponent />;
    }
  };


  //Switch-Case Component

//AdminDashboard Component
const AdminDashboardComponent=()=>{
    return(
        <div>
            <h5>Hello, <b className="text-danger">Admin Component</b>....</h5>
        </div>
    );
}

//UserDashboard Component
const UserDashboardComponent=()=>{
    return(
        <div>
            <h5>Hello, <b className="text-primary">User Component</b>....</h5>
        </div>
    );
}

//DefaultDashboard Component

const DefaultDashboardComponent=()=>{

    return(
        <div>
            <h5>Hello, ist a DefaultDashboard Component.....</h5>
        </div>
    );
}

const SwitchCaseComponent=()=>{

    const [usertype, setusertype] = useState();
    console.log(usertype);
    function ChangeAdmin(){
        setusertype("admin");
    }
    function ChangeUser(){
        setusertype("user");
    }
    function DefaultDashboard(){
        setusertype("default");
    }
    switch(usertype){
        case 'admin':
            return (
                <div>
                    <AdminDashboardComponent/>
                    <button onClick={ChangeUser}>ChangeUser</button>
                    <button onClick={DefaultDashboard}>DefaultDashboard</button>
                </div>
            )
        case 'user':
            return (
                <div>
                    <UserDashboardComponent/>
                    <button onClick={ChangeAdmin}>ChangeAdmin</button>
                    <button onClick={DefaultDashboard}>DefaultDashboard</button>

                </div>
            )
        default:
            return (
                <div>
                    <DefaultDashboardComponent/>
                    <button onClick={ChangeAdmin}>ChangeAdmin</button>
                    <button onClick={ChangeUser}>ChangeUser</button>

                </div>
            )    }
  
}
  

