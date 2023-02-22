import styled from "styled-components";
import { BiBrain } from "react-icons/bi";
import { BsLightningCharge, BsChatDots } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";

export const BrainIcon = styled(BiBrain)`
  vertical-align: middle;
`;

export const LightIcon = styled(BsLightningCharge)`
  vertical-align: middle;
`;

export const ChatIcon = styled(BsChatDots)`
  vertical-align: middle;
`;

export const AyeIcon = styled(AiOutlineEye)`
  vertical-align: middle;
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
  padding: 1em;
  ${(props) => {
    if (props.column)
      return `
    flex-direction: column;
    width: 25%;  
    `;
  }}
  ${(props) => {
    if (props.columnBlue)
      return `
    flex-direction: column;
    width: 25%;  
   background: rgb(52,45,203);
  background: linear-gradient(0deg, rgba(52,45,203,1) 0%, rgba(103,67,254,1) 100%);
    `;
  }}
  ${(props) => {
    if (props.circle)
      return `
    flex-direction: column;
    border-radius: 50%;
    width: 35%;
    height: auto;
    background: rgb(72,53,241);
background: linear-gradient(0deg, rgba(72,53,241,1) 0%, rgba(76,34,201,1) 100%);
    margin: 0 auto;
    padding: 1.5em;`;
  }}
`;

export const StyledH1 = styled.h1`
  text-align: left;
  ${(props) => {
    if (props.circleH1)
      return `
    font-size: 5rem;
    margin: 0;
    text-align: center;`;
  }}
`;

export const StyledP = styled.p`
  margin: 0;
`;
