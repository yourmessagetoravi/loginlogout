import React, { useEffect, useState } from "react";

// Student Bootstrap Card Component

function StudentBootstrapCardComponent(props) {
    const {student1}=props;
 return(
    <div className='col-md-4'>
        <div className='card'>
            <div className='card-body'>
                 <h5 className='card-title text-primary'>{student1.Name}</h5>
                <p className='card-subtitle mb-2 text-danger'>RollNo: {student1.RollNo}</p>
                <p className='card-text text-secondary'>Emai-ID: {student1.EmailID}</p>
            </div>
        </div>
    </div>
);
}

//Student DataFetching Component
const StudentDataFetchingComponent=()=>{
    const apiurl='https://sindhuravuri666.github.io/StudentList/StudentList.json';
    
    const[students, setstudents]= useState([]);
    
    const fetchstudents=async ()=>{
        const response= await fetch(apiurl);
        const students=await response.json();
        console.log(students);
        setstudents(students);
    }
    useEffect(()=>{
        fetchstudents();
    },[])

    
    return(
        <div style={{textAlign: "justify"}}>
            <h5 className="text-danger" style={{textAlign:"center"}}>Fetch Students using useEffect....</h5>
             
        
       

            <div className="row">
                {
                    // students Map
                        students.slice(0,5).map((student,index)=>(
                        <StudentBootstrapCardComponent key={index} student1={student}/>
                    ))
                }

            </div>

        </div>
    );
}
//export default StudentDataFetchingComponent;



// Employee Bootstrap Card Component
function EmployeeBootstrapCardComponent(props) {
    const {employee1}=props;
 return(
    <div className='col-md-4'>
        <div className='card'>
            <div className='card-body'>
                 <h5 className='card-title text-primary'>{employee1.NAME}</h5>
                <p className='card-subtitle mb-2 text-danger'>Emp-ID: {employee1.CODE}</p>
                <p className='card-text text-secondary'>Designation: {employee1.DESIGNATION}</p>
            </div>
        </div>
    </div>
);
}

// Employee DataFetching Component
const EmployeeDataFetchingComponent=()=>{

    let heading=["S.No","CODE", "NAME", "DESIGNATION"];
    const apiurl='https://mgouthamm.github.io/React-Demo/FacultyList/Faculty.json';
    
    const [employee, setemployee]= useState([]);
    
    const fetchemployee=async ()=>{
        const response= await fetch(apiurl);
        const employee=await response.json();
        console.log(employee);
        setemployee(employee);
    }
    useEffect(()=>{
        fetchemployee();
    },[])

    return(
        <div style={{textAlign: "justify"}} className='container-fluid'>
            <div>
                <h5 className="text-dangermk" style={{textAlign:"center"}}>Fetch Employee Data using useEffect....</h5>
                
               
                
                <div className='row'>
                    
                    {/* Employee map */}
                    {employee.slice(0,5).map((employee, index)=>(
                        <EmployeeBootstrapCardComponent key={index} employee1={employee}/>
                ))}
                </div>
            </div>
            <hr/>
            <div>
                <StudentDataFetchingComponent/>
            </div>
        </div>
    );
}
export default EmployeeDataFetchingComponent;
