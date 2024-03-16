import React, { useEffect, useState } from "react";


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




const StudentBootstrapDataFetchingComponent=()=>{
    const apiurl='https://sindhuravuri666.github.io/StudentList/StudentList.json';
    
    const[students, setstudents]= useState([]);
    const [searchstd, setsearchstd] = useState([]);

    const fetchstudents=async ()=>{
        const response= await fetch(apiurl);
        const students=await response.json();
        console.log(students);
        setstudents(students);
    }
    useEffect(()=>{
        fetchstudents();
    },[])

   //const filterstd = students.filter((student)=>student.Name.toLowerCase().includes(searchstd.toLowerCase()));

   const filterstd = students.filter(student=>student.RollNo.includes(searchstd));



    const searchStudentHandle=(event)=>{
        setsearchstd(event.target.value);
    }


    return(
        <div style={{textAlign: "justify"}}>
            <h5 className="text-danger" style={{textAlign:"center"}}>Fetch Students using useEffect....</h5>
             
        
        <div style={{width: 500}}>
            <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={searchStudentHandle}/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>

            <div className="row">
                {
                    // students Map
                    //students.slice(0,5).map((student,index)=>(

                    // Filtered Student Map
                        filterstd.map((student,index)=>(
                        <StudentBootstrapCardComponent key={index} student1={student}/>
                    ))
                }

            </div>

        </div>
    );
}
//export default StudentBootstrapDataFetchingComponent;




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


const EmployeeBootstrapDataFetchingComponent=()=>{

    let heading=["S.No","CODE", "NAME", "DESIGNATION"];
    const apiurl='https://mgouthamm.github.io/React-Demo/FacultyList/Faculty.json';
    
    const [employee, setemployee]= useState([]);
    
    const [searchemployee, setsearchemployee] = useState([]);

    const fetchemployee=async ()=>{
        const response= await fetch(apiurl);
        const employee=await response.json();
        console.log(employee);
        setemployee(employee);
    }
    useEffect(()=>{
        fetchemployee();
    },[])

    const filteremployee = employee.filter(employee1=>employee1.NAME.includes(searchemployee));

    const filterEmployeeHandler=(event)=>{
        setsearchemployee(event.target.value);
    }

    return(
        <div style={{textAlign: "justify"}} className='container-fluid'>
            <div>
                <h5 className="text-dangermk" style={{textAlign:"center"}}>Fetch Employee Data using useEffect....</h5>
                
                <div style={{width: 500}}>
                    <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={filterEmployeeHandler}/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                
                <div className='row'>
                    
                    {/* Employee map */}
                    {/* {employee.slice(0,5).map((employee, index)=>( */}

                    {/* Filtered Employee                     */}
                    {filteremployee.map((employee, index)=>(
                        <EmployeeBootstrapCardComponent key={index} employee1={employee}/>
                ))}
                </div>
            </div>
            <hr/>
            <div>
                <StudentBootstrapDataFetchingComponent/>
            </div>
        </div>
    );
}
export default EmployeeBootstrapDataFetchingComponent;
