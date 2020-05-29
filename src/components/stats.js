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

// const Stats = (languages) => {
//     return (
//       <Percentages>
//         {Object.entries(languages).map(key => {
//           if (key[0] === "Python") {
//             const LanguageColor = styled.span`
//               background-color: #3572a5;
//               display: inline-block;
//               width: 10px;
//               height: 10px;
//               border-radius: 50%;
//               margin-right: 5px;
//             `
//             return (
//               <ListItem key={key[0]}>
//                 <Percent>
//                   <LanguageColor></LanguageColor>
//                   <span>{key[0]}</span>
//                   <span>{`${key[1]}%`}</span>
//                 </Percent>
//               </ListItem>
//             )
//           } else if (key[0] === "Shell") {
//             const LanguageColor = styled.span`
//               background-color: #89e051;
//               display: inline-block;
//               width: 10px;
//               height: 10px;
//               border-radius: 50%;
//               margin-right: 5px;
//             `
//             return (
//               <ListItem key={key[0]}>
//                 <Percent>
//                   <LanguageColor></LanguageColor>
//                   <span>{key[0]}</span>
//                   <span>{`${key[1]}%`}</span>
//                 </Percent>
//               </ListItem>
//             )
//           } else if (key[0] === "Vue") {
//             const LanguageColor = styled.span`
//               background-color: #3fb381;
//               display: inline-block;
//               width: 10px;
//               height: 10px;
//               border-radius: 50%;
//               margin-right: 5px;
//             `
//             return (
//                 <ListItem key={key[0]}>
//                     <Percent>
//                         <LanguageColor></LanguageColor>
//                         <span>{key[0]}</span>
//                         <span>{`${key[1]}%`}</span>
//                     </Percent>
//               </ListItem>
//             )
//           } else if (key[0] === "JavaScript") {
//             const LanguageColor = styled.span`
//               background-color: #e9d64d;
//               display: inline-block;
//               width: 10px;
//               height: 10px;
//               border-radius: 50%;
//               margin-right: 5px;
//             `
//             return (
//                 <ListItem key={key[0]}>
//                 <Percent>
//                   <LanguageColor></LanguageColor>
//                   <span>{key[0]}</span>
//                   <span>{`${key[1]}%`}</span>
//                 </Percent>
//               </ListItem>
//             )
//           } else if (key[0] === "Makefile") {
//             const LanguageColor = styled.span`
//               background-color: #427919;
//               display: inline-block;
//               width: 10px;
//               height: 10px;
//               border-radius: 50%;
//               margin-right: 5px;
//             `
//             return (
//                 <ListItem key={key[0]}>
//                 <Percent>
//                   <LanguageColor></LanguageColor>
//                   <span>{key[0]}</span>
//                   <span>{`${key[1]}%`}</span>
//                 </Percent>
//               </ListItem>
//             )
//           } else if (key[0] === "HTML") {
//             const LanguageColor = styled.span`
//               background-color: #de4b24;
//               display: inline-block;
//               width: 10px;
//               height: 10px;
//               border-radius: 50%;
//               margin-right: 5px;
//             `
//             return (
//                 <ListItem key={key[0]}>
//                 <Percent>
//                   <LanguageColor></LanguageColor>
//                   <span>{key[0]}</span>
//                   <span>{`${key[1]}%`}</span>
//                 </Percent>
//               </ListItem>
//             )
//           } else if (key[0] === "Dockerfile") {
//             const LanguageColor = styled.span`
//               background-color: #2c3e50;
//               display: inline-block;
//               width: 10px;
//               height: 10px;
//               border-radius: 50%;
//               margin-right: 5px;
//             `
//             return (
//                 <ListItem key={key[0]}>
//                 <Percent>
//                   <LanguageColor></LanguageColor>
//                   <span>{key[0]}</span>
//                   <span>{`${key[1]}%`}</span>
//                 </Percent>
//               </ListItem>
//             )
//           } else if (key[0] === "RobotFramework") {
//             const LanguageColor = styled.span`
//               background-color: #d44d4a;
//               display: inline-block;
//               width: 10px;
//               height: 10px;
//               border-radius: 50%;
//               margin-right: 5px;
//             `
//             return (
//                 <ListItem key={key[0]}>
//                 <Percent>
//                   <LanguageColor></LanguageColor>
//                   <span>{key[0]}</span>
//                   <span>{`${key[1]}%`}</span>
//                 </Percent>
//               </ListItem>
//             )
//           } else if (key[0] === "CSS") {
//             const LanguageColor = styled.span`
//               background-color: #563e76;
//               display: inline-block;
//               width: 10px;
//               height: 10px;
//               border-radius: 50%;
//               margin-right: 5px;
//             `
//             return (
//                 <ListItem key={key[0]}>
//                 <Percent>
//                   <LanguageColor></LanguageColor>
//                   <span>{key[0]}</span>
//                   <span>{`${key[1]}%`}</span>
//                 </Percent>
//               </ListItem>
//             )
//           } else if (key[0] === "Vim script") {
//             const LanguageColor = styled.span`
//               background-color: #199f4b;
//               display: inline-block;
//               width: 10px;
//               height: 10px;
//               border-radius: 50%;
//               margin-right: 5px;
//             `
//             return (
//                 <ListItem key={key[0]}>
//                 <Percent>
//                   <LanguageColor></LanguageColor>
//                   <span>{key[0]}</span>
//                   <span>{`${key[1]}%`}</span>
//                 </Percent>
//               </ListItem>
//             )
//           } else {
//             const LanguageColor = styled.span`
//               background-color: #ededed;
//               display: inline-block;
//               width: 10px;
//               height: 10px;
//               border-radius: 50%;
//               margin-right: 5px;
//             `
//             return (
//                 <ListItem key={key[0]}>
//                 <Percent>
//                   <LanguageColor></LanguageColor>
//                   <span>{key[0]}</span>
//                   <span>{`${key[1]}%`}</span>
//                 </Percent>
//               </ListItem>
//             )
//           }
//         })}
//       </Percentages>
//     )
//   }
  
//   export default Stats;
  