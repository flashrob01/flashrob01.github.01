
import '../styles/Home.css';
/* import Testing from './Testing';
 */import styled from '@emotion/styled';
import LIProfile from '../images/LIProfile.jpg';
import LIProfile2 from '../images/LIProfile2.jpg';

import Carousel from 'react-bootstrap/Carousel';
import {useState} from 'react';
import {NavLink} from 'react-router-dom'


const breakpoints = [480, 768, 992, 1200];
export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
//From the Odyssey lift-off-pt3 doc


const Home = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    return (
     
        <div className="wrapper">
 
               <div id="banner">
        <h1>
            Welcome to Decentralized Data, Research,  <br />
            and Consulting Store
        </h1>    
        
                </div>


        <div id="winner">
            </div>

           

            
            <h3 div id="h3">
                Featured Consultants    

                </h3>
             


                
               
                <div id="featuredId" href={"/Sell"}>
                  
                <Carousel activeIndex={index} onSelect={handleSelect} interval={4000} fade>
      <Carousel.Item>
               
      <CardContainer>
  <CardContent>
    <CardImageContainer>
      <CardImage src={LIProfile2} />
    </CardImageContainer>
    <CardBody>
      <CardTitle>Zachary Blake Kim </CardTitle>
      <DetailRow>
     <h6 class="h6"> Qualifications:</h6> 12 years+ of college counseling experience, over 8 million RMB ($1,250,000 million) in successful scholarship grants, more than 2,000 total acceptance letters to all Top-100 schools in the USA and Top-20 schools in Canada. 超过 12 年的大学咨询经验，超过 800 万元人民币（125万美元）的奖学金，超过 2,000 封美国前 100 名学校和加拿大前 20 名学校的录取通知书。<br></br>

     </DetailRow>
     <DetailRow>
     <h6 class="h6">Offer Details:</h6>  College selection, college essay inquiry, college application guidance. 大学选择、大学论文查询、大学申请指导。
 <br></br>
     </DetailRow>
     <DetailRow>
      <IconAndLabel>
        
      <h6 class="h6"> Location:</h6>  consulting- live discussion

      </IconAndLabel>
 
      </DetailRow>
      <DetailRow>
      <IconAndLabel>
        <h6 class="h6"> Price:</h6>  TBD
        </IconAndLabel>   
        </DetailRow>
        
        <CardFooter>
        <div id='BuyButton2'>
                      <NavLink to="/Sell">
              <button
                color='pink'
                size="large"
              >
                Click to view
              </button>
            </NavLink>
             </div>
          
          
        
       
      </CardFooter>
     
    </CardBody>
  </CardContent>
</CardContainer>

      </Carousel.Item>
      <Carousel.Item>
      <CardContainer>
  <CardContent>
    <CardImageContainer>
      <CardImage src={LIProfile} />
    </CardImageContainer>
    <CardBody>
      <CardTitle>Robert LIOU</CardTitle>
      <DetailRow>
     <h6 class="h6"> Qualifications:</h6> Former CFO of Shengli Oilfield (IT division of Sinopec), 4 years consulting with IHS Energy/ S&P Global
     </DetailRow>
     <DetailRow>
     <h6 class="h6">Offer Details:</h6>  1 hr consultation on the state of the hydraulic fracturing and drilling market for onshore China <br></br>
     </DetailRow>
     <DetailRow>
      <IconAndLabel>
        
      <h6 class="h6"> Location:</h6>  Videochat from Beijing
      </IconAndLabel>
 
      </DetailRow>
      <DetailRow>
      <IconAndLabel>
        <h6 class="h6"> Price:</h6>  $150/hr.
        </IconAndLabel>   
        </DetailRow>
        
        <CardFooter>
        <div id='BuyButton2'>
                      <NavLink to="/Sell">
              <button
                color='pink'
                size="large"
              >
                Click to view
              </button>
            </NavLink>
             </div>
          
          
        
       
      </CardFooter>
     
    </CardBody>
  </CardContent>
</CardContainer>
      </Carousel.Item>
     
    </Carousel> 
               
                   
                </div>
                


              <div id='headline2'>
        <h1>
          What is DDRC?            
        </h1>    
        
        </div>  
              
              <div id='About'>
                
             <p>   DDR (Decentralized Data and Research) is an exchange where professionals and organizations can find each other and pay for high-quality, customized, strategic, legally-gathered information directly, skipping the middleman, that is, the expensive research and consulting firm.
              </p>
              <p> Identities are verified through LinkedIn, thus giving both buyers and sellers confidence regarding who they are contracting with on the other side.</p>
              <p> Payments are done through a customized escrow system utilizing the NEO blockchain, thus reducing the need for an expensive intermediary and passing the cost savings on directly to buyers and sellers.</p>                
                </div>    

                <div id="consulting1">
           <div id='BuyButton'>
                      <NavLink to="/CreateBuy">
              <button
                color='pink'
                size="large"
              >
               I am looking for specific market intelligence, data, or consulting services
              </button>
            </NavLink>
             </div>
            </div>

            <div id="consulting2">
             <div id='SellButton'>
             <NavLink to="/CreateSell">
              <button
                color='pink'
                size="large"
              >
                I would like to offer my knowledge, data, or consulting services
              </button>
            </NavLink>
             </div>
              </div>
   
   
        
    </div>    
    )
}

export default Home;

const CardContainer = styled.div({
    borderRadius: 6,
    backgroundSize: 'cover',
    backgroundColor: 'white',
    boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.15)',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [mq[0]]: {
      width: '90%',
    },
    [mq[1]]: {
      width: '47%',
    },
    [mq[2]]: {
      width: '42%',
    },
/*     height: 750,
 */    margin: 10,
    overflow: 'hidden',
    position: 'relative',
    
    cursor: 'pointer',
    textDecoration: 'none',
  });
  
  const CardContent = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100%',
  });
  
  const CardTitle = styled.h3({
    textAlign: 'center',
    fontSize: '1.4em',
    lineHeight: '1em',
    fontWeight: 700,
    flex: 1,
  });
  
  const CardImageContainer = styled.div({
    height: 400,
    position: 'relative',
    '::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      background: 'rgba(250,0,150,0.20)',
    },
  });
  
  const CardImage = styled.img({
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    filter: 'grayscale(60%)',
  });
  
  const CardBody = styled.div({
    padding: 18,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  });
  
  const CardFooter = styled.div({
    display: 'flex',
    flexDirection: 'Row',
  });
  
  const AuthorImage = styled.img({
    height: 30,
    width: 30,
    marginRight: 8,
    borderRadius: '50%',
    objectFit: 'cover',
  });
  
  const AuthorAndTrack = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  });
  
  const AuthorName = styled.div({
    lineHeight: '1em',
    fontSize: '1.1em',
  });
  
  const TrackLength = styled.div({
    fontSize: '0.8em',
  });
  
  const IconAndLabel = styled.div({
    display: 'block',
    flex: 'row',
    alignItems: 'center',
    maxHeight: 80,
    width: '100%',
    div: {
      marginLeft: 8,
    },
    svg: {
      maxHeight: 16,
    },
    '#viewCount': {
      color: 'pink',
    },
  });

  const DetailRow = styled.div({
    display: 'block',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 20,
    marginBottom: 20,
    borderBottom: 'solid 1px silver',
  });
  
  const DetailItem = styled.div({
    display: 'block',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'grey',
    alignSelf: 'center',
  });
  