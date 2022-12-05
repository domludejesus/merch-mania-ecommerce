import { Facebook, Instagram, MailOutline, Phone, Pinterest, Twitter, Room } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive"; 

const Container = styled.div`
    display: flex; 
    ${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
    flex: 1;
    display: flex; 
    flex-direction: column;
    padding: 20px;   
`
const Logo = styled.h1`
`
const Desc = styled.p`
    margin: 20px 0px; 
`
const SocialContainer = styled.div`
    display: flex; 
`
const SocialIcon = styled.div`
    width: 40px; 
    height: 40px; 
    border-radius: 50%; 
    color: white; 
    background-color: #${props=>props.color}; 
    display: flex;
    align-items: center;
    justify-content: center; 
    margin-right: 20px; 
`

const Center = styled.div`
    flex: 1; 
    padding: 20px; 
    ${mobile({ display: "none" })}
`
const Title= styled.h3`
    margin-bottom: 30px; 
`

const List = styled.ul`
    margin: 0; 
    padding: 0; 
    list-style: none; 
    display: flex; 
    flex-wrap: wrap;  
`
const ListItem = styled.li`
    width: 50%; 
    margin-bottom: 10px; 
`


const Right = styled.div`
    flex: 1;
    padding: 20px;  
`

const ContactItem = styled.div`
    margin-bottom: 20px; 
    display: flex; 
    align-items: center; 

`

const Payment = styled.img`
    height: 150px; 
    width: 150px;  


`

const Footer = () => {
  return (
    <Container> 
        <Left>
            <Logo> MerchMania</Logo>
            <Desc> 
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam corrupti quibusdam quas 
                pariatur sequi tempora nam culpa. Neque error velit libero sequi? Nesciunt officia repudiandae 
                ea exercitationem quaerat alias reiciendis.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                  <SocialIcon color="55ACEE">
                      <Instagram />
                  </SocialIcon>
                  <SocialIcon color="E60023">
                      <Twitter />
                  </SocialIcon>
                  <SocialIcon color="3B5999">
                      <Pinterest />
                  </SocialIcon>
            </SocialContainer>
          </Left>
          <Center> 
                <Title> Useful Links</Title>
                <List> 
                  <ListItem> Home </ListItem>
                  <ListItem> Cart </ListItem>
                  <ListItem> Mens Fashion </ListItem>
                  <ListItem> Women Fashion </ListItem>
                  <ListItem> Accessories </ListItem>
                  <ListItem> My Account </ListItem>
                  <ListItem> Order Tracking  </ListItem>
                  <ListItem> Wishlist  </ListItem>
                  <ListItem> Terms  </ListItem>
                </List>
          </Center>
          <Right>
            <Title> Contact </Title>
            <ContactItem> 
                <Room style={{marginRight: "10px"}}/> North East, US 
            </ContactItem>
            <ContactItem> 
                <Phone style={{ marginRight: "10px" }} /> (555)555-5555
            </ContactItem>
            <ContactItem> 
                <MailOutline style={{ marginRight: "10px" }} /> domludejesus@gmail.com 
            </ContactItem> 
            <Payment src="https://upload.wikimedia.org/wikipedia/commons/4/46/Font_Awesome_5_brands_stripe.svg" />
            
          </Right>
        </Container>
  )
}

export default Footer