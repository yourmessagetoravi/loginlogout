import React from "react";


const StudentInfoComponent=(props)=>{

    const {student}=props;

    return(
        <div style={{width:300, alignItems: "center"}}>

            <table className=" table table-striped table-bordered table-hover">
                    <tbody>
                        <tr> <td>RollNo.:</td> <td>{student.htno}</td> </tr>
                        <tr> <td>Name:</td>    <td>{student.name}</td>    </tr>
                        <tr> <td>Mobile:</td>  <td>{student.mobile}</td>  </tr>
                        <tr> <td>Email:</td>   <td>{student.email}</td>  </tr>
                    </tbody>
                </table>

        </div>
    );

}

const MyPropsComponent =(props)=>{

    const student ={

        htno:"2211CS010001",
        name:"ABC",
        mobile:"123456",
        email:"abc@gmail.com"
      }

    console.log(props);
    return(

        <div>

            {/* <h1>User Name: {props.name}</h1>
            <h1>Age: {props.age}</h1> */}
            
            <StudentInfoComponent student={student}/>


        </div>
    );
}
export default MyPropsComponent;











