import React from "react";
import styled from "styled-components";
import data from "../../colors.js";


const Percentages = styled.ol`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    display: flex;
    flex-direction: row;
    padding-right: 5px;
    text-align: center;
    white-space: nowrap;
    border-bottom: 0;
`;


const StatsWrapper = (props) => {
  const color = Object.entries(data).filter(key => key[0] == props[0])
  const hex = color[0][1]
  console.log(props)
  const LanguageColor = styled.span`
    background-color: ${hex};
    display: flex;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 10px 2px 0 10px;`;

  return (
    <ListItem key={props[0]}>
      <LanguageColor></LanguageColor>
        <span>{props[0]}</span>
        <span>- {`${props[1]}%`}</span>
     </ListItem>
  )
}


const Stats = (languages) => {
  return(
    <Percentages>
      {
        Object.entries(languages).map(key => {
          if(key[1] != null){
            return(
              <StatsWrapper {...key} />
            )
          }
        })
      }
    </Percentages>
  )
}

export default Stats;
