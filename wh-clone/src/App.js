import React from 'react'
import styled from "styled-components";
import ConversationComponent from "./Components/ConversationComponent"
import ContactListComponent from "./Components/ContactListComponent"

const Container = styled.div`
display:flex;
flex-direction:row;
hight:100vh;
width:100%;
background:#f8f9fb;
`
const App = () => {
  return <Container>
    <ContactListComponent />
    <ConversationComponent />
  </Container>

}

export default App