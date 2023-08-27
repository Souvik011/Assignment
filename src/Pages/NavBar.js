import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Avatar from "../Images/avatar.jpg";

const NavBar = (props) => {
  return (
    <>
      <Container fluid>
        <Navbar
          expand="md"
          style={{
            height: "10vh",
            width: "98vw",
            color: "white",
            backgroundColor: "blue",
          }}
        >
          <div style={{ display: "inline-flex" }}>
            <h5
              style={{
                fontFamily: "sans-serif",
                color: "black",
                fontWeight: "700",
                margin: "3vh 0 3vh 35vw",
              }}
            >
              Durums Project
            </h5>{" "}
            <div style={{  }}>
              <img
                alt="Avatar"
                src={Avatar}
                style={{ borderRadius: "50%", height: "7vh", width: "5vw",marginTop:"2vh",marginLeft:"40vw" }}
              />
            </div>
          </div>
        </Navbar>
      </Container>
    </>
  );
};

export default NavBar;
