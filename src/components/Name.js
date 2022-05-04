import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import './Name.css'
const Name=() =>{

const [name, setName] = useState("");

return (

  <Form className="Form">
    <input className="Text"
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your name"
      aria-label="fullname"
    />
    <label className="Label">
    I'm not a robot
    <input className="Checkbox" type="checkbox" />
  </label>
  <input className="Submit" type="submit" value="Submit"></input>
  </Form>
  
          
);}
export default Name
