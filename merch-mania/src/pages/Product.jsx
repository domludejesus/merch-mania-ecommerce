import Announcement from "../components/Announcement"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { Add, Remove } from "@material-ui/icons"
import { mobile } from "../responsive"

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 50px; 
    display: flex; 
    ${mobile({ padding: "10px", flexDirection: "Column" })};
`
const ImgContainer = styled.div`
    flex: 1; 
`
const Image = styled.img`
    width: 100%; 
    height: 60vh; 
    object-fit: cover; 
    ${mobile({ height: "40vh" })};
`
const InfoContainer = styled.div`
    flex: 1; 
    padding: 0px 50px; 
    ${mobile({ padding: "10px" })};
`
const Title = styled.h1`
    font-weight: 200; 
`
const Desc = styled.p`
    margin: 20px 0px; 
`
const Price = styled.span`
    font-weight: 100; 
    font-size: 40px; 
`
const FilterContainer = styled.div`
    width: 50%; 
    margin: 30px 0px; 
    display: flex; 
    justify-content: space-between; 
    ${mobile({ width: "100%" })};
`
const Filter = styled.div`
    display: flex; 
    align-items: center; 
`
const FilterTitle = styled.span`
    font-size: 20px; 
    font-weight: 200; 

`
const FilterColor = styled.div`
    width: 20px; 
    height: 20px;
    border-radius: 50%; 
    background-color: ${(props) => props.color}; 
    margin: 0px 5px; 
    cursor: pointer; 

`
const FilterSize = styled.select`
    margin-left: 10px; 
    padding: 5px; 
`
const FilterSizeOption = styled.option`

`
const AddContainer = styled.div`
    width: 50%; 
    display: flex; 
    align-items: center; 
    justify-content: space-between;
    ${mobile({ width: "100%" })};
`
const AmountContainer = styled.div`
    display: flex; 
    align-items: center; 
    font-weight: 700; 
`
const Amount = styled.span`
    width: 30px; 
    height: 30px; 
    border-radius: 10px; 
    border: 2px solid red; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    margin: 0px 5px; 
`
const Button = styled.button`
    padding: 15px; 
    border: 2px solid red; 
    background-color: white; 
    cursor: pointer;
    font-weight: 500; 
    
    &:hover {
        background-color: #ffe6e6; 

    }
`


const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                  <Image src="https://images.unsplash.com/photo-1666153184621-bc6445e3568d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"/>
            </ImgContainer>
            <InfoContainer>
                <Title> Sweat Pants </Title>
                <Desc> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, eligendi,
                     fugit saepe quidem nostrum molestiae quae error enim earum accusantium consectetur,
                     vitae amet. Inventore reprehenderit laudantium facere voluptas, hic atque. 
                </Desc>
                <Price>$ 45</Price>
                <FilterContainer>
                    <Filter> 
                        <FilterTitle> Color </FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue" />
                        <FilterColor color="gray" />
                    </Filter>
                    <Filter>
                        <FilterTitle> Size </FilterTitle>
                        <FilterSize>
                            <FilterSizeOption> XS </FilterSizeOption>
                            <FilterSizeOption> S </FilterSizeOption>
                            <FilterSizeOption> M </FilterSizeOption>
                            <FilterSizeOption> L </FilterSizeOption>
                            <FilterSizeOption> XL </FilterSizeOption>
                            <FilterSizeOption> XXL </FilterSizeOption>
                    </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove />
                        <Amount> 1 </Amount>
                        <Add />
                    </AmountContainer>
                    <Button> ADD TO CART </Button>
                    </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product