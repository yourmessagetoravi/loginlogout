import React, { useEffect, useState } from "react";

//useState Example

const StudentDetailsUseStateComponent=()=>{

    const initialdata={
        value:"Initial",
        hallticket: "",
        std_name: ""
    }
    console.log(initialdata);
        const [data, setdata]= useState(initialdata);
    
        function changedetails(){
            setdata({
                value:"After Change",
                hallticket:"2211CS010714",
                std_name:"DEF"
            });
        }
    
    return(
        <div>
            <h3>Display Student details using useState</h3>
            <h4>{data.value} State of hallticket and username</h4>
            <p>Hall-Ticket: {data.hallticket}</p>
            <p>Student Name: {data.std_name}</p>
            <button onClick={changedetails}>Change State</button>

        </div>
    );
}
//export default StudentDetailsUseStateComponent;


//useEffect Example

const StudentUseEffectComponent=()=>{

    let heading=["S.No","RollNo", "EmailID", "Name"];
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

            <div className="row">
                <StudentDetailsUseStateComponent/>
            </div>

            <h5>Fetch Students Data using useEffect....</h5>
            {/* print data in ordered list */}
            {/* <ol >
                {students.map((eachstudent)=>{
                    const {Name, EmailID}=eachstudent;
                
                return(
                    <li>
                        <div>{Name} - {EmailID}</div>
                        
                    </li>
                );
                })}
            </ol> */}
            
            {/* print data in table format */}
            <table className="table table-stripped table-hover">
                <thead>
                    <tr>
                        {heading.map((head, headID)=>(
                            <th key={headID}>{head}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                        {/* using slice method */}
                      {/* {students.slice(0,5).map((eachstudent, index)=> ( */}
                      {/* without slice method */}
                      {students.map((eachstudent, index)=> (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{eachstudent.RollNo}</td>
                            <td>{eachstudent.EmailID}</td>
                            <td>{eachstudent.Name}</td>
                        </tr>
                        ))}                 
                </tbody>
            </table>
        </div>
    );
}
export default StudentUseEffectComponent;
