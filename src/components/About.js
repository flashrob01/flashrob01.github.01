import './../styles/About.css'
import Accordion from 'react-bootstrap/Accordion';
import {NavLink} from 'react-router-dom';

//!! Above from: https://www.apollographql.com/docs/react/get-started/




const About = () => {
 
  let linky = ('https://www.nekohit.com');


     return (
      <div>
        <main>
        
      

       <div id= "mainContainer">

       <div className = 'pageContainerAbout'>
       <h1 className= 'Headline'> About DDR         </h1>   
   
       
         
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

         <div id="description"   >
          <p>
            DDR (Decentralized Data and Research) is an exchange where professionals and organizations can find each other and pay for high-quality, 
            customized, strategic, legally-gathered information directly. 


          </p>
          <p>
          There are a number of talented people out there who have the skills and experiences to be paid consultants and researchers, but are unable to monetize their assets. 
          </p>

          <p>
            DDR is therefore looking to capitalize on this market opportunity. The goal is to take power away from the prestigious research and consulting firms, who have fallen into groupthink in recent years, and put it back into the hands of the individual consultant and researcher. 


          </p>
          </div>

          <div id= "accordionContainer">
          <div id='accordion'>
          <Accordion flush="true">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Why did you decide to start DDR?  </Accordion.Header>
    <Accordion.Body>
    In recent years, much of management consulting and research has gone from being truly independent, expert intelligence to ‘pre-paid talking points and narratives.’ Such narratives are oftentimes driven by political and bureaucratic considerations, rather than the pursuit of truth or even useful market intelligence.  DDR seeks to restore intelligence gathering, data, and research to its roots by decentralizing the process using the blockchain.    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>What makes a good consultant?</Accordion.Header>
    <Accordion.Body>
    <p> Generally speaking, the top-tier consulting firms tend to look for young, quick- thinking people who can speak well while delivering well- articulated talking points. Those interviewing with consulting firms spend hundreds of hours going through case books and mock interviews on how to prepare for a consulting interview. Therefore, they tend to be quite polished. </p>
<p> However, being a polished, quick-thinking, and capable speaker is not the only thing a buyer of information is looking for. At DDR, we believe that many people possess some sort of special knowledge about a certain industry or sector. For example, an expat living in a certain country or working in a certain industry may, over several years, develop a very deep intelligence about a certain market. A retired industry salesperson may have deep knowledge of the markets that he used to sell into which would be useful to the strategy and planning department of a company looking to enter that market. </p>
<p> A vendor at a trade show could possibly give useful business insights to those who did not attend the conference. Even someone closely monitoring a situation in a hard-to-access area (say a citizen in a war-torn country) could give insights to journalists or business people who don’t have on-the-ground access to those regions. </p>
<p> All of these people have the potential ingredients to be good management consultants. Using the DDR platform, they can monetize their experience and time into actionable market intelligence. </p>
<p> We believe the market for untapped market intelligence is vast, and that our solution is optimal for realizing it. </p>


    </Accordion.Body>
  </Accordion.Item>
 {/*  <Accordion.Item eventKey="2">
    <Accordion.Header>How does DDRC work? </Accordion.Header>
    <Accordion.Body>
    Consultant lists his/ her specific deliverable on the site. 

    </Accordion.Body>
  </Accordion.Item> */}
  <Accordion.Item eventKey="3">
    <Accordion.Header>Who would be ideal consumers of DDR?</Accordion.Header>
    <Accordion.Body>
    <p> Those looking for specific datapoints may consider generating a request for the specific data, intelligence, or consulting services they are looking for <NavLink id="linky" to={`/CreateBuy`}>here.</NavLink> These consumers can range from investment banks, to current or prospective industry participants, to private equity firms, to journalists/ reporters, to researchers, to private investors. </p>
<p> Those who believe they have specific market intelligence, data, or consulting knowledge or talent can list their offerings <NavLink id="linky" to={`/CreateSell`}> here.</NavLink> Such talent can run the gamut from retired industry personnel, to someone transitioning fields, to former consultants, to someone who has simply been in an area or industry long enough to gather insights that many people would not be aware of. Many people can monetize their access to information, but just haven’t had the platform to realize it! </p>


    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header>Why trust DDR?</Accordion.Header>
    <Accordion.Body>
    <p> All participants who use DDR are required to first identify and authenticate through LinkedIn. </p>
<p> A messaging feature has been developed to allow potential buyers/sellers to engage in a pre-interview so that each side is fully aware of what they are paying for and they are expecting to get or deliver in return. A reviews system has been enabled which will allow users to build up their reputation via repeat transactions. </p>
<p> The payment process is done through an escrow process using another member of the NEO community, Nekohit. Sellers can stake a percentage of funds to give comfort to the buyer that they have skin in the game as well. If the buyer is not satisfied, in addition to obtaining a refund, he or she may be able to access a portion of what the seller staked. </p>

    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="5">
    <Accordion.Header>What are some best practices that should be exercised prior to initiating a transaction?</Accordion.Header>
    <Accordion.Body>
    <p> As DDR is not responsible to enforce the quality or terms of the transaction, it is important that buyers and sellers confirm these terms with each other before entering into the transaction. Using the messaging feature to communicate extensively with the other party beforehand is very important. 
      Ensuring that parties know what their expectations are, and how they match with what the counterparty is offering is crucial. Having detailed delivery points, as well as a specific list of questions is key. </p>
<p> So that you can get a good feel for what they can deliver, considering sending interview questions to the other party beforehand. </p>
<p> Rather than direct payments, we highly recommend using a service like Nekohit to execute the transaction in an escrow format. When using Nekohit, be sure to set up a project with TWO milestones; the first one which is a test transaction between yourself and the other party. The second milestone should be the actual deliverable itself, whether it is a phone call, dataset, consulting project, etc. Only after both parties are satisfied that the first milestone has been satisfactorily completed should they continue onto the second or subsequent milestones. Note that we are in the process of integrating the escrow functionality into DDR. More information on using Nekohit is below.</p>




    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="6">
    <Accordion.Header>What are some good pre-interview questions to ask?</Accordion.Header>
    <Accordion.Body>
    <p>
-	Tell me more about your specific background/experience and how it applies to the area I’m looking to research? (i.e. references or links to any other work you’ve done (speeches, articles, etc.) </p>
<p>- Give me your thoughts on ... (current market topic)
   </p>
<p>
-	What are the specific deliverables/ talking points for each milestone we can expect to be delivered for each price point? </p>



    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="7">
    <Accordion.Header>What is the Nekohit system, and how can I use it for my escrow transaction?</Accordion.Header>
    <Accordion.Body>
    <p>
    Nekohit, like DDR, was one of the winners of the Frontier Launchpad hackathon in the summer of 2021. 
    Its premise is to create the first and fully decentralized
crowdfunding platform for content creators on the blockchain. 
Like DDR, it uses NEP (NEO)- based tokens as the currency of exchange. 
We believe the escrow system is the most effective that we’ve seen thus far for decentralized transactions.
How it can work alongside DDR is as follows: 
</p> <p>
  After the buyer and seller finds their match on DDR, they begin the process of building trust. 
  First, the buyer and the seller use the DDR messaging platform to establish contact, 
  as well as to discuss specific goals and objectives to be reached, and terms of payment. 
  After these have been agreed upon,  the seller (consultant) uses the Nekohit site to create a new project. 
  </p> <p>
    The new project should include at least TWO milestones. The first milestone should be a ‘test’ run,
     such as a preliminary video call or a sample data sheet/ report. 
     Sort of like a handshake, this is essentially the ‘introductory’ portion of the deal to make sure parties have established a certain level of trust. 
     If the sponsor is satisfied, then the seller should select the milestone as complete.
      A brief cooldown period will ensue, during which time the buyer can decide if they are satisfied and would like to continue or to cancel the transaction. 
      They have the option of cancelling in order to obtain a refund for the rest 
      of his deposit, or motioning to the seller to fulfill their project commitments. 
      In addition, to give the buyer assurance that they are not fraudulent, the seller also has the option to put up a 
      percentage of the selling price as security for the project. 
      If the project expires and milestones are not marked as complete,
       then the buyer is eligible to assume a percentage of this deposit. 
</p>
<p>
For more details on how Nekohit works, see <a href={linky} target="_blank"> here </a>.
</p>



    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="8">
    <Accordion.Header>What happens if there is a dispute between a buyer and seller?</Accordion.Header>
    <Accordion.Body>
    In the case of a dispute, the buyer has the option to initiate a refund if milestones are not yet marked as complete. If they are eligible, then the smart contract will automatically issue the refund. 
If the seller has already marked the milestones as completed, and there are continued disputes afterward, the parties should continue to use the messaging function, and have the option of leaving a review for the counterparty.




    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="9">
    <Accordion.Header>Does DDR plan to develop its own escrow system so that buyers and sellers will not have to also register with Nekohit??</Accordion.Header>
    <Accordion.Body>
    Yes, DDR plans to integrate its own escrow functionality (still based off of Nekohit's smart contract) in Q2 2022.




    </Accordion.Body>
  </Accordion.Item>
 
</Accordion>
      </div>
      </div>
   

      </div>
      </div>
          
      </main>
            </div>
    )
};

export default About;

//                   <button onClick={getAccessToken} id="getAccessToken"> Click to get Access Token </button>   
// 
//<button onClick={getBuyOffers} id="getBuyOffers"> Click to get Buy Offers </button>    

