import styled from "styled-components"

const Container = styled.div`
    height: 40px; 
    background-color: #911910; 
    color: white; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    font-size: 16px; 
    font-weight: 500; 
`

const Announcement = () => {
  return (
    <Container> 
        Super Deal! Free Shipping on Orders over $40
    </Container>
  )
}

export default Announcement