import React from 'react';


function EmpArrayComponent() {
  const data = [
    { firstName: "George", lastName: "Smith", job: "writer", salary: 50000 },
    { firstName: "Michael", lastName: "Handler", job: "DJ", salary: 150000 },
    { firstName: "Larry", lastName: "David", job: "writer", salary: 250000 },
    { firstName: "Mindy", lastName: "Smith", job: "cook", salary: 120000 }
  ];
  return (
        <div style={{height:500, width:500, borderStyle: 'solid', marginLeft: 400, marginTop: 50}}>
          <h5 className='text-danger'>Display Student Details using Array map method in React....</h5>
            <table class="table table-stripped">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">First Name</th>
                  <th scope="col">LastName</th>
                  <th scope="col">Job</th>
                  <th scope="col">salary</th>
                </tr>
              </thead>
              {data.map((person, index) => (
              <tbody>
                <tr>
                  <th>{index + 1}</th>
                  <td>{person.firstName}</td>
                  <td>{person.lastName}</td>
                  <td>{person.job}</td>
                  <td>{person.salary}</td>
                </tr>
                </tbody>
                 ))}
            </table>
        </div>
     
  );
}


function DirectorsPage() {
  const directors = [
    { name: 'Director 1', movies: ['Movie 1', 'Movie 2', 'Movie 3'] },
    { name: 'Director 2', movies: ['Movie 4', 'Movie 5', 'Movie 6'] },
    // Add more directors if needed
  ];

  return (
    <div className='container-fluid' style={{height: 500, width:500}}>
      <div className='card'>
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <div key={index}>
          <h2>{director.name}</h2>
          <ol>
            {director.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ol>
        </div>
      ))}
      </div>
      <div style={{display:'flex',alignItems: 'center', top: 50}}> 
              <EmpArrayComponent/>
      </div>
    </div>
  );
}

export default DirectorsPage;


