import React from "react";
import "./styles.css";
import logo from './channelseclogo.png';

function App() {
  return(
        <div id='body'>
            <Header/>
            <br></br>
            <Container/>
        </div>
    );
}
// creating my header component
const Header = () =>{
    return(
        <div className='header'>
            {/* logo created using https://logo-maker.freelogodesign.org/ */}
            <img src={logo} alt="Logo"></img>
        </div>
    );
}
// creating my container component, which has contains the information
const Container = () => {
    return(
        <div className='container bg-grey'>
            <span className="div-title">Coming Soon...</span>
            <div className='box'>
                <div id='sect1'>
                    <p>We are working on something <strong>new</strong> and <strong>exciting</strong> for 2024</p>
                </div>
                    
                <div id='sect2'>
                <h3>Join us at launch!</h3>
                <br></br>
                <p>Royal Lancaster, London</p>
                <p>Thursday 16th May, 2024</p>
                {/* hyperlink that takes you onto a new tab when clicked */}
                <a href="https://channel-sec.com/" target="_blank">
                    <button className="btn">Register</button>
                </a>
                </div>
            </div>
        </div>
    );

}

export default App;