import './../styles/About.css'



const About = () => {

  

    return (
      <div>
        <main>
        
      

       <div id= "mainContainer">

       <div class = 'pageContainer'>
       <h2 className= 'Headline'> About DDR         </h2>   
         
               
           

       
          
         
      <div className='images'>
        <img src={require("../images/accenture_logo.jpg").default}  className='img1'/>
          <img src={require("../images/bain_logo.jpg").default}  className='img2'/>
          <img src={require("../images/aws_logo.jpg").default}  className='img3'/>
          <img src={require("../images/booz_logo.jpg").default}  className='img4'/>
          <img src={require("../images/GLG_logo.jpg").default}  className='img5'/>
          <img src={require("../images/Mckinsey_logo.jpg").default}  className='img6'/>
          </div>

      

         <br>
         </br>

            
          <p1>
            DDR (Decentralized Data and Research) is an exchange where professionals and organizations can find each other and pay for high-quality, customized, strategic, legally-gathered information directly, skipping the middleman, that is, the expensive research and consulting firm. 


          </p1>
          <p1>
          There are a number of people out there who have the skills and experiences to be paid consultants and researchers. Sometimes, it's just being in the right place at the right time. However, these precious assets really don't have a good platform to market their services. 
          </p1>

          <p1>
            DDR is therefore looking to capitalize on this market opportunity. The goal is to take power away from the prestigious research and consulting firms, who have fallen into groupthink in recent years, and put it back into the hands of the individual consultant and researcher. 


          </p1>

      </div>
      </div>
          
      </main>
            </div>
    )
}

export default About