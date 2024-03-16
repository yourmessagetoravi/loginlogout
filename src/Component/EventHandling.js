import React, { useState } from "react";


// Exampe-1 - Normal Function 
const EventExample1=()=>{
        function handleClick1() {
          console.log('Using functions Button clicked!');
        }
          return (
            <div>
                <button onClick={handleClick1}>Function Click </button>
            </div>
          );
}

// Example-2 - Arrow Function 
  const EventExample2=()=>{
    const handleClick2=()=> {
        console.log('Using Arrow functions Button clicked');
    }
      return (
        <div>
              <button onClick={handleClick2}>Arrow Function</button>
          </div>
      );
}

  
    // Example-3 - Parameter to Function 
    const EventExample3=()=>{
      const handleClick3=(param)=>{
        console.log('Parameter passing to function Button clicked:', param);
      }
      return (
        <div>
            <button onClick={()=>handleClick3('Hello, Parameter1')}>Parameter Function</button>
            <button onClick={()=>handleClick3('Hello, Parameter2')}>Parameter Function</button>
        </div>
      );
  }


  //  Example-4 - onClick, onChange, onSubmit
  const EventExample4=()=>{
    const handleClick=(e)=>{
      e.preventDefault();
      console.log('Button clicked!');
    }
    const handleChange=(e)=>{
      console.log('Input value:', e.target.value);
    }
   const handleSubmit=(e)=>{
      e.preventDefault();
      console.log('Form submitted!');
    }

    return(
      <div>
      {/* Handling click event */}
      <button onClick={handleClick}>Click me</button>

      {/* Handling change event */}
      <input type="text" onChange={handleChange} />

      {/* Handling form submission */}
      <form onSubmit={handleSubmit}>
        <input type="submit" value="Submit" />
      </form>
    </div>
      
    );
  }

  //Example-5: Event Handler - onChange & onClick
  const EventHandler1=()=>{

    const [input, setinput] = useState('');
   
    const ChangeText=(event)=>{
      setinput(event.target.value);
    }

    const ClickHandle=()=>{
      console.log("Entered Value:", input);
      
    }
    return(
      <div>
        <h5>Display Name Based on input through onChange Event...</h5>
        <label>Enter Name:</label>
        <input type="text" id="name" value={input} placeholder="Enter Name" onChange={ChangeText} />
        <br/>
        <button onClick={ClickHandle}>Submit</button>
        <p>You Entered: <b className="text-danger">{input}</b></p>
      </div>
    );
  }

  
const DropDownEventHandlerDemo=()=>{

  const subject=["subject1", "subject2", "subject3"]
  const country=["India", "US", "UK", "Canada"]
  const [selectoption, setselectoption] = useState('');
  const [subjects, setsubjects]=useState(subject);

  const SelectHandleChange=(event)=>{
    setselectoption(event.target.value);
  }
  const SubjectSelectHandle=(event)=>{
    setsubjects(event.target.value);
  }
  
  return(
    <div className="container-fluid">
      <div>
      <lable>Select Country:</lable>
      <select value={selectoption} onChange={SelectHandleChange}>
      <option value="">select Option</option>
          {country.map((item)=>(
              <option value={item}>{item}</option>

        ))}
      </select>
      <br/>
      <p>You have Selected Option: <b className="text-danger">{selectoption}</b></p>
      </div>
      <hr/>
      <div>
      <lable>Select Subject:</lable>
      <select value={subjects} onChange={SubjectSelectHandle}>
      <option value="">select Option</option>
          {subject.map((item1)=>(
             <option value={item1}>{item1}</option>
        ))}
      </select>
      <br/>
      <p>You have Selected Option: <b className="text-danger">{subjects}</b></p>
      </div>
    </div>
  );
}

const CheckboxEventHandlerDemo=()=>{

  const [isChecked, setisChecked] = useState(false) 
  //const [checksub, setchecksub]=useState([]);

  const HandleCheckboxChange=(event)=>{
    setisChecked(event.target.checked)
  }
   
//   const HandleCheckboxSubjects=(event)=>{
//     setchecksub(event.target.value);
//   }

  return(
    <div className="container-fluid">
      
      <div>
      <label>
        <input type="checkbox" value={isChecked} onChange={HandleCheckboxChange}/>Checkbox   
      </label>
      <p>checkbox is: {isChecked? 'checked': 'unchecked'}</p>
      </div>
            {/* <div>
            <label>
                <input type="checkbox" value={checksub} onChange={HandleCheckboxSubjects}/>subject1  
            </label>
            <label>
                <input type="checkbox" value={checksub} onChange={HandleCheckboxSubjects}/>subject2  
            </label>
            
            <p>Selected Subjects are: 
                {checksub? (checksub): 'unchecked'}</p>

            </div>
            */}
      
    </div>
  );
}

const RadioButttonEventHandlerDemo=()=>{
    const [selectedoption, setselectedoption] = useState('Male');
  const GenderRadioHandle=(event)=>{
    setselectedoption(event.target.value)
  }
  return(
    <div className="container-fluid">

       
      <label>
        Gender:
      </label>
            <input type="radio" value="Male" name="Male" checked={setselectedoption=="Male"} onChange={GenderRadioHandle}/>Male
            <input type="radio" value="Female" name="Female" checked={setselectedoption=="Female"} onChange={GenderRadioHandle}/>Female

      <div>
        Selected Gender: <b className="text-danger">{selectedoption}</b>      </div>
       </div>
  );
}


const SampleEventExample=()=>{

  const [inputval, setinputval] = useState('');

  const EventHandler=(event)=>{
    console.log(event.target.value);
  }


  const ClickEventHandler=(event)=>{
    setinputval(event.target.value);
    console.log("Entered Value",inputval);
  }
  return(
    <div>
      <input type="text" value={inputval}  onChange={EventHandler} />
      <button onClick={EventHandler}>Click</button>
    </div>
  );
}



  const EventHandlingComponent=()=>{

    return(
      <div>
         {/* <h5>Example-1: Event Handling through Normal Function </h5>
        <EventExample1/>
        <hr/>
        <h5>Example-2: Event Handling through Arrow Function</h5>
        <EventExample2/>
        <hr/>
        <h5>Example-3: Event Handling through Parameter passing to Function</h5>
        <EventExample3/>
        <hr/>
        <h5>Example-4: Event Handling through onClick, onChange, onSubmit...</h5>
        <EventExample4/>
        <hr/> 
        <h5>Example-5: Event Hanxample-dler - onChange & onClick</h5>
        <EventHandler1/>
        <hr/>
        <h5>Example-6: Event Handler - DropDownEventHandlerDemo</h5>
        <DropDownEventHandlerDemo/>
        <hr/>
        <h5>Example-7: Event Handler - CheckboxEventHandlerDemo</h5>
        <CheckboxEventHandlerDemo/>      
        <hr/>
        <h5>Example-8: Event Handler - RadioEventHandlerDemo</h5>
        <RadioButttonEventHandlerDemo/>         */}

        <SampleEventExample/>

      </div>
    );
  }
  export default EventHandlingComponent
  