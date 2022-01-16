import './../styles/About.css'


const About = () => {

  

    return (
      <div class= "grid">
        
      
        <h1 className= 'Headline'> About DDR         </h1>   

       <div className= "pageContainer">

       
         
               
           

        <div className= 'flexRow'>
          
         

        <img src={require("../images/accenture_logo.jpg").default}  className='img1'/>
          <img src={require("../images/bain_logo.jpg").default}  className='img2'/>
          <img src={require("../images/aws_logo.jpg").default}  className='img3'/>
          <img src={require("../images/booz_logo.jpg").default}  className='img4'/>
          <img src={require("../images/GLG_logo.jpg").default}  className='img5'/>
          <img src={require("../images/Mckinsey_logo.jpg").default}  className='img6'/>


      

         

            
          <p>
            DDR (Decentralized Data and Research) is an exchange where professionals and organizations can find each other and pay for high-quality, customized, strategic, legally-gathered information directly, skipping the middleman, that is, the expensive research and consulting firm. 


          </p>
          <p>
          There are a number of people out there who have the skills and experiences to be paid consultants and researchers. Sometimes, it's just being in the right place at the right time. However, these precious assets really don't have a good platform to market their services. 
          </p>

          <p>
            DDR is therefore looking to capitalize on this market opportunity. The goal is to take power away from the prestigious research and consulting firms, who have fallen into groupthink in recent years, and put it back into the hands of the individual consultant and researcher. 


          </p>

      </div>

      </div>      
            </div>
    )
}

export default About