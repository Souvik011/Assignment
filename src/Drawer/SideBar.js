import React, { useState } from 'react';
import {
    FaBars,
    FaTasks,
    FaPlus
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import '../App.css';
import { Container,Row,Col } from 'react-bootstrap';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:`Create`,
            icon:<FaPlus/>
        },
        {
            path:"/items",
            name:"Tasks",
            icon:<FaTasks/>
        },
    ]
    return (
        
            <Container fluid>
            <Row >
                <Col xs={2}>
           <div style={{width: isOpen ? "16vw" : "4vw"}} className="sidebar">
               <div className="top_section">
                   {isOpen && (<span style={{ fontSize:"4vh"}} className="logo">Dirums</span>)}
                   <div style={{marginLeft: isOpen ? "2vw" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           </Col>
           <Col style={{height:"75vh",overflow:"scroll"}}>
           <main >{children}</main>
           </Col>
           </Row>
           </Container>
        
    );
};

export default Sidebar;