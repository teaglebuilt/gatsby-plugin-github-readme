import React from "react";
import styled from "styled-components";
import data from "../../colors.js";


const LanguageWrapper = (props) => {
  const color = Object.entries(data).filter(key => key[0] == props[0])
  const hex = color[0][1]
  const Language = styled.span`
    background-color: ${hex};
    height: 10px;
    width: ${props[1]}%;
`;
  return <Language></Language>
}


const Graph = (languages) => {
  return Object.entries(languages).map((key, value) => {
    if(key[1] != null){
      return(
        <LanguageWrapper {...key} />
      )
    }
  })
}

export default Graph;