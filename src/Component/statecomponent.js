import React from "react";

class ToggleButtonComponent extends React.Component{
    constructor(){
        super()
        this.state = { display: false }
        console.log('Component this', this);  
        this.toggleDisplay = this.toggleDisplay.bind(this);  
      }  

      toggleDisplay(){
        this.setState({ toggleDisplay:!this.state.toggleDisplay   });
      }
      render(){
        return(
            <div>
                  <h1 className='text-primary'>Example to Display Toggle Button content using states....</h1>
                    {
                           this.state.toggleDisplay?( <div>
                                    <h3>The content is dispalyed based on toggle button...</h3>
                                    <h3 className='text-danger'>Hello World!!!!</h3>
                                    <button onClick={()=>this.toggleDisplay()}>Hide</button>
                               </div>
                           ):(  <div>
                                   
                                    <button onClick={()=>{this.toggleDisplay()}}>Show more</button>
                                </div>      
                              )
                    }  
            </div>
        
            ) 
   }
 } 
        
 export default ToggleButtonComponent;
