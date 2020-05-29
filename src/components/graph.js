import React from "react";
import styled from "styled-components";
import data from "../../colors.js";


const Language = styled.span`
  background-color: ${color[1]};
  height: 10px;
`;


const LanguageWrapper = (props) => {
  const color = Object.entries(data).filter(key => key[0] == props[0])
  return <Language>{color}</Language>
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


    // return Object.entries(languages).map((key, value) => {
    //   console.log(key)
    //   if (key[0] === "Python") {
    //       return <LanguageWrapper color={parseInt("3572a5")} percent={key[1]}></LanguageWrapper>
    //   }
      // if (key[0] === "Python") {
      //   const Language = styled.span`
      //     background-color: #3572a5;
      //     width: ${key[1]}%;
      //     height: 10px;
      //   `
      //   return <LanguageWrapper percent={key[1]}></LanguageWrapper>
      // } else if (key[0] === "Shell") {
      //   const Language = styled.span`
      //     background-color: #89e051;
      //     width: ${key[1]}%;
      //     height: 10px;
      //   `
      //   return <Language></Language>
      // } else if (key[0] === "Vue") {
      //   const Language = styled.span`
      //     background-color: #3fb381;
      //     width: ${key[1]}%;
      //     height: 10px;
      //   `
      //   return <Language></Language>
      // } else if (key[0] === "JavaScript") {
      //   const Language = styled.span`
      //     background-color: #e9d64d;
      //     width: ${key[1]}%;
      //     height: 10px;
      //   `
      //   return <Language></Language>
      // } else if (key[0] === "Makefile") {
      //   const Language = styled.span`
      //     background-color: #427919;
      //     width: ${key[1]}%;
      //     height: 10px;
      //   `
      //   return <Language></Language>
      // } else if (key[0] === "HTML") {
      //   const Language = styled.span`
      //     background-color: #de4b24;
      //     width: ${key[1]}%;
      //     height: 10px;
      //   `
      //   return <Language></Language>
      // } else if (key[0] === "Dockerfile") {
      //   const Language = styled.span`
      //     background-color: #2c3e50;
      //     width: ${key[1]}%;
      //     height: 10px;
      //   `
      //   return <Language></Language>
      // } else if (key[0] === "RobotFramework") {
      //   const Language = styled.span`
      //     background-color: #d44d4a;
      //     width: ${key[1]}%;
      //     height: 10px;
      //   `
      //   return <Language></Language>
      // } else if (key[0] === "CSS") {
      //   const Language = styled.span`
      //     background-color: #563e76;
      //     width: ${key[1]}%;
      //     height: 10px;
      //   `
      //   return <Language></Language>
      // } else if (key[0] === "Vim script") {
      //   const Language = styled.span`
      //     background-color: #199f4b;
      //     width: ${key[1]}%;
      //     height: 10px;
      //   `
      //   return <Language></Language>
      // } else {
      //   const Language = styled.span`
      //     background-color: #ededed;
      //     width: ${key[1]}%;
      //     height: 10px;
      //   `
      //   return <Language></Language>
      // }
    // })
  
  
 