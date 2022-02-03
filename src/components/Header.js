
import './../styles/header.css';
import AuthNav from './auth-nav';

const Header = () => {
    
    return (
        <header>
        <div className="columnFlex">
      

        <div id = "DDRlogo">
    
    <img src={require("../images/ddrc-logo.png").default} className="App-logo"/>
   
    </div>
        </div>
        
    <AuthNav />
   
          </header>
    )
};

export default Header

//  <h1>DDRC</h1>
//<h2>Distributed Data, Research, and Consulting</h2>
