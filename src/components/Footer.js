import React from 'react'
import './../styles/footer.css';

const Footer = () => {
    return (
        <footer>

    <div id = "DDRlogo">
    
    <img src={require("../images/N3logo.jpg").default} className="N3logo"/>
   
    </div>
           

            <div id="secured">
    <p> Secured by escrow </p>
    </div>

    

        </footer>
    )
}

export default Footer


