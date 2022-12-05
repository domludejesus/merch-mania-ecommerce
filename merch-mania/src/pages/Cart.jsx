import styled from "styled-components"
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';
import { Add, Remove } from "@material-ui/icons"
import { mobile } from "../responsive"
import { useSelector } from "react-redux";
import StripeCheckout  from "react-stripe-checkout"
import { useState, useEffect } from "react";
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router"; 
import { Link } from "react-router-dom";


const KEY = "pk_test_51M8pjxAPGjBMLo14jL7BsV9qurPR4JdgAslFjxnctxjnFiRtmnTcBzd7Cd68iQaUTdHtw54guLzjoq6H7yWnI4sb00LJ0jpCEN"  //process.env.REACT_APP_STRIPE; not working with legacy version 

const Container = styled.div`

`
const Wrapper  = styled.div`
    padding: 20px; 
    ${mobile({ padding: "10px" })};
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
    ${mobile({ display: "none" })};
`
const TopText = styled.span`
    text-direction: underline; 
    cursor: pointer; 
    margin: 0px 10px; 
    color: #000000; 
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })};
`
const Info = styled.div`
    flex: 3; 
`
const Product = styled.div`
    display: flex;
    justify-content: space-between; 
    padding: 20px; 
    ${mobile({ flexDirection: "column" })};
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
    ${mobile({ width: "5px 15px" })};
`
const ProductPrice = styled.div`
    font-size: 30px; 
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}; 
`

// const Hr = styled.hr`
//    background-color: #eee; 
//    border: none; 
//    height: 1px; 
// `

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
    const cart = useSelector(state=>state.cart); 
    const [stripeToken, setStripeToken] = useState(null); 
    const navigate = useNavigate(); 

    const onToken = (token)=> {
        setStripeToken(token)
    }
   // console.log(stripeToken) verify token information 

    useEffect(()=> {
      const makeRequest = async ()=> {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id, 
          amount: 400 // cart.total * 100,  // after this res go to order page    
        }); 
        navigate.push("/success", { data: res.data })
      }catch {}  
      }; 
      stripeToken && makeRequest(); 
    },[stripeToken, cart.total, navigate])

  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title> Your Bag </Title>
            <Top>
                <Link to="/">
                <TopButton> CONTINUE SHOPPING</TopButton>
                </Link>
                <TopTexts>
                    <TopText>Shopping Bag(2) </TopText> 
                    <TopText>Your Wishlist (0) </TopText>     
                </TopTexts>     
            </Top>
            <Bottom>
                <Info> 
                    {cart.products.map((product)=> ( 
                    <Product>
                        <ProductDetail> 
                              <Image src={product.img} />  
                            <Details>
                                <ProductName> <b> Product:</b> {product.title} </ProductName> 
                                <ProductId> <b> ID:</b> {product._id} </ProductId>
                                <ProductColor color={product.color} />
                                <ProductSize> <b> Size: </b> {product.size} </ProductSize>
                            </Details> 
                        </ProductDetail>
                        <PriceDetail> 
                            <ProductAmountContainer>
                                <Remove /> 
                                <ProductAmount> {product.quantity} </ProductAmount>
                                <Add />   
                            </ProductAmountContainer>
                            <ProductPrice>$ {product.price*product.quantity} </ProductPrice>    
                        </PriceDetail> 
                    </Product>
                    ))}
                </Info>
                <Summary> 
                    <SummaryTitle> Order Summary </SummaryTitle>
                    <SummaryItem> 
                        <SummaryItemText> Subtotal </SummaryItemText>
                        <SummaryItemPrice>$ {cart.total} </SummaryItemPrice>   
                    </SummaryItem>
                    <SummaryItem> 
                        <SummaryItemText> Estimated Shipping </SummaryItemText>
                        <SummaryItemPrice>$ 5.99 </SummaryItemPrice>   
                    </SummaryItem>
                    <SummaryItem> 
                        <SummaryItemText> Shipping Discount </SummaryItemText>
                        <SummaryItemPrice>$ -5.99 </SummaryItemPrice>   
                    </SummaryItem>
                    <SummaryItem type="total"> 
                        <SummaryItemText> Total </SummaryItemText>
                        <SummaryItemPrice>$ {cart.total} </SummaryItemPrice>   
                    </SummaryItem> 
                    <StripeCheckout
                        name="merch mania"
                        image="https://images.unsplash.com/photo-1623859763838-a304cbfd4901?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=150"
                        billingAddress
                        shippingAddress
                        description={`Your total is $${cart.total}`}
                        amount={cart.total*100}
                        token={onToken}
                        stripeKey={KEY}
                    >
                        <Button> CHECKOUT NOW </Button> 
                    </StripeCheckout>
                </Summary>    
            </Bottom>
        </Wrapper> 
        <Footer />
    </Container>
  )
}

export default Cart