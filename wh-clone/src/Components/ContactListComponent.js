import React from 'react'
import styled from "styled-components";

const Container = styled.div`
display:flex;
flex-direction:column;
height:100%;
flex:0.8;
`;

const ProfileInfoDiv = styled.div`
display:flex;
flex-direction:row;
background:#ededed;
padding:10px;
`;


const ProfileImage = styled.img`
 width:50px;
 height:50px;
 border-radius:50%;
`;

const SearchBox = styled.div`
 background:#f6f6f6;
 padding:10px;
`;

export const SearchContainer = styled.div`
background:white;
display:flex;
border-radius:16px;
padding:10px;
gap:10px;
width:95%;
align-items:center;
`;

const SearchIcon = styled.img`
width:20px;
height:20px;
`;

export const SearchInput = styled.input`
 width:100%;
 border:none;
 outline:none;
 font-size:16px;
`;

const ContactItem = styled.div`
display:flex;
flex-direction:row;
border-bottom:1px solid #f2f2f2;
background:white;
cursor:pointer;
padding:10px;
gap:10px;
align-items:center;
justify-content:space-between;
`;

const ProfileIcon = styled(ProfileImage)`
 width:50px;
 height:50px;
`;

const ContactInfo = styled.div`
display:flex;
flex-direction:column;
width:100%;
`;

const ContactName = styled.span`
width:100%;
font-size:15px;
color:black;
`;

const MessageText = styled.span`
width:20%;
font-size:15px;
margin-top:3px;
color:rgba(0,0,0,0.8);
`;



const ContactComponent = () => {
  return <ContactItem>
    <ProfileImage src='/Profile/second' />
    <ContactInfo>
      <ContactName>Pradeep</ContactName>
      <MessageText>hello</MessageText>
    </ContactInfo>
    <MessageText>10:30PM</MessageText>
  </ContactItem>
}

const ContactListComponent = () => {
  return <Container>
    <ProfileInfoDiv>
      <ProfileImage src="/Profile/first" />
    </ProfileInfoDiv>
    <SearchBox>
      <SearchContainer>
        <SearchIcon src={"/Profile/search.svg"} />
        <SearchInput placeholder='Search Or Start New Chat' />
      </SearchContainer>
    </SearchBox>
    <ContactComponent />
    <ContactComponent />
    <ContactComponent />
    <ContactComponent />
    <ContactComponent />
    <ContactComponent />
    <ContactComponent />
  </Container>
}

export default ContactListComponent