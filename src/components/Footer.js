import React from 'react'
import './../styles/footer.css';

const Footer = () => {
    return (
        <footer>

    <div id = "N3logo" onClick={() => window.location.href = 'https://www.neo.org'}>
    
    <a href='https://www.neo.org' target="_blank">
    <img src={require("../images/N3logo.jpg").default} className="N3logo" />
    </a>
    </div>
           

            <div id="secured">
     Secured by escrow with Nekohit
     <img src={require("../images/cat-dark.png").default} className="Neko"/>

    </div>

    

        </footer>
    )
}

export default Footer


