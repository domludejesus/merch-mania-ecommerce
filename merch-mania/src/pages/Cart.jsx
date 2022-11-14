import styled from "styled-components"
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';
import { Add, Remove } from "@material-ui/icons"


const Container = styled.div`

`
const Wrapper  = styled.div`
    padding: 20px; 
`
const Title  = styled.h1`
    font-weight: 300; 
    text-align: center; 
`
const Top = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
    padding: 20px; 
`
const TopButton = styled.button`
    padding: 10px; 
    font-weight: 600; 
    cursor: pointer; 
    border: ${(props) => props.type === "filled" && "none"}; 
    background-color: ${(props) =>
        props.type === "filled" ? "black" : "transparent"}; 
    color: ${(props) => props.type === "filled" && "white"}; 
`

const TopTexts = styled.div`

`
const TopText = styled.span`
    text-direction: underline; 
    cursor: pointer; 
    margin: 0px 10px; 
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;  
`
const Info = styled.div`
    flex: 3; 
`
const Product = styled.div`
    display: flex;
    justify-content: space-between; 
    padding: 20px;  
`
const ProductDetail = styled.div`
    flex: 2; 
    display: flex; 
`
const Image = styled.img`
    width: 200px; 
`
const Details = styled.div`
    padding: 10px;
    display: flex; 
    flex-direction: column; 
    justify-content: space-around;  
`
const ProductName = styled.span`

`
const ProductId = styled.span`

`
const ProductColor = styled.div`
    width: 20px; 
    height: 20px; 
    border-radius: 50%;
    background-color: ${props=>props.color}; 
`
const ProductSize = styled.span`

`
const PriceDetail = styled.span`
    flex: 1;
    display: flex; 
    align-items: center; 
    flex-direction: column; 
    justify-content: center; 
`
const ProductAmountContainer = styled.div`
    display: flex; 
    align-content: center; 
    justify-content: center;
    margin-bottom: 20px; 
`
const ProductAmount= styled.div`
    font-size: 24px; 
    margin: 5px; 
`
const ProductPrice = styled.div`
    font-size: 30px; 
    font-weight: 200; 
`

const Hr = styled.hr`
   background-color: #eee; 
   border: none; 
   height: 1px; 
`

const Summary = styled.div`
    flex: 1; 
    border: 0.5px solid lightgray; 
    border-radius: 10px; 
    padding: 20px;
    height: 50vh;  
`
const SummaryTitle = styled.h1`
    font-weight: 200; 

`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex; 
    justify-content: space-between; 
    font-weight: ${props=>props.type === "total" && "500"}; 
    font-size: ${props=>props.type === "total" && "24px"}; 
 
`
const SummaryItemText = styled.span`
    

`
const SummaryItemPrice = styled.span`
    

`
const Button = styled.button`
    width: 100%; 
    padding: 10px; 
    background-color: black; 
    color: white; 
    font-weight: 600;  
`



const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title> Your Bag </Title>
            <Top>
                <TopButton> CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2) </TopText> 
                    <TopText>Your Wishlist (0) </TopText>     
                </TopTexts> 
                <TopButton type="filled"> CHECKOUT NOW </TopButton>      
            </Top>
            <Bottom>
                <Info> 
                    <Product>
                        <ProductDetail> 
                              <Image src="https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" />  
                            <Details>
                                <ProductName> <b> Product:</b> POKEMON SHOES </ProductName> 
                                <ProductId> <b> ID:</b> 9876543210 </ProductId>
                                <ProductColor color="orange" />
                                <ProductSize> <b> Size: </b> 11  </ProductSize>
                            </Details> 
                        </ProductDetail>
                        <PriceDetail> 
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount> 2</ProductAmount>
                                <Remove />    
                            </ProductAmountContainer>
                            <ProductPrice> $200 </ProductPrice>    
                        </PriceDetail> 
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail> 
                              <Image src="https://images.unsplash.com/photo-1593726852644-36ad40fd4b66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" />  
                            <Details>
                                <ProductName> <b> Product:</b> Dragon Ball Z shirt </ProductName> 
                                <ProductId> <b> ID:</b> 9876543210 </ProductId>
                                <ProductColor color="black" />
                                <ProductSize> <b> Size: </b> M  </ProductSize>
                            </Details> 
                        </ProductDetail>
                        <PriceDetail> 
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount> 2</ProductAmount>
                                <Remove />    
                            </ProductAmountContainer>
                            <ProductPrice> $20 </ProductPrice>    
                        </PriceDetail> 
                    </Product>
                </Info>
                <Summary> 
                    <SummaryTitle> Order Summary </SummaryTitle>
                    <SummaryItem> 
                        <SummaryItemText> Subtotal </SummaryItemText>
                        <SummaryItemPrice>$ 220 </SummaryItemPrice>   
                    </SummaryItem>
                    <SummaryItem> 
                        <SummaryItemText> Estimated Shipping </SummaryItemText>
                        <SummaryItemPrice>$ 5.99 </SummaryItemPrice>   
                    </SummaryItem>
                    <SummaryItem> 
                        <SummaryItemText> Shipping Discount </SummaryItemText>
                        <SummaryItemPrice>$ -5.00 </SummaryItemPrice>   
                    </SummaryItem>
                    <SummaryItem type="total"> 
                        <SummaryItemText> Total </SummaryItemText>
                        <SummaryItemPrice>$ 220.99 </SummaryItemPrice>   
                    </SummaryItem> 
                    <Button> CHECKOUT NOW </Button> 
                </Summary>    
            </Bottom>
        </Wrapper> 
        <Footer />
    </Container>
  )
}

export default Cart