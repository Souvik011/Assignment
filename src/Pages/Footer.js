import React from 'react';
import Youtube from '../Images/youtube.jpg';
import Spotify from '../Images/spotify.jpg';
import Facebook from '../Images/facebook.jpg';

const Footer = () => {

    return (<>
     <div style={{display:"inline",textAlign:"center",background:"brown",height:"7vh",width:"98vw"}}>
        
        <p style={{backgroundColor:"black",color:"blueviolet",height:"8vh",width:"98vw"}}>Assignment for the Durums<span >
            <a href="https://www.youtube.com/@Dirums?feature=shared" style={{marginLeft:"3vw"}}>
              <img src={Youtube} alt="youtube" width="22vh" height="25vw" />
            </a>
            <a href="https://open.spotify.com/" style={{marginLeft:"3vw"}}>
              {" "}
              <img src={Spotify} alt="youtube" width="22vh" height="25vw" />
            </a>
            <a href="https://www.facebook.com/Dirums" style={{marginLeft:"3vw"}}>
              <img src={Facebook} alt="youtube" width="22vh" height="25vw" />
            </a>{" "}
          </span></p>
        
     </div>
    </>)
};

export default Footer;