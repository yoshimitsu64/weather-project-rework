import React from 'react';
import Sidebar from "../Sidebar";
import {StyledBackground} from "./styled";
import Header from "../Header";

function Background(){
  return <StyledBackground>
    <Header/>
    <Sidebar/>
  </StyledBackground>
};

export default Background;
