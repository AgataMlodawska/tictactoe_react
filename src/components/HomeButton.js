import React from "react";
import Button from "react-bootstrap/esm/Button";
import {Link} from "react-router-dom"
import './HomeButton.css'
const HomeButton = () =>{
    return <div >
        <Button className="HomeButton">
        <Link to="/" className='Link'>Home</Link>
        </Button>  
        </div>
}
export default HomeButton