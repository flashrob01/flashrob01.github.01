
import './../styles/Home.css'


const Home = () => {

    return (
        <div className= "pageContainer">
               <div id="banner">
        <h1>
            Welcome to Decentralized Data, Research,  <br />
            and Consulting Store
        </h1>
    </div>
        
    <figure id = "DDRlogo">
    </figure>
    <img src={require("../images/DDRLogo2.png").default} className="DDR_Logo"/>
    <img className = "consult4" alt="consulting-main" src={require("../images/Consulting1.jpg").default} />

    


   
    <div id="secured" />
    <p> Secured by escrow </p>
    </div>

         
            
    )
}

export default Home