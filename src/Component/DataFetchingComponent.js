import React, { useEffect, useState } from "react";

// const DataFetchingComponent=()=>{
//     const apiurl="https://sindhuravuri666.github.io/StudentList/StudentList.json";
//     const[students, setstudents]= useState([]);

    
//     useEffect(()=>{   
//         const fetchstudents=async ()=>{
//             const response= await fetch(apiurl);
//             const data=await response.json();
//             setstudents(data);
//         }  
//         fetchstudents();
//     },[])
//     return(
//         <div>
//             <h5>Fetch Students using useEffect....</h5>
//             <ul>
//                 {students.map((eachstudent)=>{
//                     const {Name, EmailID}=eachstudent;
                
//                 return(
//                     <li>
//                         <div>{Name}</div>
//                         <div>{EmailID}</div>
//                     </li>
//                 );
//                 })}
//             </ul>
//         </div>
//     );
// }
//export default DataFetchingComponent;

// const CountriesComponent=()=>{

//     const [countries, setCountries] = useState([]);

//     useEffect(()=>{

//         const fetchCountries=async()=>{
//             const response=await fetch('https://restcountries.com/v3.1/all');
//             const data=await response.json();
//             setCountries(data);
//         }
//         fetchCountries();

//     },[]);
    

//     return(
//         <div style={{textAlign:"justify"}}> 
//             <h5>Display List of Countries</h5>
//             <ol>
//                 {countries.map((country)=>{
//                     const {name}=country;
//                     return(
//                     <li>{country.name.common}</li>
//                     );
//                 })}

//             </ol>
//         </div>
//     );


// }
//export default CountriesComponent;

//useEffect Example

const StudentDataFetchingComponent=()=>{

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
            <h5>Fetch Students Data using useEffect....</h5>
            
            <table className="table table-stripped table-hover border" >
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
                      {students.slice(2,10).map((eachstudent, index)=> (
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
export default StudentDataFetchingComponent;
