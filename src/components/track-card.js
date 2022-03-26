import styled from '@emotion/styled';
import { mq } from '../styles';
import {Link} from '@reach/router';
import { useQuery } from "@apollo/client";
import { gql} from '@apollo/client';


/**
 * Track Card component renders basic info in a card format
 * for each track populating the tracks grid homepage.
 */
const TrackCard = () => {

  const GET_BUY_OFFERS_QUERY = gql`
  query GetBuyOffers {
    buy_offers(where: {buy_offer_id: {_eq: "1"}}) {
      user_id
      price
      buy_offer_id
      industry
      offer_type
      headline
      offer_details
    }
  }
`;

const {loading, error, data } =  useQuery(GET_BUY_OFFERS_QUERY);

  if(loading) return 'Loading...';
 if(error) return `Error! ${error.message}`;    

 const values = Object.values(data);

 const filteredItems = values.filter((item) => {
  return (item.buy_offer_id === '1'); 
}
);
  

  return (
    <CardContainer
    to={`/track/${data.buy_offers[0].buy_offer_id}`}
    >
      <CardContent>
        <CardImageContainer>
          <CardImage src={data.buy_offers[0].price} alt={data.buy_offers[0].price} />
        </CardImageContainer>
        <CardBody>
          <CardTitle>{data.buy_offers[0].price || ''}</CardTitle>
          <CardFooter>
            <AuthorImage src={data.buy_offers[0].buy_offer_id} />
            <AuthorAndTrack>
              <AuthorName>{data.buy_offers[0].buy_offer_id}</AuthorName>
             
            </AuthorAndTrack>
          </CardFooter>
        </CardBody>
      </CardContent>
    </CardContainer>
  );
};

export default TrackCard;

/** Track Card styled components */
const CardContainer = styled(Link)({
  borderRadius: 6,
  color: 'black',
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
    width: '31%',
  },
  height: 380,
  margin: 10,
  overflow: 'hidden',
  position: 'relative',
  ':hover': {
    backgroundColor: 'pink.lightest',
  },
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
  color: 'black',
  flex: 1,
});

const CardImageContainer = styled.div({
  height: 220,
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
  color: 'grey',
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
