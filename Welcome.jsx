import React, {Component} from 'react'
import './style.css'



class Welcome extends Component{

    
     state = {

      age : ''
       
     }

  render(){

    return(

      <div>   

         <strong >Login Panel  </strong><br></br><br></br>

         <select onChange={(e) => {this.setState({age: e.target.value})}}>
              
              <option value='' selected disabled>Select your age</option>
              <option value='16-20'>16-20</option>
              <option value='21-25'>21-25</option>
              <option value='26-30'>26-30</option>
              <option value='31-35'>31-35</option>
              <option value='36-above'>36-above</option>

              
         </select>

         <h6>My age: {this.state.age}</h6>

             
      </div>
    )
  }

}

export default Welcome;

