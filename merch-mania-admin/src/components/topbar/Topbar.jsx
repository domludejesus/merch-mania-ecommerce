import React from 'react'
import styled from 'styled-components'
import { NotificationsNone, Settings } from '@material-ui/icons'

const Container = styled.div`
    width: 100%; 
    height: 50px; 
    background-color: white; 
    
`

const Wrapper = styled.div`
    height: 100%; 
    padding: 0px 20px;
    display: flex; 
    align-items: center; 
    justify-content: space-between;
    
`
const Left = styled.div`
    font-weight: bold; 
    font-size: 30px; 
    color: red; 
    cursor: pointer; 
`
const Right = styled.div`
    
    display: flex; 
    align-items: center; 
    cursor: pointer; 
    margin-right: 10px; 

`
const MenuItem = styled.div`
    position: relative; 
`

const Badge = styled.div`
    position: absolute; 
    width: 15px; 
    height: 20px; 
    color: white; 
    top: -20px;
    background-color: red;
    border-radius: 50%;
    display: flex;
    align-items: center; 
    justify-content: center;
    font-size: 15px; 
    margin-right: 10px;   
    
`
const Image = styled.img`
    height: 40px; 
    width: 40px; 
    border-radius: 50%; 
    cursor: pointer; 
    margin-left: 20px; 
    object-fit: cover; 
`
const Body = styled.p`
`


const Topbar = () => {
  return (
    <Container> 
        <Wrapper>
            <Left> Merch Mania Admin</Left>
            <Right> 
                <MenuItem> <Settings /> </MenuItem>
                <MenuItem> <NotificationsNone /> </MenuItem>
                <MenuItem> <Badge badgeContent={2} > 2</Badge> </MenuItem>
                  <MenuItem> <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"/> </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Topbar