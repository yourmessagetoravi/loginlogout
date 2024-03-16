import React from 'react';









function EmployeeBootstrapCardComponent(props) {

    const {employee1}=props;
 
 return(
    <div className='col-md-4'>
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>{employee1.firstName} {employee1.lastName}</h5>
                <p className='card-text'>Job: {employee1.job}</p>
                <p className='card-text'>salary: {employee1.salary}</p>
            </div>

        </div>
    </div>
);
}

const EmployeeListComponent=()=>{
    const employee = [
        { firstName: "George", lastName: "Smith", job: "writer", salary: 50000 },
        { firstName: "Michael", lastName: "Handler", job: "DJ", salary: 150000 },
        { firstName: "Larry", lastName: "David", job: "writer", salary: 250000 },
        { firstName: "Mindy", lastName: "Smith", job: "cook", salary: 120000 }
      ];
return(
    <div className='container-fluid'>
        <div className='row'>
            {employee.map((employee, index)=>(
                <EmployeeBootstrapCardComponent key={index} employee1={employee}/>
            ))}
        </div>
    </div>
);
}
export default EmployeeListComponent;