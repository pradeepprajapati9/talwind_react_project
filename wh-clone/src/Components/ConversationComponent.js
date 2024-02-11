import React from 'react'
import styled from "styled-components";
import { SearchContainer, SearchInput } from "./ContactListComponent";
const Container = styled.div`
display:flex;
flex-direction:column;
height:100%;
flex:2;
background:#f6f7f8;
`;

const ProfileHeader = styled.div`
display:flex;
flex-direction:row;
background:#ededed;
padding:10px;
align-items:center;
gap:10px;
`;


const ProfileImage = styled.img`
height:50px;
width:50px;
border-radius:50%;
`;

const ChatBox = styled.div`
display:flex;
background:#f0f0f0;
align-items:center;
bottom:0;
width:100%;
position:fixed;
`;

const EmojiImage = styled.img`
width:40px;
height:40px;
border-radius:50%;
opacity:0.4;
`;

const MessageContainer=styled.div`
display:flex;
flex-direction:column;
height:100%;
`;

const MessageDiv=styled.div`
display:flex;
margin:5px 16px;
`;
const ConversationComponent = () => {
  return <Container>
    <ProfileHeader>
      <ProfileImage src='/Profile/third' />
      ContactListComponent
    </ProfileHeader>
    <MessageContainer>
      <MessageDiv></MessageDiv>
    </MessageContainer>
    <ChatBox>
      <SearchContainer>
        <EmojiImage src={'/Profile/five'} />
        <SearchInput placeholder='Type Your Message' />
      </SearchContainer>
    </ChatBox>
  </Container>
}

export default ConversationComponent

